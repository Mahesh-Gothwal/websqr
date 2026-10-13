export const contact = {
  email: 'info.websqr@gmail.com',
  phone: '+91 88248 39582',
  whatsapp: 'https://wa.me/918824839582',
  instagram: 'https://www.instagram.com/websqr/',
  facebook: 'https://www.facebook.com/profile.php?id=61593875295853',
};

export const featuredSlugs = ['doms', 'house-of-chikankari', 'the-misfits', 'tangelos', 'niluk', 'balance-breens', 'spunkies', 'navyas-fashion'];

export const services = [
  {name: 'Websites & ecommerce', short: 'Stores that sell.', body: 'Distinctive websites with clear journeys, considered product discovery and a short path to checkout or enquiry.', items: ['Shopify, Wix & Squarespace', 'WordPress & Hostinger Builder', 'Custom-coded websites', 'Store migrations & integrations', 'Speed & conversion fixes']},
  {name: 'Performance marketing', short: 'Ads that pay back.', body: 'Paid acquisition, retargeting and lead generation, with creative testing, conversion tracking and reporting built in.', items: ['Google Search, Shopping & YouTube', 'Meta: Facebook & Instagram', 'LinkedIn & Microsoft Ads', 'Pinterest, Snapchat & TikTok', 'Amazon Ads, X & Reddit', 'GA4 & conversion tracking']},
  {name: 'Social media', short: 'A feed worth following.', body: 'A consistent voice and a content plan that covers everyday posting and your next big launch.', items: ['Strategy & content calendars', 'Reels, posts & stories', 'Creative production', 'Community management']},
  {name: 'UI/UX & creative', short: 'Look right, work right.', body: 'Digital experiences and brand visuals that connect function with personality across screens and campaigns.', items: ['Figma wireframes & prototypes', 'User journeys & design systems', '3D visuals & product renders', 'Campaign & brand graphics']},
  {name: 'SEO & discovery', short: 'Get found on Google.', body: 'Technical foundations, relevant content and better on-page experiences that compound over time.', items: ['Technical audits & indexing', 'Keyword & content strategy', 'On-page & ecommerce SEO', 'Core Web Vitals & schema', 'Local SEO & Search Console']},
  {name: 'Shopify apps & products', short: 'Beyond the theme.', body: 'Shopify apps, custom store features and our own digital products for growing businesses.', items: ['Shopify plugins & apps', 'Custom store functionality', 'Workflow integrations', 'Ready-made digital products']},
];

export const steps = [
  {title: 'Discover', text: 'We learn your business and audience, and agree on what the project has to achieve.', tags: 'Goals, audience, scope'},
  {title: 'Design', text: 'Strategy becomes structure, wireframes and a visual direction built around your brand.', tags: 'Journeys, Figma, prototypes'},
  {title: 'Develop', text: 'We build, integrate and test across devices with speed and usability in mind.', tags: 'Code, commerce, QA'},
  {title: 'Launch & grow', text: 'We launch, hand over, then plan the improvements and campaigns that come next.', tags: 'Launch, measure, improve'},
];

export const industries = {
  ecommerce: ['Clothing', 'Jewellery', 'Food & protein', 'Eyewear', 'Homeware', 'Digital products', 'Footwear', 'Stationery', 'Gifting & hampers', 'Wellness'],
  leads: ['Real estate', 'Hotels', 'Restaurants', 'Salons', 'Cafés', 'Clinics', 'B2B brands', 'Professional services'],
};

export const platforms = ['Shopify', 'WordPress', 'Wix', 'Squarespace', 'Hostinger', 'Custom code'];

export const faqs = [
  {q: 'Can you redesign our existing website?', a: 'Yes. We can refresh the design, improve the shopping journey, rebuild custom features or move you to a better-suited platform. We start by understanding what already works.'},
  {q: 'Which platform should we choose?', a: 'It depends on your catalogue, content, integrations and budget. We work with Shopify, Wix, Squarespace, WordPress, Hostinger Builder and custom code, and we’ll recommend one with reasons.'},
  {q: 'Can you run marketing after launch?', a: 'Yes. Performance marketing, social media and SEO can be planned alongside the website, so the campaigns and the store work towards the same numbers.'},
  {q: 'How do we get a timeline and quote?', a: 'Send your goals, current website, the features you need and your target launch date. We’ll talk through scope, then propose an approach, timeline and cost.'},
];

// Form → Google Sheet + email. Paste your Apps Script web-app URL here (ends in /exec).
// See google-apps-script.js and README for setup.
export const sheetEndpoint = 'https://script.google.com/macros/s/AKfycbwzvEfNCJjHPBCZ_MsL_osfkZeVkgKk56i9oMAo8hjyRLrF0t8CRoeLS1vazHQvEyxN/exec';
// Backup used only while sheetEndpoint is empty: FormSubmit emails the inbox (confirm once by email).
export const formEndpoint = 'https://formsubmit.co/ajax/info.websqr@gmail.com';

