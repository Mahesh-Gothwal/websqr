// URL helper: pretty root URLs for real hosting, relative URLs for the preview build.
const cfg = {base: '', rel: false};
export const setUrlConfig = (base, rel) => { cfg.base = base; cfg.rel = rel; };
export const PAGES = ['/', '/portfolio/', '/services/', '/performance/', '/about/', '/contact/', '/thank-you/'];
const pages = Object.fromEntries(PAGES.map(p => [p, p === '/' ? 'index.html' : p.slice(1) + 'index.html']));
export function u(path) {
  if (!cfg.rel) return path;
  const [p, hash] = path.split('#');
  const mapped = pages[p] ?? p.replace(/^\//, '');
  return cfg.base + mapped + (hash !== undefined ? '#' + hash : '');
}
