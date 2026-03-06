// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 실제 질문님의 GitHub Pages 주소로 수정했습니다.
	site: 'https://avelose159.github.io',
	integrations: [mdx(), sitemap()],
});
