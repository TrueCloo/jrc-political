import fs from "node:fs";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Rewrites /links so the site also works at username.github.io/repo-name/
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Escape all content by default; rich-text fields opt out with | safe
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  // Custom domain file for GitHub Pages (only if it exists)
  if (fs.existsSync("src/CNAME")) eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Each section's anchor id: from its menu label, or its type + position
  const slug = (t) => String(t).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const sectionId = (s, i) => (s.nav_label ? slug(s.nav_label) : `${s.type}-${i}`);
  eleventyConfig.addFilter("sectionId", sectionId);
  eleventyConfig.addFilter("firstSectionId", (sections = [], type) => {
    const i = sections.findIndex((s) => s.type === type);
    return i === -1 ? "" : sectionId(sections[i], i + 1);
  });

  return {
    dir: { input: "src", output: "_site" },
  };
}
