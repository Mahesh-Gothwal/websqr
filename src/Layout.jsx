import {useEffect, useRef, useState} from 'react';
import {contact, services, downloads, formEndpoint, sheetEndpoint} from './content.js';
import {DownloadIcon} from './Sections.jsx';
import {ArrowIcon} from './Card.jsx';
import {u} from './url.js';
import brands from './data/brands.json';

export function Header({page}) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  const close = () => setOpen(false);
  const link = (key, path, label, extra) => <a href={u(path)} onClick={close} aria-current={page === key ? 'page' : undefined}>{label}{extra}</a>;
  return <header className={'site-header' + (open ? ' is-open' : '')}>
    <a className="logo" href={u('/')} aria-label="WebSqr home"><img src={u('/brand/main.png')} alt="WebSqr" width="1080" height="260"/></a>
    <nav id="site-nav" aria-label="Main">
      {link('portfolio', '/portfolio/', 'Work', <sup>{brands.length}</sup>)}
      {link('services', '/services/', 'Services')}
      {link('performance', '/performance/', 'Performance')}
      {link('about', '/about/', 'About')}
      <a className="nav-cta" href={u('/contact/')} onClick={close}>Start a project</a>
    </nav>
    <button ref={toggle} className="menu-btn" aria-controls="site-nav" aria-expanded={open} onClick={() => setOpen(!open)}>
      <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span><i/><i/>
    </button>
  </header>;
}

export function ContactForm({brief, light = false}) {
  const form = useRef(null);
  const [state, setState] = useState('idle'); // idle | sending | fallback
  const [ready, setReady] = useState('');
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let pre = brief;
    try { pre = pre || sessionStorage.getItem('ws-service'); } catch {}
    const el = pre && form.current?.querySelector(`input[name="service"][value="${CSS.escape(pre)}"]`);
    if (el) el.checked = true;
  }, [brief]);
  const submit = async e => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (d.get('_honey')) return;
    const data = Object.fromEntries(['name', 'email', 'phone', 'brand', 'service', 'message'].map(k => [k, d.get(k) || '']));
    const msg = `Hello WebSqr, I'd like to discuss a project.\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || '—'}\nBrand: ${data.brand || '—'}\nInterested in: ${data.service}\n\n${data.message}`;
    try { sessionStorage.setItem('ws-name', data.name); } catch {}
    const thanks = u('/thank-you/');
    if (sheetEndpoint) {
      setState('sending');
      try {
        // Apps Script doesn't send CORS headers, so post as a simple form request; the response is opaque
        await fetch(sheetEndpoint, {method: 'POST', mode: 'no-cors', body: new URLSearchParams({...data, page: location.pathname, source: document.referrer || 'direct'})});
        window.location.href = thanks; return;
      } catch {}
    } else if (formEndpoint) {
      setState('sending');
      try {
        const r = await fetch(formEndpoint, {method: 'POST', headers: {'Content-Type': 'application/json', Accept: 'application/json'},
          body: JSON.stringify({...data, _subject: `Website enquiry: ${data.brand || data.name}`, _template: 'table', _captcha: 'false'})});
        const j = await r.json().catch(() => ({}));
        if (r.ok && String(j.success) !== 'false') { window.location.href = thanks; return; }
      } catch {}
    }
    // Fallback: hand the enquiry to the visitor's email app or WhatsApp
    setReady(msg); setCopied(false); setState('fallback');
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Project enquiry: ' + (data.brand || data.name))}&body=${encodeURIComponent(msg)}`;
  };
  return <form ref={form} className={'contact-form' + (light ? ' is-light' : '')} onSubmit={submit}>
    <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="visually-hidden" aria-hidden="true"/>
    <div className="row">
      <label>Name<input name="name" autoComplete="name" required maxLength="100"/></label>
      <label>Email<input name="email" type="email" autoComplete="email" required maxLength="200"/></label>
    </div>
    <div className="row">
      <label>Brand<input name="brand" autoComplete="organization" maxLength="150"/></label>
      <label>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" maxLength="30" placeholder="+91"/></label>
    </div>
    <fieldset className="svc-pick"><legend>What do you need?</legend>
      {[...services.map(s => s.name), 'Everything'].map((n, i) => <label key={n} className="pick"><input type="radio" name="service" value={n} required defaultChecked={i === 0}/><span>{n}</span></label>)}
    </fieldset>
    <label>About the project<textarea name="message" rows="4" required maxLength="3000" placeholder="Goals, current website, launch date…"/></label>
    <button className="btn btn-lime" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
    {state === 'fallback' && <div className="form-ready" aria-live="polite">
      <p>We couldn’t send it from here. Your email app should open — or copy it, or send it on WhatsApp.</p>
      <div><button type="button" className="btn btn-ghost" onClick={async () => { try { await navigator.clipboard.writeText(ready); setCopied(true); } catch { setCopied(false); } }}>{copied ? 'Copied' : 'Copy enquiry'}</button>
      <a className="btn btn-ghost" href={`${contact.whatsapp}?text=${encodeURIComponent(ready)}`} target="_blank" rel="noopener noreferrer">Send on WhatsApp</a></div>
    </div>}
  </form>;
}

