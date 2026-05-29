import React from 'react';
import { BASE_URL, buildCaseStudyArticleSchema, secureJsonLD } from '@/lib/seo';
import { CASE_STUDY_SEO } from '@/lib/hub-links';

type CaseStudyArticleSchemaProps = {
  slug: string;
};

const CaseStudyArticleSchema = ({ slug }: CaseStudyArticleSchemaProps) => {
  const meta = CASE_STUDY_SEO[slug];
  if (!meta) return null;

  const schema = buildCaseStudyArticleSchema({
    url: `${BASE_URL}/case-studies/${slug}`,
    headline: meta.headline,
    description: meta.description,
    datePublished: meta.datePublished,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: secureJsonLD(schema) }}
    />
  );
};

export default CaseStudyArticleSchema;
