import {renderToString} from 'react-dom/server';
import App from './App.jsx';
import {setUrlConfig} from './url.js';
export const render = (page, base = '', rel = false) => { setUrlConfig(base, rel); return renderToString(<App page={page}/>); };
