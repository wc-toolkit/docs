// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

const googleAnalyticsId = "G-GQV41HQCLZ";

// https://astro.build/config
export default defineConfig({
  site: "https://wc-toolkit.com",
  integrations: [
    starlight({
      title: "Web Components Toolkit",
      logo: {
        src: "./public/favicon.svg",
        alt: "WC Toolkit Logo",
      },
      social: {
        github: "https://github.com/orgs/wc-toolkit/repositories",
      },
      head: [
        // Adding google analytics
        {
          tag: "script",
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
          },
        },
        {
          tag: "script",
          content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsId}');
          `,
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          slug: "getting-started",
        },
        {
          label: "CEM Utilities",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Overview", slug: "cem-utilities/overview" },
            { label: "CEM Utilities", slug: "cem-utilities/cem-utils" },
            { label: "Deep Merge", slug: "cem-utilities/deep-merge" },
            { label: "Descriptions", slug: "cem-utilities/descriptions" },
            { label: "String Utilities", slug: "cem-utilities/string-utils" },
            { label: "Custom CEM Types", slug: "cem-utilities/types" },
          ],
        },
        {
          label: "Documentation",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Overview", slug: "documentation/overview" },
						{ label: 'CEM Inheritance', slug: 'documentation/cem-inheritance' },
            { label: "JSDoc Tags", slug: "documentation/jsdoc-tags" },
            { label: "Type Parser", slug: "documentation/type-parser" },
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
      customCss: ["./src/styles/custom-styles.css"],
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
});
