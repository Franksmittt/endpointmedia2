export type BlogSilo = 'web-architecture' | 'google-ads' | 'local-dominance' | 'meta-ads';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  silo?: BlogSilo;
  keywords: string[];
  readingTimeMinutes: number;
  faqs?: { question: string; answer: string }[];
}

export interface BlogPost extends BlogPostMeta {
  contentKey: string;
}
