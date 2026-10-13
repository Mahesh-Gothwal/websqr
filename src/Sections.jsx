import brands from './data/brands.json';
import {u} from './url.js';
import {ArrowIcon} from './Card.jsx';
import {downloads, perf, whyUs, services, steps} from './content.js';

export function DownloadIcon({size = 20}) {
  return <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3v10m0 0-4-4m4 4 4-4M4 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/></svg>;
}

// Inner-page hero: blue band with the mark's rounded corner
export function PageHero({title, lines, lede, children, tone = 'blue'}) {
  return <section className={`page-hero tone-${tone}`} id="top">
    <h1>{(lines || [title]).map((l, i) => <span className="line" key={i}><span>{l}</span></span>)}</h1>
    <div className="page-hero-side">
      {lede && <p>{lede}</p>}
      {children}
    </div>
  </section>;
}

export function StatsBand({items, tone = 'ink'}) {
  return <section className={`stats-band tone-${tone}`} aria-label="Key numbers">
    {items.map(s => <div key={s.label}><strong data-countup>{s.value}</strong><span>{s.label}</span></div>)}
  </section>;
}

export const homeStats = [
  {value: '200+', label: 'websites built'},
  {value: String(brands.length), label: 'live brands in our portfolio'},
  {value: '₹1.5Cr+', label: 'monthly Meta ad budget handled'},
  {value: '3.6–4.9X', label: 'ROAS on featured cases'},
];

export function Downloads({id = 'downloads', compact = false}) {
  return <section className={'downloads' + (compact ? ' is-compact' : '')} id={id} aria-labelledby={id + '-title'}>
    <div className="downloads-head">
      <h2 id={id + '-title'}>Take the portfolios with you</h2>
      <p>Two PDFs to share with your team.</p>
    </div>
    <div className="dl-grid">
      {downloads.map(d => <a key={d.key} className={`dl-card dl-${d.key}`} href={u(d.file)} download>
        <span className="dl-kind">{d.meta}</span>
        <h3>{d.title}</h3>
        <ul>{d.points.map(p => <li key={p}>{p}</li>)}</ul>
        <span className="dl-btn"><DownloadIcon/> Download PDF</span>
      </a>)}
    </div>
  </section>;
}

export function RoasChart() {
  const max = 5;
  return <figure className="roas" aria-labelledby="roas-cap">
    <figcaption id="roas-cap"><b>Return on ad spend by brand</b><span>Meta Ads. Ad spend in brackets.</span></figcaption>
    <ol className="roas-list">
      {perf.cases.map(c => <li key={c.name} className="roas-row" tabIndex={0} aria-label={`${c.name}: ${c.roas}X ROAS on ${c.spend} spend`}>
        <span className="roas-name">{c.name}<small>{c.spend}</small></span>
        <span className="roas-track"><span className="roas-bar" style={{'--w': (c.roas / max * 100).toFixed(1) + '%'}}/></span>
        <span className="roas-val">{c.roas.toFixed(2)}X</span>
        <span className="roas-tip" role="tooltip">{c.cat} · {c.spend} spend</span>
      </li>)}
    </ol>
    <div className="roas-axis" aria-hidden="true">{[0, 1, 2, 3, 4, 5].map(t => <span key={t} style={{'--x': t / max * 100 + '%'}}>{t}X</span>)}</div>
    <p className="roas-src">Source: Meta Ads Manager</p>
  </figure>;
}

export function PerfTeaser() {
  return <section className="perf-teaser" aria-labelledby="perf-title">
    <div className="perf-teaser-head">
      <h2 id="perf-title">Ad spend that comes back.</h2>
      <ul className="glance">{perf.glance.map(g => <li key={g.label}><strong>{g.value}</strong><span>{g.label}</span></li>)}</ul>
      <div className="row-actions">
        <a className="btn btn-lime" href={u('/performance/')}>See case studies</a>
        <a className="btn btn-line" href={u(downloads[1].file)} download><DownloadIcon size={18}/> Deck (PDF)</a>
      </div>
    </div>
    <RoasChart/>
  </section>;
}

export function WhyUs() {
  return <section className="why" aria-labelledby="why-title">
    <h2 id="why-title">Why brands pick WebSqr</h2>
    <ul className="why-grid">
      {whyUs.map(w => <li key={w.t}><span className="why-sq" aria-hidden="true"/><h3>{w.t}</h3><p>{w.p}</p></li>)}
    </ul>
  </section>;
}

export function ServiceGrid({onPick}) {
  return <section className="svc-grid-wrap" id="services" aria-labelledby="svc-title">
    <div className="svc-head">
      <h2 id="svc-title">Everything online, one team.</h2>
      <a className="btn btn-ink" href={u('/services/')}>All services</a>
    </div>
    <ul className="svc-grid">
      {services.map(s => <li key={s.name} className="svc-card">
        <h3>{s.name}</h3>
        <p className="svc-short">{s.short}</p>
        <ul>{s.items.slice(0, 4).map(x => <li key={x}>{x}</li>)}</ul>
        <a className="svc-link" href={u('/contact/')} onClick={() => onPick?.(s.name)} aria-label={`Ask about ${s.name}`}><ArrowIcon size={20}/></a>
      </li>)}
    </ul>
  </section>;
}

export function Process() {
  return <section className="process" id="process" aria-labelledby="process-title">
    <div className="process-head">
      <h2 id="process-title">From first call to launch day</h2>
      <p>Four stages. One team.</p>
    </div>
    <ol className="steps">
      <div className="steps-line" aria-hidden="true"><span/></div>
      {steps.map((s, i) => <li className="step" key={s.title}>
        <span className="step-sq" aria-hidden="true">{i + 1}</span>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        <small>{s.tags}</small>
      </li>)}
    </ol>
  </section>;
}

export function CtaBand({title = 'Ready when you are.', text = 'Tell us about your brand. We’ll take it from there.'}) {
  return <section className="cta-band">
    <h2>{title}</h2>
    <p>{text}</p>
    <div className="row-actions">
      <a className="btn btn-ink" href={u('/contact/')} data-magnetic>Start a project</a>
      <a className="btn btn-line-ink" href={u('/portfolio/')}>See the work</a>
    </div>
  </section>;
}
