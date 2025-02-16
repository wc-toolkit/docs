// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
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
					label: 'Getting Started',
					slug: 'getting-started',
				},
				{
					label: 'CEM Utilities',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'cem-utilities/overview' },
						{ label: 'CEM Utilities', slug: 'cem-utilities/cem-utils' },
						{ label: 'Deep Merge', slug: 'cem-utilities/deep-merge' },
						{ label: 'Descriptions', slug: 'cem-utilities/descriptions' },
						{ label: 'String Utilities', slug: 'cem-utilities/string-utils' },
						{ label: 'Custom CEM Types', slug: 'cem-utilities/types' },
					],
				},
				{
					label: 'Documentation',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'documentation/overview' },
						{ label: 'JSDoc Tags', slug: 'documentation/jsdoc-tags' },
						{ label: 'Type Parser', slug: 'documentation/type-parser' },
					],
				},
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			customCss: ['./src/styles/custom-styles.css'],
		}),
	],
	image: {
    service: passthroughImageService()
  }
});
