import {hydrateRoot} from 'react-dom/client';
import {setUrlConfig} from './url.js';
import App from './App.jsx';
const root = document.getElementById('root');
const ds = {...document.body.dataset, ...root.dataset};
setUrlConfig(ds.base || '', ds.rel === '1');
hydrateRoot(root, <App page={ds.page}/>);
