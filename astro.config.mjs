import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://avelose159.github.io',
	integrations: [
		mdx(),
		sitemap()
	],
	// Keystatic을 위한 output: 'static' 혹은 삭제
	output: 'static',
});