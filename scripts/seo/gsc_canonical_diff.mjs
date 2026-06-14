#!/usr/bin/env node

import { GoogleAuth } from 'google-auth-library';

const DEFAULT_BASE_URL = 'https://www.endpointmedia.co.za';
const INSPECTION_ENDPOINT =
  'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect';

const DEFAULT_HIGH_VALUE_PATHS = [
  '/',
  '/services/google-ads',
  '/services/website-development',
  '/services/local-seo',
  '/services/website-design-prices',
  '/pricing',
  '/case-studies',
  '/contact',
];

function trimTrailingSlash(url) {
  return url.length > 'https://x.y'.length ? url.replace(/\/$/, '') : url;
}

function parseCsv(value) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function resolveInspectionUrls(baseUrl) {
  const configuredUrls = process.env.GSC_INSPECTION_URLS;
  if (configuredUrls) {
    return parseCsv(configuredUrls).map((url) => new URL(url, baseUrl).toString());
  }

  return DEFAULT_HIGH_VALUE_PATHS.map((path) => new URL(path, baseUrl).toString());
}

function resolveSiteUrl(baseUrl) {
  return process.env.GSC_SITE_URL || trimTrailingSlash(baseUrl);
}

async function getAccessToken() {
  const scopes = ['https://www.googleapis.com/auth/webmasters.readonly'];
  const inlineCredentials = process.env.GSC_SERVICE_ACCOUNT_JSON;

  const auth = inlineCredentials
    ? new GoogleAuth({
        credentials: JSON.parse(inlineCredentials),
        scopes,
      })
    : new GoogleAuth({ scopes });

  const client = await auth.getClient();
  const token = await client.getAccessToken();

  if (!token.token) {
    throw new Error('GoogleAuth did not return an access token.');
  }

  return token.token;
}

async function inspectUrl({ accessToken, inspectionUrl, siteUrl }) {
  const response = await fetch(INSPECTION_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inspectionUrl,
      siteUrl,
      languageCode: 'en-US',
    }),
  });

  const payload = await response.json();

  if (!response.ok) {
    const message = payload?.error?.message ?? response.statusText;
    throw new Error(`${inspectionUrl}: GSC URL Inspection failed (${response.status}) ${message}`);
  }

  return payload.inspectionResult?.indexStatusResult ?? {};
}

function compareCanonicals({ inspectionUrl, indexStatusResult }) {
  const userCanonical = (indexStatusResult.userCanonical ?? '').trim();
  const googleCanonical = (indexStatusResult.googleCanonical ?? '').trim();
  const verdict = indexStatusResult.verdict ?? 'UNKNOWN';
  const coverageState = indexStatusResult.coverageState ?? 'UNKNOWN';

  return {
    inspectionUrl,
    userCanonical,
    googleCanonical,
    verdict,
    coverageState,
    passed: userCanonical.length > 0 && userCanonical === googleCanonical,
  };
}

async function main() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL;
  const siteUrl = resolveSiteUrl(baseUrl);
  const inspectionUrls = resolveInspectionUrls(baseUrl);
  const accessToken = await getAccessToken();
  const failures = [];

  console.log(`GSC Canonical Diff Checker`);
  console.log(`Site property: ${siteUrl}`);
  console.log(`Inspection sample size: ${inspectionUrls.length}`);

  for (const inspectionUrl of inspectionUrls) {
    const indexStatusResult = await inspectUrl({
      accessToken,
      inspectionUrl,
      siteUrl,
    });
    const result = compareCanonicals({ inspectionUrl, indexStatusResult });

    console.log(
      JSON.stringify(
        {
          url: result.inspectionUrl,
          verdict: result.verdict,
          coverageState: result.coverageState,
          userCanonical: result.userCanonical,
          googleCanonical: result.googleCanonical,
          canonicalParity: result.passed,
        },
        null,
        2,
      ),
    );

    if (!result.passed) {
      failures.push(result);
    }
  }

  if (failures.length > 0) {
    console.error('\nCanonical parity failure: Google rejected one or more declared canonicals.');
    for (const failure of failures) {
      console.error(
        `- ${failure.inspectionUrl}\n  userCanonical=${failure.userCanonical || '<missing>'}\n  googleCanonical=${failure.googleCanonical || '<missing>'}`,
      );
    }
    process.exit(1);
  }

  console.log('\nCanonical parity passed: userCanonical equals googleCanonical for every sampled URL.');
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
