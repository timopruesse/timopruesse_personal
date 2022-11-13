import type { RequestHandler } from '@sveltejs/kit';

const now = new Date().toISOString();
const paths = Object.keys(import.meta.glob('/src/routes/**/+page.svelte'));
const pages = paths.map((p) => p.replace('/src/routes', '').replace('/+page.svelte', ''));

interface Page {
	path: string;
	priority: string;
	date: string;
}

export const GET: RequestHandler = async () => {
	const headers = {
		'Cache-Control': 'max-age=0, s-max-age=600',
		'Content-Type': 'application/xml'
	};

	const urls = pages.map((path) => {
		const page: Page =
			path === ''
				? { path: '/', date: now, priority: '1.00' }
				: { path, date: now, priority: '0.80' };

		return `<url>
                    <loc>https://www.timo-pruesse.de${page.path}</loc>
                    <lastmod>${page.date}</lastmod>
                    <priority>${page.priority}</priority>
                </url>`;
	});

	const body = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${urls}
        </urlset>
    `;

	return new Response(body, { headers });
};
