/**
 * Endpoint Media — Account Overlord
 * Google Ads Script (runs daily in the Google Ads UI scheduler)
 *
 * Modules:
 *   1. 404 Sentinel      — pause ads pointing at dead URLs
 *   2. Budget Pacing     — warn when monthly spend exceeds 110% of pace
 *   3. Anomaly Detection — warn when yesterday's avg CPC exceeds safety ceiling
 */

/** Hardcoded monthly budget ceiling (account currency, e.g. ZAR). R50/day ≈ R1500/month. */
var TARGET_MONTHLY_BUDGET = 1500.0;

/** Maximum acceptable average CPC before anomaly alert (account currency). */
var MAX_SAFE_CPC = 30.0;

/** HTTP status codes that trigger an immediate ad pause. */
var FATAL_HTTP_CODES = [404, 500];

function main() {
  Logger.log('=== Account Overlord: daily run started ===');
  run404Sentinel();
  runBudgetPacingAlarm();
  runAnomalyDetection();
  Logger.log('=== Account Overlord: daily run complete ===');
}

// ---------------------------------------------------------------------------
// Module 1: The 404 Sentinel
// ---------------------------------------------------------------------------

function run404Sentinel() {
  Logger.log('[404 Sentinel] Scanning enabled ads...');

  var query =
    'SELECT ' +
    '  campaign.name, ' +
    '  ad_group.name, ' +
    '  ad_group.id, ' +
    '  ad_group_ad.ad.id, ' +
    '  ad_group_ad.ad.final_urls, ' +
    '  ad_group_ad.status ' +
    'FROM ad_group_ad ' +
    "WHERE ad_group_ad.status = 'ENABLED' " +
    "AND campaign.status = 'ENABLED' " +
    "AND ad_group.status = 'ENABLED'";

  var rows = AdsApp.search(query);
  var scanned = 0;
  var paused = 0;

  while (rows.hasNext()) {
    var row = rows.next();
    scanned++;

    var adGroupId = row.adGroup.id;
    var adId = row.adGroupAd.ad.id;
    var finalUrls = row.adGroupAd.ad.finalUrls;

    if (!finalUrls || finalUrls.length === 0) {
      continue;
    }

    for (var i = 0; i < finalUrls.length; i++) {
      var url = finalUrls[i];
      var statusCode = fetchStatusCode(url);

      if (FATAL_HTTP_CODES.indexOf(statusCode) !== -1) {
        pauseAdGroupAd(adGroupId, adId);
        paused++;
        Logger.log(
          '[404 Sentinel] CRITICAL: Paused ad ID ' +
            adId +
            ' in campaign "' +
            row.campaign.name +
            '" / ad group "' +
            row.adGroup.name +
            '" — URL returned HTTP ' +
            statusCode +
            ': ' +
            url
        );
        break;
      }
    }
  }

  Logger.log('[404 Sentinel] Scanned ' + scanned + ' enabled ad(s). Paused ' + paused + '.');
}

/**
 * Fetch a URL and return its HTTP status code without throwing on 4xx/5xx.
 * @param {string} url
 * @return {number}
 */
function fetchStatusCode(url) {
  try {
    var response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      followRedirects: true,
      validateHttpsCertificates: true,
    });
    return response.getResponseCode();
  } catch (e) {
    Logger.log('[404 Sentinel] ERROR fetching URL "' + url + '": ' + e.message);
    return 0;
  }
}

/**
 * Pause a specific ad within an ad group.
 * @param {string|number} adGroupId
 * @param {string|number} adId
 */
function pauseAdGroupAd(adGroupId, adId) {
  var adIterator = AdsApp.adGroupAds()
    .withIds([[String(adGroupId), String(adId)]])
    .get();

  if (adIterator.hasNext()) {
    adIterator.next().pause();
  } else {
    Logger.log(
      '[404 Sentinel] WARNING: Could not locate ad group ad [' +
        adGroupId +
        ', ' +
        adId +
        '] for pause operation.'
    );
  }
}

// ---------------------------------------------------------------------------
// Module 2: Budget Pacing Alarm
// ---------------------------------------------------------------------------

function runBudgetPacingAlarm() {
  Logger.log('[Budget Pacing] Evaluating monthly spend pace...');

  var monthSpend = AdsApp.currentAccount().getStatsFor('THIS_MONTH').getCost();
  var pacedTarget = calculatePacedBudget();
  var criticalThreshold = pacedTarget * 1.1;

  Logger.log(
    '[Budget Pacing] Month-to-date spend: R' +
      monthSpend.toFixed(2) +
      ' | Paced target: R' +
      pacedTarget.toFixed(2) +
      ' | 110% threshold: R' +
      criticalThreshold.toFixed(2)
  );

  if (monthSpend > criticalThreshold) {
    Logger.log(
      '[Budget Pacing] CRITICAL: Monthly spend R' +
        monthSpend.toFixed(2) +
        ' exceeds 110% of paced budget (R' +
        criticalThreshold.toFixed(2) +
        '). Review bids, negatives, and dayparting immediately.'
    );
  } else {
    Logger.log('[Budget Pacing] OK — spend is within acceptable pacing limits.');
  }
}

/**
 * Linear monthly pacing: budget × (dayOfMonth / daysInMonth).
 * @return {number}
 */
function calculatePacedBudget() {
  var today = new Date();
  var dayOfMonth = today.getDate();
  var daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  return TARGET_MONTHLY_BUDGET * (dayOfMonth / daysInMonth);
}

// ---------------------------------------------------------------------------
// Module 3: Anomaly Detection
// ---------------------------------------------------------------------------

function runAnomalyDetection() {
  Logger.log('[Anomaly Detection] Checking yesterday average CPC...');

  var yesterdayStats = AdsApp.currentAccount().getStatsFor('YESTERDAY');
  var avgCpc = yesterdayStats.getAverageCpc();
  var clicks = yesterdayStats.getClicks();
  var impressions = yesterdayStats.getImpressions();

  Logger.log(
    '[Anomaly Detection] Yesterday — Avg CPC: R' +
      avgCpc.toFixed(2) +
      ' | Clicks: ' +
      clicks +
      ' | Impressions: ' +
      impressions
  );

  if (clicks === 0) {
    Logger.log('[Anomaly Detection] SKIPPED — no clicks recorded yesterday.');
    return;
  }

  if (avgCpc > MAX_SAFE_CPC) {
    Logger.log(
      '[Anomaly Detection] WARNING: Yesterday average CPC R' +
        avgCpc.toFixed(2) +
        ' exceeded MAX_SAFE_CPC R' +
        MAX_SAFE_CPC.toFixed(2) +
        '. Investigate match types, search terms, and bid caps.'
    );
  } else {
    Logger.log('[Anomaly Detection] OK — average CPC is within safe limits.');
  }
}
