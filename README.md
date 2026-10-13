# WebSqr website (v2)

React 19 + GSAP 3.13 (ScrollTrigger, Flip) + Lenis smooth scroll. Pages are pre-rendered to static HTML and hydrated in the browser, so the `dist/` folder can be uploaded to any static host.

## Run it

```bash
npm install
npm run build      # writes dist/
npx vite dist      # or any static server pointed at dist/
```

Pages: `/` home, `/portfolio/` work, `/services/`, `/performance/`, `/about/`, `/contact/`, `/thank-you/`.

## Enquiry form → Google Sheet + email → thank-you page

Every enquiry is saved as a new row in a Google Sheet and emailed to info.websqr@gmail.com, then the visitor lands on `/thank-you/`.

1. Create a Google Sheet → Extensions → Apps Script → paste `google-apps-script.js` → Save.
2. Deploy → New deployment → Web app → Execute as **Me**, access **Anyone** → Deploy → Authorize.
3. Paste the Web app URL (ends in `/exec`) into `sheetEndpoint` in `src/content.js`, run `npm run build`, upload `dist/`.

Sheet columns (created automatically): Date & time · Name · Email · Phone / WhatsApp · Brand · Service · Project details · Page · Came from · Status.

Until `sheetEndpoint` is set, the form uses FormSubmit as a backup (email only; confirm once via the activation email). If both fail, it opens the visitor's email app with copy and WhatsApp buttons.

## Downloads

`public/downloads/` holds the two PDFs linked from the homepage, performance page, about page, thank-you page and footer:
- `WebSqr-Brand-Portfolio.pdf`
- `WebSqr-Performance-Marketing-Portfolio.pdf`

Replace a file with the same name to update it.

## Where to edit

| File | What it controls |
| --- | --- |
| `src/content.js` | Services, process steps, industries, platforms, FAQ, contact details, homepage featured brands |
| `src/data/brands.json` | All portfolio brands (name, category, filter group, URL, logo) |
| `src/Home.jsx` | Homepage sections |
| `src/Pages.jsx` | Services, Performance, About, Contact, Thank-you pages |
| `src/Sections.jsx` | Shared blocks: stats band, ROAS chart, downloads, why-us, process, CTA |
| `src/Portfolio.jsx` | Portfolio page, filters, search |
| `src/Card.jsx` | Square flip tile for each brand |
| `src/Layout.jsx` | Header, contact form, footer, WhatsApp button |
| `src/motion.js` | All GSAP animation |
| `src/style.css` | Brand tokens, layout, responsive rules |
| `public/brand/` | WebSqr logo files |
| `public/fonts/` | Helvetica Neue (web-subset WOFF2) |

## Motion

- Intro: the WebSqr mark builds itself (blue L, then lime square), headline rises, portfolio stack deals in.
- Scroll: hero pins and the lime square zooms to fill the screen, leading into the work section.
- Work: pinned horizontal gallery on desktop; two-column grid on mobile.
- ROAS bars, funnel bars, cards and stats animate in once as they scroll into view.
- Process line and step squares fill as you scroll; platform marquee speeds up with scroll velocity.
- Portfolio filters animate with GSAP Flip.
- Visitors with "reduce motion" switched on get a static, fully usable page.

## Notes

- 71 brands, matching the Brand Portfolio PDF (Dohr, Tangerine Jewelry and Carpet Planet added; logos re-cut from the PDF).
- Enquiries go to the Google Sheet + inbox, then to /thank-you/ (see above).
- Helvetica Neue is a commercial typeface — make sure your licence covers web use.
