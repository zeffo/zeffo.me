import adapter from "@sveltejs/adapter-cloudflare";
import rehypeSlug from "rehype-slug";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md", ".svelte.md"],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".svelte.md", ".md", ".svx"],
      rehypePlugins: [rehypeSlug],
      layout: {
        blog: "./src/routes/blog/blog_layout.svelte",
        adopt: "./src/routes/adopt/adopt_layout.svelte",
        cats: "./src/routes/cats/cat_layout.svelte"
      }
    }),
  ],
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
};

export default config;
