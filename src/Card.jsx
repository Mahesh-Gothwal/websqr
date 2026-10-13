import {u} from './url.js';
import brands from './data/brands.json';

export const bySlug = Object.fromEntries(brands.map(b => [b.slug, b]));
export const domain = url => url ? url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : null;

export function ArrowIcon({size = 18}) {
  return <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" fill="none"><path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/></svg>;
}

// Square flip tile: logo on the front, story + live link on the back.
export function Card({brand, size = 'grid', eager = false}) {
  const Tag = brand.url ? 'a' : 'div';
  const linkProps = brand.url ? {href: brand.url, target: '_blank', rel: 'noopener noreferrer'} : {};
  return <Tag className={`tile tile-${size}`} data-group={brand.group} data-slug={brand.slug} {...linkProps}
    aria-label={brand.url ? `${brand.name}, ${brand.category}. Opens ${domain(brand.url)} in a new tab` : `${brand.name}, ${brand.category}`}>
    <div className="tile-inner">
      <div className="tile-face tile-front">
        <img src={u(brand.logo)} alt="" loading={eager ? 'eager' : 'lazy'} decoding="async" style={{'--ratio': brand.logoRatio}} className={brand.logoRatio < 1.6 ? 'is-tall' : ''}/>
        <span className="tile-cat"><b className="tile-name">{brand.name}</b>{brand.category}</span>
      </div>
      <div className="tile-face tile-back" aria-hidden="true">
        <span className="tile-cat">{brand.category}</span>
        <h3>{brand.name}</h3>
        {size !== 'stack' && <p>{brand.description}</p>}
        <span className="tile-link">{brand.url ? <>{domain(brand.url)} <ArrowIcon size={16}/></> : 'Launching soon'}</span>
      </div>
    </div>
  </Tag>;
}
