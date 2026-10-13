import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap, ScrollTrigger} from './gsap.js';

const HEADER = 72;

function smoothScroll() {
  const lenis = new Lenis({duration: 1.1, smoothWheel: true});
  lenis.on('scroll', ScrollTrigger.update);
  const tick = t => lenis.raf(t * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  // in-page anchors go through Lenis so pinned sections are respected
  const onClick = e => {
    const a = e.target.closest('a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href);
    if (url.pathname !== location.pathname) return;
    const target = url.hash === '#top' ? 0 : document.querySelector(url.hash);
    if (target === null) return;
    e.preventDefault();
    lenis.scrollTo(target, {offset: target === 0 ? 0 : -HEADER});
    history.replaceState(null, '', url.hash);
  };
  document.addEventListener('click', onClick);
  return () => { gsap.ticker.remove(tick); lenis.destroy(); document.removeEventListener('click', onClick); };
}

function header() {
  const el = document.querySelector('.site-header');
  if (!el) return;
  ScrollTrigger.create({start: 0, end: 'max', onUpdate: self => {
    el.classList.toggle('is-scrolled', self.scroll() > 20);
    el.classList.toggle('is-hidden', self.direction === 1 && self.scroll() > 400 && !document.documentElement.classList.contains('menu-open'));
  }});
}

function heroIntro() {
  const tl = gsap.timeline({defaults: {ease: 'expo.out'}});
  tl.from('.hero-band', {clipPath: 'inset(0 100% 0 0 round 0)', duration: 1.1, ease: 'expo.inOut'})
    .from('.hero-col', {clipPath: 'inset(0 0 100% 0)', duration: .9, ease: 'expo.inOut'}, '-=.45')
    .from('.hero-square', {clipPath: 'inset(100% 0% 0% 100%)', duration: 1.1, ease: 'expo.inOut', clearProps: 'clipPath'}, '-=.5')
    .from('.hero-title .line > span', {yPercent: 110, duration: 1.1, stagger: .09}, .55)
    .from('.hero-col > *', {y: 24, opacity: 0, duration: .8, stagger: .07}, '-=.7')
    .from('.stack-item', {y: 140, rotation: i => 8 - i * 4, opacity: 0, duration: 1.1, stagger: .08}, '-=.8');
  document.querySelectorAll('[data-count]').forEach(n => {
    const end = +n.dataset.count, o = {v: 0};
    tl.to(o, {v: end, duration: 1.6, ease: 'power3.out', onUpdate: () => { n.textContent = Math.round(o.v); }}, 1);
  });
  return tl;
}

function heroStack() {
  const items = gsap.utils.toArray('.stack-item');
  if (items.length < 2) return;
  let order = items.slice();
  const place = (animate) => order.forEach((el, i) => {
    const vars = {x: i * 22, y: i * -18, rotation: i === 0 ? -3 : i * 2.5, scale: 1 - i * .06, zIndex: items.length - i, opacity: i > 3 ? 0 : 1};
    animate ? gsap.to(el, {...vars, duration: .9, ease: 'expo.inOut'}) : gsap.set(el, vars);
  });
  place(false);
  const cycle = () => {
    const first = order.shift();
    gsap.timeline()
      .to(first, {y: '-=60', x: '-=80', rotation: -14, duration: .45, ease: 'power2.in'})
      .add(() => { order.push(first); place(true); });
  };
  const id = setInterval(() => { if (!document.hidden) cycle(); }, 2800);
  return () => clearInterval(id);
}

function heroZoom() {
  const hero = document.querySelector('.hero');
  const sq = document.querySelector('.hero-square');
  if (!hero || !sq) return;
  const geo = () => {
    const h = hero.getBoundingClientRect(), r = sq.getBoundingClientRect();
    const top = HEADER + (r.top - h.top);
    return {
      s: Math.max(innerWidth / r.width, innerHeight / r.height) * 1.04,
      x: innerWidth / 2 - (r.left + r.width / 2),
      y: innerHeight / 2 - (top + r.height / 2),
    };
  };
  // the work section slides in underneath the zoomed square, so there is no empty lime screen
  const work = document.querySelector('.work');
  hero.style.position = 'relative'; hero.style.zIndex = '3'; hero.style.background = 'var(--paper)';
  if (work) { work.style.marginTop = `calc(-100svh + ${HEADER}px)`; work.style.zIndex = '1'; }
  let g = geo();
  const tl = gsap.timeline({scrollTrigger: {trigger: hero, start: `top ${HEADER}px`, end: '+=110%', pin: true, scrub: .6, anticipatePin: 1, invalidateOnRefresh: true, onRefreshInit: () => { g = geo(); }}});
  tl.to('.hero-square > *', {opacity: 0, duration: .25}, 0)
    .to('.hero-band', {yPercent: -60, opacity: 0, duration: .6, ease: 'power2.in'}, 0)
    .to('.hero-col', {xPercent: -70, opacity: 0, duration: .6, ease: 'power2.in'}, 0)
    .to(sq, {x: () => g.x, y: () => g.y, scale: () => g.s, borderRadius: 0, duration: 1, ease: 'power2.inOut'}, 0);
}

function workScroll() {
  const pin = document.querySelector('.work-pin');
  const track = document.querySelector('.work-track');
  if (!pin || !track) return;
  pin.style.overflow = 'hidden';
  const dist = () => Math.max(0, track.scrollWidth - innerWidth + parseFloat(getComputedStyle(pin).paddingLeft) + 48);
  // hold still while the hero square slides away, then scroll sideways
  const hold = () => innerHeight * .9;
  const tl = gsap.timeline({scrollTrigger: {trigger: pin, start: 'top top', end: () => '+=' + (dist() + hold()), pin: true, scrub: .7, invalidateOnRefresh: true}});
  tl.to({}, {duration: () => hold()}).to(track, {x: () => -dist(), ease: 'none', duration: () => dist()});
}

function steps() {
  const list = document.querySelector('.steps');
  if (!list) return;
  const horizontal = matchMedia('(min-width: 900px)').matches;
  gsap.fromTo('.steps-line span', horizontal ? {scaleX: 0} : {scaleY: 0}, {scaleX: 1, scaleY: 1, ease: 'none', scrollTrigger: {trigger: list, start: 'top 70%', end: 'bottom 55%', scrub: true}});
  gsap.utils.toArray('.step').forEach(step => ScrollTrigger.create({trigger: step, start: horizontal ? 'top 45%' : 'top 60%', onToggle: s => step.classList.toggle('is-on', s.isActive || s.progress === 1), end: 'max'}));
}

function marquee() {
  const track = document.querySelector('.platforms-track');
  if (!track) return;
  const loop = gsap.to(track, {xPercent: -50, ease: 'none', duration: 22, repeat: -1});
  ScrollTrigger.create({start: 0, end: 'max', onUpdate: s => {
    const v = gsap.utils.clamp(-4, 4, s.getVelocity() / 400);
    gsap.to(loop, {timeScale: (s.direction || 1) * Math.max(1, Math.abs(v)), duration: .3, overwrite: true});
    gsap.to(loop, {timeScale: s.direction || 1, duration: 1.2, delay: .3});
  }});
}

function bars() {
  gsap.utils.toArray('.roas').forEach(chart => {
    gsap.from(chart.querySelectorAll('.roas-bar'), {scaleX: 0, duration: 1.2, ease: 'expo.out', stagger: .08, scrollTrigger: {trigger: chart, start: 'top 75%', once: true}});
    gsap.from(chart.querySelectorAll('.roas-val'), {opacity: 0, x: -10, duration: .6, stagger: .08, delay: .5, scrollTrigger: {trigger: chart, start: 'top 75%', once: true}});
  });
  gsap.utils.toArray('.funnel').forEach(f => gsap.from(f.querySelectorAll('.funnel-bar'), {scaleX: 0, duration: 1.2, ease: 'expo.out', stagger: .12, scrollTrigger: {trigger: f, start: 'top 75%', once: true}}));
  [['.svc-grid', '.svc-card'], ['.why-grid', 'li'], ['.case-grid', '.case'], ['.dl-grid', '.dl-card'], ['.story-points', 'li'], ['.engage-grid', ':scope > li']].forEach(([wrap, item]) => {
    gsap.utils.toArray(wrap).forEach(w => gsap.from(w.querySelectorAll(item), {y: 50, opacity: 0, duration: .9, ease: 'expo.out', stagger: .07, scrollTrigger: {trigger: w, start: 'top 80%', once: true}}));
  });
  gsap.utils.toArray('.stats-band').forEach(b => gsap.from(b.querySelectorAll('strong'), {yPercent: 60, opacity: 0, duration: 1, ease: 'expo.out', stagger: .08, scrollTrigger: {trigger: b, start: 'top 85%', once: true}}));
}

function revealOnce() {
  // one quiet reveal for big section headings only
  gsap.utils.toArray('.work-head h2, .clients-head h2, .svc-head h2, .process-head h2, .faq h2, .contact-title, .why h2, .downloads-head h2, .perf-teaser h2, .engage h2, .case-grid-wrap h2, .perf-how h2, .about-story h2, .cta-band h2, .svc-row h2').forEach(h => {
    gsap.from(h, {yPercent: 30, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: {trigger: h, start: 'top 85%', once: true}});
  });
  if (document.querySelector('.logo-wall')) gsap.from('.logo-wall li', {opacity: 0, scale: .6, duration: .6, ease: 'back.out(2)', stagger: {each: .012, from: 'random'}, scrollTrigger: {trigger: '.logo-wall', start: 'top 80%', once: true}});
}

function magnetic() {
  const els = document.querySelectorAll('[data-magnetic]');
  const offs = [];
  els.forEach(el => {
    const xTo = gsap.quickTo(el, 'x', {duration: .5, ease: 'elastic.out(1,.4)'}), yTo = gsap.quickTo(el, 'y', {duration: .5, ease: 'elastic.out(1,.4)'});
    const move = e => { const r = el.getBoundingClientRect(); xTo((e.clientX - r.left - r.width / 2) * .3); yTo((e.clientY - r.top - r.height / 2) * .3); };
    const leave = () => { xTo(0); yTo(0); };
    el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave);
    offs.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); });
  });
  return () => offs.forEach(f => f());
}

