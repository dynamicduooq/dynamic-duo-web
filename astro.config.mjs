// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // Khai báo chính xác tên miền GitHub Pages của cậu
site: 'https://dynamicduooq.github.io/dynamic-duo-web',
base: '/dynamic-duo-web',
    integrations: [mdx(), sitemap()]
});
output: 'static', // thêm dòng này để explicit