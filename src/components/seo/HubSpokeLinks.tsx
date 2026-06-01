import React from 'react';
import InternalLinks from '@/components/seo/InternalLinks';
import {
  getCaseStudyHubLinks,
  getIndustryHubLinks,
  getIndustriesIndexHubLinks,
  getLocationHubLinks,
  getLocationsIndexHubLinks,
} from '@/lib/hub-links';

type HubSpokeLinksProps = {
  variant: 'location' | 'industry' | 'case-study';
  slug: string;
  title?: string;
  theme?: 'light' | 'dark';
};

const HubSpokeLinks = ({
  variant,
  slug,
  title = 'Related Resources',
  theme = 'dark',
}: HubSpokeLinksProps) => {
  const links =
    variant === 'location'
      ? slug === 'index'
        ? getLocationsIndexHubLinks()
        : getLocationHubLinks(slug)
      : variant === 'industry'
        ? slug === 'index'
          ? getIndustriesIndexHubLinks()
          : getIndustryHubLinks(slug)
        : getCaseStudyHubLinks(slug);

  return (
    <section className="bg-zinc-950 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          <InternalLinks title={title} links={links} theme={theme} />
        </div>
      </div>
    </section>
  );
};

export default HubSpokeLinks;
