import {useMemo, useRef, useState, useLayoutEffect, useEffect} from 'react';
import brands from './data/brands.json';
import {Card} from './Card.jsx';
import {gsap, Flip} from './gsap.js';

const order = ['Fashion', 'Ethnic & craft', 'Jewellery', 'Home & gifting', 'Health & wellness', 'Food', 'Kids', 'Hospitality', 'Industry & tech'];
const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default function Portfolio() {
  const [group, setGroup] = useState('All');
  const [q, setQ] = useState('');
  const grid = useRef(null);
  const flipState = useRef(null);
  const counts = useMemo(() => Object.fromEntries(order.map(g => [g, brands.filter(b => b.group === g).length])), []);
  const visible = brands.filter(b => (group === 'All' || b.group === group) && (!q || (b.name + ' ' + b.category).toLowerCase().includes(q.toLowerCase())));

  const capture = () => {
    if (!grid.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    flipState.current = Flip.getState(grid.current.querySelectorAll('.tile'));
  };
  useIso(() => {
    if (!flipState.current) return;
    Flip.from(flipState.current, {duration: .6, ease: 'expo.out', scale: true, absolute: true, stagger: .015,
      onEnter: els => gsap.fromTo(els, {opacity: 0, scale: .9}, {opacity: 1, scale: 1, duration: .5, ease: 'expo.out'}),
      onLeave: els => gsap.to(els, {opacity: 0, scale: .9, duration: .3})});
    flipState.current = null;
  }, [group, q]);

  return <>
    <section className="pf-hero" id="top">
      <h1><span className="line"><span>{brands.length} brands.</span></span><span className="line"><span>All live, all ours.</span></span></h1>
      <p>Every project below is a working website or store we designed and built. Filter by industry or search by name. Each tile opens the live site.</p>
    </section>
    <section className="pf" aria-label="Portfolio">
      <div className="pf-bar">
        <div className="pf-filters" role="group" aria-label="Filter by industry">
          {['All', ...order].map(g => <button key={g} aria-pressed={group === g} onClick={() => { capture(); setGroup(g); }}>
            {g}<span>{g === 'All' ? brands.length : counts[g]}</span>
          </button>)}
        </div>
        <label className="pf-search"><span className="visually-hidden">Search brands</span>
          <input type="search" placeholder="Search brands" value={q} onChange={e => { capture(); setQ(e.target.value); }}/>
        </label>
      </div>
      <p className="pf-count" aria-live="polite">{visible.length} {visible.length === 1 ? 'brand' : 'brands'}</p>
      <div className="pf-grid" ref={grid}>
        {visible.map((b, i) => <Card key={b.slug} brand={b} eager={i < 3}/>)}
      </div>
      {!visible.length && <div className="pf-empty"><p>No brand matches “{q}”.</p><button className="btn btn-ink" onClick={() => { setQ(''); setGroup('All'); }}>Show all brands</button></div>}
    </section>
  </>;
}
