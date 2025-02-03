// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wc-toolkit.com',
	integrations: [
		starlight({
			title: 'Web Components Toolkit',
			logo: {
				src: "./public/favicon.svg",
				alt: "WC Toolkit Logo",
			},
			social: {
				github: 'https://github.com/orgs/wc-toolkit/repositories',
			},
			sidebar: [
				{
					label: 'Introduction',
					slug: 'getting-started',
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/styles/custom-styles.css'],
		}),
	],
});