export function useSiteMotion(page) {
  useEffect(() => {
    const cleanups = [];
    const mm = gsap.matchMedia();
    mm.add({motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 900px)', fine: '(pointer: fine)'}, ctx => {
      const {motion, desktop, fine} = ctx.conditions;
      header();
      if (!motion) return;
      cleanups.push(smoothScroll());
      if (page === 'home') {
        heroIntro();
        cleanups.push(heroStack());
        if (desktop) { heroZoom(); workScroll(); }
        marquee();
      } else if (page === 'portfolio') {
        gsap.from('.pf-hero .line > span', {yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: .1});
        gsap.from('.pf-grid .tile', {y: 60, opacity: 0, duration: .8, ease: 'expo.out', stagger: .04, delay: .3});
      } else {
        const tl = gsap.timeline({defaults: {ease: 'expo.out'}});
        if (document.querySelector('.page-hero')) tl.from('.page-hero', {clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'expo.inOut'});
        tl.from('.page-hero .line > span, .thanks .line > span', {yPercent: 110, duration: 1.1, stagger: .08}, .35)
          .from('.page-hero-side > *, .thanks .next-list li, .thanks .row-actions', {y: 24, opacity: 0, duration: .8, stagger: .07}, .6);
      }
      steps(); revealOnce(); bars();
      if (fine) cleanups.push(magnetic());
      return () => { cleanups.splice(0).forEach(f => f && f()); };
    });
    document.documentElement.classList.add('js-ready');
    const fontsReady = document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => mm.revert();
  }, [page]);
}
