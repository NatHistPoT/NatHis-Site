import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nat Hist",
  description: "Nat Hist Path of Titans",
  base: "/NatHis-Site/",
  head: [
    ['style', {}, `
      .VPFeature .VPImage, .VPFeature .VPImage img {
        border-radius: 12px !important;
        overflow: hidden;
      }
    `]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: generateSidebar({
      documentRootPath: "docs",
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: "title",
      useFolderLinkFromIndexFile: true,
      hyphenToSpace: true,
      capitalizeEachWords: true,
      collapsed: true,
      excludePattern: ["team.md", "welcome.md", "tos.md", "privacy-policy.md"],
      excludeFilesByFrontmatterFieldName: "exclude",
    }),

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/nathist" },
    ],
  },
});
