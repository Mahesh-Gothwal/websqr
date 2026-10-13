import {useEffect, useState} from 'react';
import brands from './data/brands.json';
import {u} from './url.js';
import {Card, bySlug, ArrowIcon} from './Card.jsx';
import {services, engagements, perf, principles, tools, industries, platforms, contact, nextSteps, downloads, faqs} from './content.js';
import {PageHero, StatsBand, Downloads, RoasChart, WhyUs, Process, CtaBand, DownloadIcon, homeStats} from './Sections.jsx';
import {ContactForm} from './Layout.jsx';

/* ───────── Services ───────── */
export function ServicesPage({onPick}) {
  return <>
    <PageHero lines={['Six services.', 'One team.']} lede="Build the store, fill it with buyers, keep them coming back.">
      <ul className="hero-chips">{services.map(s => <li key={s.name}><a href={'#' + slug(s.name)}>{s.name}</a></li>)}</ul>
    </PageHero>
    <section className="svc-detail">
      {services.map((s, i) => <article className="svc-row" id={slug(s.name)} key={s.name}>
        <div className="svc-row-num" aria-hidden="true"><span className="svc-mark"/></div>
        <div className="svc-row-main">
          <h2>{s.name}</h2>
          <p className="svc-row-short">{s.short}</p>
          <p>{s.body}</p>
        </div>
        <ul className="svc-row-list">{s.items.map(x => <li key={x}>{x}</li>)}</ul>
        <a className="btn btn-ink" href={u('/contact/')} onClick={() => onPick(s.name)}>Ask about this</a>
      </article>)}
    </section>
    <section className="engage" aria-labelledby="engage-title">
      <h2 id="engage-title">Ways to work with us</h2>
      <ul className="engage-grid">{engagements.map(e => <li key={e.t}><h3>{e.t}</h3><ul>{e.p.map(x => <li key={x}>{x}</li>)}</ul></li>)}</ul>
    </section>
    <Process/>
    <section className="tools" aria-labelledby="tools-title">
      <h2 id="tools-title">Tools we use daily</h2>
      <ul className="tags">{tools.map(t => <li key={t}>{t}</li>)}</ul>
    </section>
    <CtaBand/>
  </>;
}
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');

