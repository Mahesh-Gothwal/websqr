import {build} from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const REL = process.env.PREVIEW === '1';
const OUT = REL ? 'preview' : 'dist';


const brands = JSON.parse(await fs.readFile('src/data/brands.json', 'utf8'));
// 2. Server bundle for pre-rendering
await fs.mkdir('.build', {recursive: true});
await build({entryPoints: ['src/server.jsx'], outfile: '.build/server.cjs', bundle: true, platform: 'node', format: 'cjs', external: ['react', 'react-dom/server'], jsx: 'automatic', define: {'process.env.NODE_ENV': '"production"'}, logLevel: 'error'});
const {render} = await import(pathToFileURL(path.resolve('.build/server.cjs')).href + '?t=' + Date.now());

// 3. Client bundle + static files
await fs.rm(OUT, {recursive: true, force: true});
await fs.cp('public', OUT, {recursive: true});
await build({entryPoints: ['src/client.jsx'], outfile: OUT + '/app.js', bundle: true, minify: true, format: 'esm', target: ['es2020'], jsx: 'automatic', define: {'process.env.NODE_ENV': '"production"'}, logLevel: 'error'});
await build({entryPoints: ['src/style.css'], outfile: OUT + '/style.css', bundle: true, minify: true, external: ['fonts/*', '/fonts/*'], logLevel: 'error'});

const N = brands.length;
const pages = {
  home: {path: '/', title: 'WebSqr — Websites, ecommerce & growth for good brands', desc: `WebSqr designs, builds and grows websites and online stores. 200+ websites built, ${N} live brands in our portfolio.`},
  portfolio: {path: '/portfolio/', title: `Work — ${N} brands built by WebSqr`, desc: 'Browse the websites and stores WebSqr has designed and built, filtered by industry.'},
  services: {path: '/services/', title: 'Services — WebSqr', desc: 'Websites & ecommerce, performance marketing, social media, UI/UX, SEO and Shopify apps.'},
  performance: {path: '/performance/', title: 'Performance marketing — WebSqr', desc: 'Meta Ads case studies: 3.6–4.9X ROAS across featured brands, ₹1.5Cr+ monthly budget handled.'},
  about: {path: '/about/', title: 'About — WebSqr', desc: 'A full-service digital team: websites, ads, social, design and Shopify apps.'},
  contact: {path: '/contact/', title: 'Contact — WebSqr', desc: 'Start a project with WebSqr. Email, WhatsApp or the enquiry form.'},
  'thank-you': {path: '/thank-you/', title: 'Thank you — WebSqr', desc: 'Thanks for your enquiry.', noindex: true},
};
const ga4 = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-5TW7E7DNBN"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-5TW7E7DNBN');</script>`;
for (const m of Object.values(pages)) { const depth = m.path.split('/').filter(Boolean).length; m.base = '../'.repeat(depth); m.file = OUT + (m.path === '/' ? '/index.html' : m.path + 'index.html'); }
for (const [page, meta] of Object.entries(pages)) {
  await fs.mkdir(path.dirname(meta.file), {recursive: true});
  const A = REL ? meta.base : '/';
  const html = `<!doctype html><html lang="en"><head><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N7BZVMBG');</script><!-- End Google Tag Manager --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#5A5CFF"><title>${meta.title}</title><meta name="description" content="${meta.desc}">${meta.noindex ? '<meta name="robots" content="noindex">' : ''}<meta property="og:title" content="${meta.title}"><meta property="og:description" content="${meta.desc}"><meta property="og:image" content="${A}brand/main.png"><link rel="icon" href="${A}favicon.png"><link rel="preload" href="${A}fonts/hn-black.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="${A}fonts/hn-roman.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="${A}style.css"><script type="module" src="${A}app.js"></script></head><body data-page="${page}" data-base="${meta.base}" data-rel="${REL ? 1 : 0}"><!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7BZVMBG" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) --><div id="root">${render(page, meta.base, REL)}</div></body></html>`;
  await fs.writeFile(meta.file, html.replace('</head>', `${ga4}</head>`));
  if (REL && page === 'home') {
    // artifact-preview variant: page content only (the host adds the document skeleton)
    const body = `<title>WebSqr Website</title><link rel="stylesheet" href="style.css"><div id="root" data-page="home" data-base="" data-rel="1">${render(page, '', true)}</div><script type="module" src="app.js"></script>`;
    await fs.writeFile(OUT + '/websqr-home.html', body);
  }
}
console.log(`Built ${Object.keys(pages).length} pages (${N} brands).`);
