import type { MetadataRoute } from 'next';
import { site } from '@/content/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: new URL('/', site.url).toString() }];
}
