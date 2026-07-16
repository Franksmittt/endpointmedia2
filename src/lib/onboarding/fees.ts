/**
 * Fee / notice defaults for draft package interpolation.
 * Templates keep {{tokens}}; these fill when form/proposal values are absent.
 */

export const FEE_DEFAULTS = {
  setup_clawback_zar: '7500',
  monthly_retainer_zar: '5000',
  notice_business_days: '20',
} as const;

export type FeeTokenMap = {
  setup_clawback_zar: string;
  monthly_retainer_zar: string;
  notice_business_days: string;
  setup_fee_zar: string;
  setup_fee_waived: string;
  waived_setup_clawback_zar: string;
  ads_retainer_zar: string;
  website_fee_zar: string;
  website_deposit_zar: string;
  website_mid_zar: string;
  website_final_zar: string;
  other_fees_zar: string;
  notice_period_days: string;
  min_monthly_ad_spend_zar: string;
};

export function buildFeeTokens(minMonthlyAdSpendZar?: string): FeeTokenMap {
  const retainer = FEE_DEFAULTS.monthly_retainer_zar;
  const clawback = FEE_DEFAULTS.setup_clawback_zar;
  const notice = FEE_DEFAULTS.notice_business_days;
  return {
    setup_clawback_zar: clawback,
    monthly_retainer_zar: retainer,
    notice_business_days: notice,
    setup_fee_zar: clawback,
    setup_fee_waived: 'Yes (subject to clawback on early cancel)',
    waived_setup_clawback_zar: clawback,
    ads_retainer_zar: retainer,
    website_fee_zar: 'TBD in proposal',
    website_deposit_zar: 'TBD',
    website_mid_zar: 'TBD',
    website_final_zar: 'TBD',
    other_fees_zar: '—',
    notice_period_days: notice,
    min_monthly_ad_spend_zar: minMonthlyAdSpendZar?.trim() || 'TBD',
  };
}
