// src/components/seo/InternalLinks.tsx
import React from 'react';
import Link from 'next/link';

interface InternalLink {
  href: string;
  title: string;
  description?: string;
}

interface InternalLinksProps {
  links: InternalLink[];
  title?: string;
  variant?: 'default' | 'compact' | 'sidebar';
}

/**
 * Internal Links Component for Strategic SEO Linking
 * Implements pillar-cluster model for topical authority
 */
const InternalLinks: React.FC<InternalLinksProps> = ({ 
  links, 
  title = "Related Content",
  variant = 'default'
}) => {
  if (variant === 'compact') {
    return (
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-4 font-heading text-gray-900">{title}</h3>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-teal-600 hover:text-teal-800 font-semibold text-sm transition duration-300 hover:underline"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <aside className="bg-gray-50 rounded-xl p-6 border-l-4 border-teal-600">
        <h3 className="text-xl font-bold mb-4 font-heading text-gray-900">{title}</h3>
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="block text-teal-600 hover:text-teal-800 font-semibold transition duration-300 hover:underline"
              >
                {link.title}
              </Link>
              {link.description && (
                <p className="text-sm text-gray-600 mt-1">{link.description}</p>
              )}
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  // Default variant - Full featured
  return (
    <section className="mt-16 pt-12 border-t-2 border-gray-200 bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading text-gray-900">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-500 hover:shadow-lg transition duration-300 block"
          >
            <h3 className="text-lg font-bold font-heading text-gray-900 group-hover:text-teal-700 transition mb-2">
              {link.title}
            </h3>
            {link.description && (
              <p className="text-sm text-gray-600 leading-relaxed">
                {link.description}
              </p>
            )}
            <span className="text-teal-600 font-semibold text-sm group-hover:underline inline-flex items-center mt-2">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InternalLinks;