/* ───────── Performance ───────── */
export function PerformancePage() {
  const f = perf.shuddhi.funnel, top = f[0].n;
  return <>
    <PageHero lines={['Ads that', 'pay back.']} lede="Meta Ads case studies across 20+ brands. Numbers straight from Ads Manager.">
      <a className="btn btn-lime" href={u(downloads[1].file)} download><DownloadIcon size={18}/> Download the deck</a>
    </PageHero>
    <StatsBand items={perf.glance} tone="lime"/>
    <section className="perf-chart" aria-labelledby="pc-title">
      <h2 id="pc-title" className="visually-hidden">ROAS by brand</h2>
      <RoasChart/>
    </section>
    <section className="case-grid-wrap" aria-labelledby="cases-title">
      <h2 id="cases-title">Case studies</h2>
      <ul className="case-grid">
        {perf.cases.map(c => <li key={c.name} className="case">
          <span className="case-cat">{c.cat}</span>
          <h3>{c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer">{c.name} <ArrowIcon size={14}/></a> : c.name}</h3>
          <div className="case-nums"><div><strong>{c.roas.toFixed(2)}X</strong><span>ROAS</span></div><div><strong>{c.spend}</strong><span>Ad spend</span></div></div>
        </li>)}
      </ul>
    </section>
    <section className="funnel-wrap" aria-labelledby="funnel-title">
      <div className="funnel-head">
        <h2 id="funnel-title">Shuddhi Clothing, start to sale</h2>
        <p>{perf.shuddhi.period} · Meta Ads · 3.74X ROAS</p>
        <ul className="mini-stats">{perf.shuddhi.stats.map(s => <li key={s.l}><strong>{s.v}</strong><span>{s.l}</span></li>)}</ul>
      </div>
      <ol className="funnel">
        {f.map(s => <li key={s.l} style={{'--w': Math.max(s.n / top * 100, 6).toFixed(1) + '%'}}>
          <span className="funnel-bar"/><span className="funnel-l">{s.l}</span><span className="funnel-n">{s.n.toLocaleString('en-IN')}</span>
        </li>)}
      </ol>
    </section>
    <section className="extra-cases" aria-label="More results">
      {perf.extra.map(e => <div key={e.name} className="extra"><h3>{e.name}</h3><ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul></div>)}
    </section>
    <section className="perf-how" aria-labelledby="how-title">
      <h2 id="how-title">How we run your ads</h2>
      <ol className="how-grid">{perf.how.map((h, i) => <li key={h.t}><span className="step-sq">{i + 1}</span><h3>{h.t}</h3><ul>{h.p.map(x => <li key={x}>{x}</li>)}</ul></li>)}</ol>
    </section>
    <section className="perf-lists">
      <div><h2>Brands on our ad accounts</h2><ul className="tags">{perf.brands.map(b => <li key={b}>{b}</li>)}<li className="tag-lime">+10 more</li></ul></div>
      <div><h2>Channels we run</h2><ul className="tags">{perf.channels.map(b => <li key={b}>{b}</li>)}</ul></div>
    </section>
    <CtaBand title="Let’s scale your brand." text="Share your current ROAS and monthly budget. We’ll show you where the growth is."/>
  </>;
}

/* ───────── About ───────── */
export function AboutPage() {
  const faces = ['doms', 'the-misfits', 'niluk', 'tangelos', 'spunkies', 'house-of-chikankari', 'balance-breens', 'navyas-fashion', 'akera-health'].map(s => bySlug[s]).filter(Boolean);
  return <>
    <PageHero lines={['One stop for', 'everything', 'a brand needs.']} lede="A full-service digital team. Strategy, quality, results."/>
    <StatsBand items={homeStats}/>
    <section className="about-story">
      <h2>What we do</h2>
      <ul className="story-points">
        <li><b>Build</b><span>Websites and online stores on Shopify, WordPress, Wix and custom code.</span></li>
        <li><b>Grow</b><span>Meta and Google ads, SEO and social media.</span></li>
        <li><b>Design</b><span>UI/UX, brand graphics, 3D renders and campaign creative.</span></li>
        <li><b>Extend</b><span>Shopify apps and our own digital products.</span></li>
      </ul>
    </section>
    <WhyUs/>
    <section className="principles" aria-labelledby="pr-title">
      <h2 id="pr-title">How we work</h2>
      <ul>{principles.map(p => <li key={p.t}><h3>{p.t}</h3><p>{p.p}</p></li>)}</ul>
    </section>
    <section className="about-wall" aria-label="A few brands we’ve built">
      <div className="about-wall-grid">{faces.map(b => <Card key={b.slug} brand={b}/>)}</div>
      <a className="btn btn-ink" href={u('/portfolio/')}>All {brands.length} brands</a>
    </section>
    <section className="fit fit-about">
      <div className="fit-col"><h3>Online stores</h3><ul className="tags">{industries.ecommerce.map(t => <li key={t}>{t}</li>)}</ul></div>
      <div className="fit-col"><h3>Lead generation</h3><ul className="tags">{industries.leads.map(t => <li key={t}>{t}</li>)}</ul></div>
    </section>
    <Downloads compact/>
  </>;
}

/* ───────── Contact ───────── */
export function ContactPage({brief}) {
  return <>
    <PageHero lines={['Let’s talk', 'about your brand.']} lede="Fill the form, or reach us directly." tone="lime"/>
    <section className="contact-page">
      <aside className="contact-aside">
        <h2>Reach us</h2>
        <ul className="reach">
          <li><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li><span>WhatsApp</span><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">{contact.phone}</a></li>
          <li><span>Instagram</span><a href={contact.instagram} target="_blank" rel="noopener noreferrer">@websqr</a></li>
          <li><span>Facebook</span><a href={contact.facebook} target="_blank" rel="noopener noreferrer">WebSqr</a></li>
        </ul>
        <h2>What happens next</h2>
        <ol className="next-list">{nextSteps.map((s, i) => <li key={s.t}><span className="step-sq">{i + 1}</span><div><b>{s.t}</b><p>{s.p}</p></div></li>)}</ol>
      </aside>
      <ContactForm brief={brief} light/>
    </section>
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">Before you ask</h2>
      <div className="faq-list">{faqs.map(f => <details key={f.q}><summary>{f.q}<span aria-hidden="true"/></summary><p>{f.a}</p></details>)}</div>
    </section>
  </>;
}

/* ───────── Thank you ───────── */
export function ThankYouPage() {
  const [name, setName] = useState('');
  useEffect(() => { try { setName(sessionStorage.getItem('ws-name') || ''); } catch {} }, []);
  return <>
    <section className="thanks" id="top">
      <svg className="thanks-mark" viewBox="0 0 512 512" aria-hidden="true"><path d="M0 170C0 76 76 0 170 0h342v170H170v342H0z" fill="currentColor"/><path d="M272 272h240v170c0 39-31 70-70 70H272z" fill="#B8FF3D"/></svg>
      <h1><span className="line"><span>Thank you{name ? `, ${name.split(' ')[0]}` : ''}.</span></span><span className="line"><span>We’ve got your brief.</span></span></h1>
      <ol className="next-list next-row">{nextSteps.map((s, i) => <li key={s.t}><span className="step-sq">{i + 1}</span><div><b>{s.t}</b><p>{s.p}</p></div></li>)}</ol>
      <div className="row-actions">
        <a className="btn btn-lime" href={`${contact.whatsapp}?text=${encodeURIComponent('Hi WebSqr, I just sent an enquiry from your website.')}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        <a className="btn btn-line" href={u('/portfolio/')}>Browse our work</a>
        <a className="btn btn-line" href={u('/')}>Back to home</a>
      </div>
    </section>
    <Downloads/>
  </>;
}
