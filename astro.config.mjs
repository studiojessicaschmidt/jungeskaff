// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Ziel-Domain. Sorgt für korrekte absolute URLs in Canonical-Tags,
  // Sitemap und Open-Graph-Metadaten. Assets bleiben wurzel-relativ
  // (/_astro/...), passend zur Domain-Wurzel von jungeskaff.de.
  site: "https://jungeskaff.de",
});
