import { allServices, serviceAreas } from '@/lib/data';

export default function sitemap() {
  const baseUrl = 'https://bradleysmowingllc.com';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/service-areas',
    '/projects',
    '/contact',
    '/request-estimate',
    '/privacy-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const servicePages = allServices.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const areaPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: area.primary ? 0.95 : 0.85,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