export function Contact({brief}) {
  return <section id="contact" className="contact">
    <div className="contact-intro">
      <h2 className="contact-title"><span>Got a brand</span><span>worth building?</span></h2>
      <ul className="contact-points"><li>Free first call</li><li>Clear scope and cost</li><li>One team from design to ads</li></ul>
      <ul className="contact-lines">
        <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
        <li><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {contact.phone}</a></li>
      </ul>
    </div>
    <ContactForm brief={brief}/>
  </section>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-cols">
      <div className="footer-col footer-about">
        <p>Websites, ecommerce and growth for good brands.</p>
        <div className="footer-dl">{downloads.map(d => <a key={d.key} href={u(d.file)} download><DownloadIcon size={16}/> {d.title}</a>)}</div>
      </div>
      <div className="footer-col"><h3>Pages</h3><ul>
        <li><a href={u('/portfolio/')}>Work</a></li><li><a href={u('/services/')}>Services</a></li><li><a href={u('/performance/')}>Performance</a></li><li><a href={u('/about/')}>About</a></li><li><a href={u('/contact/')}>Contact</a></li>
      </ul></div>
      <div className="footer-col"><h3>Services</h3><ul>{services.map(s => <li key={s.name}><a href={u('/services/') + '#' + s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}>{s.name}</a></li>)}</ul></div>
      <div className="footer-col"><h3>Say hello</h3><ul>
        <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
        <li><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">{contact.phone}</a></li>
        <li><a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
      </ul></div>
    </div>
    <div className="footer-mark" aria-hidden="true"><img src={u('/brand/inverted.png')} alt="" width="1080" height="260" loading="lazy"/></div>
    <div className="footer-row">
      <span>© {new Date().getFullYear()} WebSqr. Strategy, quality, results.</span>
      <span>Official partner of Shopify, GoKwik and FlexiPay</span>
      <a href="#top">Back to top</a>
    </div>
  </footer>;
}

export function WhatsAppButton() {
  return <a className="wa-btn" href={`${contact.whatsapp}?text=${encodeURIComponent("Hi WebSqr, I'd like to discuss a project.")}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with WebSqr on WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z" stroke="currentColor" strokeWidth="1.8"/><path d="M8.2 7.4c-.8.3-1 1.7-.3 3.1.9 1.9 2.7 3.6 4.8 4.3 1.5.5 2.5-.1 2.7-.8l.1-.8-2.5-1.1-.8 1c-1.4-.6-2.5-1.7-3.1-3l.9-.8-1-2.1-.8.2Z" fill="currentColor"/></svg>
  </a>;
}
export {ArrowIcon};
