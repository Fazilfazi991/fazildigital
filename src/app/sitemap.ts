import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

const SITE_URL = process.env.SITE_URL || 'https://www.fazildigital.com';

const caseStudiesSlugs = [
  "dubai-seo",
  "riyadh-paid-ads",
  "dammam-marketing",
  "jeddah-web-development",
  "abu-dhabi-social-media",
  "sharjah-ai-automation"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/locations',
    '/case-studies',
    '/blog',
    '/portfolio',
    '/methodology',
    '/markets',
    '/contact',
    '/digital-marketing-expert-dubai'
  ].map((route) => ({
    url: `${SITE_URL}${route}${route === '' ? '/' : '/'}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.lastModified || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const locationRoutes = locations.map((loc) => ({
    url: `${SITE_URL}/locations/${loc.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const caseStudyRoutes = caseStudiesSlugs.map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Combination routes: /[location]/[service] (Money Pages)
  const locationServiceRoutes = locations.flatMap((loc) => 
    services.map((service) => ({
      url: `${SITE_URL}/${loc.slug}/${service.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))
  );

  return [
    ...staticRoutes,
    ...locationServiceRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
  ];
}
