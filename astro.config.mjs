// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // Khai báo chính xác tên miền GitHub Pages của cậu
    site: 'https://dynamicduooq.github.io',
    
    // Khai báo thư mục gốc chứa web để không bị lỗi link ảnh/CSS
    base: '/dynamic-duo-web',
    
    integrations: [mdx(), sitemap()]
});