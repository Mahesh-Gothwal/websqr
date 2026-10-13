import {useState} from 'react';
import brands from './data/brands.json';
import {Card, bySlug, ArrowIcon} from './Card.jsx';
import {u} from './url.js';
import {featuredSlugs, industries, platforms, faqs} from './content.js';
import {StatsBand, homeStats, ServiceGrid, PerfTeaser, WhyUs, Process, Downloads} from './Sections.jsx';

const featured = featuredSlugs.map(s => bySlug[s]).filter(Boolean);

function Hero() {
  const stack = featured.slice(0, 5);
  return <section className="hero" id="top" aria-label="Introduction">
    <div className="hero-band">
      <h1 className="hero-title">
        <span className="line"><span>Good brands.</span></span>
        <span className="line"><span>Great websites.</span></span>
        <span className="line"><span>Real growth.</span></span>
      </h1>
      <p className="hero-partners">Official partner of <b>Shopify</b>, <b>GoKwik</b> and <b>FlexiPay</b></p>
    </div>
    <div className="hero-col">
      <ul className="hero-points"><li>Shopify & custom websites</li><li>Meta & Google ads</li><li>Social, SEO & design</li></ul>
      <div className="hero-actions">
        <a className="btn btn-lime" href={u('/contact/')} data-magnetic>Start a project</a>
        <a className="btn btn-line" href={u('/portfolio/')}>See all work</a>
      </div>
      <dl className="hero-stats">
        <div><dt>Websites built</dt><dd><span data-count="200">200</span>+</dd></div>
        <div><dt>Years in business</dt><dd><span data-count="4">4</span>+</dd></div>
      </dl>
    </div>
    <div className="hero-square">
      <div className="hero-stack" aria-hidden="true">
        {stack.map((b, i) => <div className="stack-item" key={b.slug} style={{'--i': i}}><Card brand={b} size="stack" eager={i < 2}/></div>)}
      </div>
      <p className="hero-square-note">Recent launches</p>
      <span className="hero-scroll" aria-hidden="true">Scroll</span>
    </div>
  </section>;
}

function Work() {
  return <section className="work" id="work" aria-labelledby="work-title">
    <div className="work-pin">
      <div className="work-track">
      <div className="work-head">
        <h2 id="work-title">Stores we’ve<br/>put online</h2>
        <p>Hover a tile to see what we built.</p>
        <a className="btn btn-ink" href={u('/portfolio/')}>All {brands.length} projects</a>
      </div>
        {featured.map((b, i) => <Card key={b.slug} brand={b} size="feature" eager={i < 2}/>)}
        <a className="work-more" href={u('/portfolio/')}><span>{brands.length - featured.length} more brands</span><ArrowIcon size={40}/></a>
      </div>
    </div>
  </section>;
}

function Clients() {
  return <section className="clients" aria-labelledby="clients-title">
    <div className="clients-head">
      <h2 id="clients-title">{brands.length} brands, from Jaipur to London.</h2>
      <p>Every logo is a live site we built.</p>
    </div>
    <ul className="logo-wall">
      {brands.map(b => <li key={b.slug}>
        {b.url ? <a href={b.url} target="_blank" rel="noopener noreferrer" title={`${b.name} — ${b.category}`}><img src={u(b.logo)} alt={b.name} loading="lazy" decoding="async" style={{'--ratio': b.logoRatio}}/></a>
          : <span title={b.name}><img src={u(b.logo)} alt={b.name} loading="lazy" style={{'--ratio': b.logoRatio}}/></span>}
      </li>)}
    </ul>
  </section>;
}

function Fit() {
  return <section className="fit" aria-labelledby="fit-title">
    <h2 id="fit-title" className="visually-hidden">Industries and platforms</h2>
    <div className="fit-col">
      <h3>Online stores</h3>
      <ul className="tags">{industries.ecommerce.map(t => <li key={t}>{t}</li>)}</ul>
    </div>
    <div className="fit-col">
      <h3>Lead generation</h3>
      <ul className="tags">{industries.leads.map(t => <li key={t}>{t}</li>)}</ul>
    </div>
    <div className="platforms" aria-label="Platforms we build on">
      <div className="platforms-track">{[...platforms, ...platforms].map((p, i) => <span key={i} aria-hidden={i >= platforms.length}>{p}</span>)}</div>
    </div>
  </section>;
}

function FAQ() {
  return <section className="faq" id="faq" aria-labelledby="faq-title">
    <h2 id="faq-title">Questions we hear a lot</h2>
    <div className="faq-list">{faqs.map(f => <details key={f.q}><summary>{f.q}<span aria-hidden="true"/></summary><p>{f.a}</p></details>)}</div>
  </section>;
}

export default function Home({onPick}) {
  return <>
    <Hero/>
    <Work/>
    <StatsBand items={homeStats}/>
    <ServiceGrid onPick={onPick}/>
    <PerfTeaser/>
    <Clients/>
    <WhyUs/>
    <Process/>
    <Downloads/>
    <Fit/>
    <FAQ/>
  </>;
}