export const downloads = [
  {key: 'brand', title: 'Brand portfolio', file: '/downloads/WebSqr-Brand-Portfolio.pdf', meta: 'PDF · 21 pages · 11 MB', points: ['71 live websites', 'Fashion to B2B', 'Links to every site']},
  {key: 'perf', title: 'Performance marketing portfolio', file: '/downloads/WebSqr-Performance-Marketing-Portfolio.pdf', meta: 'PDF · 12 slides · 0.6 MB', points: ['Meta Ads case studies', 'ROAS by brand', 'Funnel numbers']},
];

export const perf = {
  glance: [
    {value: '20+', label: 'brands on paid ads'},
    {value: '₹1.5Cr+', label: 'monthly Meta budget handled'},
    {value: '3.6–4.9X', label: 'ROAS on featured cases'},
  ],
  // ROAS by brand, ad spend in lakh. Source: Meta Ads Manager (from the performance deck).
  cases: [
    {name: 'Moms Colorful Magic', cat: 'Wall decor', spend: '₹3L', roas: 4.89},
    {name: 'Paancho', cat: 'Ethnic wear', spend: '₹5L', roas: 4.17, url: 'https://paancho.com/'},
    {name: 'The Copper Story', cat: 'Utensils', spend: '₹3L', roas: 3.81},
    {name: 'Shuddhi Clothing', cat: 'Fashion', spend: '≈₹9.2L', roas: 3.74, url: 'https://shuddhiclothing.com/'},
    {name: 'Label Saymo', cat: 'Fashion', spend: '₹6L', roas: 3.74, url: 'https://labelsaymo.com/'},
    {name: 'VJR', cat: 'Fashion', spend: '₹1.5L', roas: 3.65},
    {name: 'Bless Gifters', cat: 'Gifting', spend: '₹2.5L', roas: 3.61},
  ],
  shuddhi: {
    period: '1 Jan – 31 Aug 2026',
    stats: [{v: '≈₹9.2L', l: 'Ad spend'}, {v: '₹34.4L', l: 'Conversion value'}, {v: '2,514', l: 'Purchases'}, {v: '₹1,367', l: 'Average order'}],
    funnel: [{l: 'Landing page views', n: 88028}, {l: 'Adds to cart', n: 16283}, {l: 'Checkouts', n: 4801}, {l: 'Payment info', n: 2766}, {l: 'Purchases', n: 2514}],
  },
  extra: [
    {name: 'VJR', points: ['₹1.5L spend', '4,206 adds to cart', '942 checkouts', '381 purchases']},
    {name: 'Bless Gifters', points: ['₹2.5L spend', '1,130 checkouts', '279 purchases', '4.95X best ad ROAS']},
  ],
  brands: ['Paancho', 'Shuddhi Clothing', 'Label Saymo', 'The Copper Story', 'Athletica Physio', 'Moms Colorful Magic', 'Bless Gifters', 'Renu Bhagwat Design', 'Gifts by Komal', 'VJR'],
  channels: ['Meta: Facebook & Instagram', 'Google Search & Shopping', 'YouTube', 'LinkedIn', 'Microsoft Ads', 'Pinterest', 'Snapchat', 'Amazon Ads', 'X & Reddit'],
  how: [
    {t: 'Audit', p: ['Pixel & CAPI check', 'Account structure', 'Creative review']},
    {t: 'Build', p: ['Audiences & offers', 'Ad creatives & UGC', 'Landing page fixes']},
    {t: 'Scale', p: ['Weekly testing', 'Budget shifts to winners', 'Clear monthly report']},
  ],
};

export const whyUs = [
  {t: 'One team', p: 'Design, development, ads and social under one roof.'},
  {t: 'Official partners', p: 'Shopify, GoKwik and FlexiPay.'},
  {t: '200+ websites', p: 'Built over 4+ years across India, the UK and the US.'},
  {t: 'Ads that pay back', p: '3.6–4.9X ROAS on our featured Meta cases.'},
  {t: 'Custom when needed', p: 'Shopify apps and features beyond the theme.'},
  {t: 'Tracked properly', p: 'GA4, Meta pixel and conversion reporting set up.'},
];

export const engagements = [
  {t: 'New launch', p: ['Brand & audience discovery', 'Design + development', 'Launch checklist']},
  {t: 'Redesign or migration', p: ['Review what works', 'Rebuild or move platform', 'Custom features']},
  {t: 'Monthly growth', p: ['Ads + social + SEO', 'Ongoing site updates', 'Monthly reporting']},
];

export const principles = [
  {t: 'Talk like people', p: 'Clear updates, shared decisions, no jargon.'},
  {t: 'Sweat the small stuff', p: 'The mobile menu and the button copy matter.'},
  {t: 'Think past launch', p: 'Sites built for the team that runs them next.'},
];

export const tools = ['Shopify', 'WordPress', 'Wix', 'Squarespace', 'Hostinger', 'Figma', 'Adobe CC', 'CorelDRAW', 'GA4', 'Meta Ads Manager', 'Google Ads', 'Search Console'];

export const nextSteps = [
  {t: 'We read it', p: 'A real person goes through your brief.'},
  {t: 'We reply', p: 'By email or WhatsApp, usually with a few questions.'},
  {t: 'We plan', p: 'A short call, then scope, timeline and cost.'},
];
