import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getGoogleAdsPage } from '@/lib/google-ads-services';
import GoogleAdsSubPage from '@/components/services/GoogleAdsSubPage';

const SLUG = 'google-ads-financial-services';

export async function generateMetadata(): Promise<Metadata> {
  const config = getGoogleAdsPage(SLUG);
  if (!config) {
    return buildMetadata({
      title: 'Google Ads | Endpoint Media',
      description: 'Google Ads services in Johannesburg.',
      path: '/services/google-ads',
    });
  }
  return buildMetadata({
    title: config.metadata.title,
    description: config.metadata.description,
    path: config.path,
    keywords: config.metadata.keywords,
  });
}

export default function Page() {
  const config = getGoogleAdsPage(SLUG);
  if (!config) notFound();
  return <GoogleAdsSubPage config={config} />;
}
