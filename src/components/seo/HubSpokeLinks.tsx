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
};

const HubSpokeLinks = ({ variant, slug, title = 'Related Resources' }: HubSpokeLinksProps) => {
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <InternalLinks title={title} links={links} />
        </div>
      </div>
    </section>
  );
};

export default HubSpokeLinks;
