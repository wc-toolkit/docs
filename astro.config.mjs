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
          label: "Adoption",
          items: [
            { label: "Overview", slug: "adoption/overview" },
            { label: "Lazy Loader", slug: "adoption/lazy-loader" },
          ],
        },
        {
          label: "CEM Utilities",
          items: [
            { label: "Overview", slug: "cem-utilities/overview" },
            { label: "CEM Validator", slug: "cem-utilities/cem-validator" },
            {
              label: "Helpers",
              items: [
                { label: "CEM Utilities", slug: "cem-utilities/cem-utils" },
                { label: "Deep Merge", slug: "cem-utilities/deep-merge" },
                { label: "Descriptions", slug: "cem-utilities/descriptions" },
                {
                  label: "String Utilities",
                  slug: "cem-utilities/string-utils",
                },
                { label: "Custom CEM Types", slug: "cem-utilities/types" },
              ],
            },
          ],
        },
        {
          label: "Documentation",
          items: [
            { label: "Overview", slug: "documentation/overview" },
            { label: "CEM Inheritance", slug: "documentation/cem-inheritance" },
            { label: "JSDoc Tags", slug: "documentation/jsdoc-tags" },
            {
              label: "Module Path Resolver",
              slug: "documentation/module-path-resolver",
            },
            { label: "Type Parser", slug: "documentation/type-parser" },
          ],
        },
        {
          label: "Integrations",
          items: [
            { label: "Overview", slug: "integrations/overview" },
            { label: "Storybook", slug: "integrations/storybook" },
          ],
        },
      ],
      customCss: ["./src/styles/custom-styles.css"],
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
});
