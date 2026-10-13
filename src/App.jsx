import {Header, Contact, Footer, WhatsAppButton} from './Layout.jsx';
import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx';
import {ServicesPage, PerformancePage, AboutPage, ContactPage, ThankYouPage} from './Pages.jsx';
import {useSiteMotion} from './motion.js';

const pick = name => { try { sessionStorage.setItem('ws-service', name); } catch {} };

export default function App({page = 'home'}) {
  useSiteMotion(page);
  const body = {
    home: <Home onPick={pick}/>,
    portfolio: <Portfolio/>,
    services: <ServicesPage onPick={pick}/>,
    performance: <PerformancePage/>,
    about: <AboutPage/>,
    contact: <ContactPage/>,
    'thank-you': <ThankYouPage/>,
  }[page];
  const showContact = !['contact', 'thank-you'].includes(page);
  return <div className={'site page-' + page}>
    <a className="skip" href="#main">Skip to content</a>
    <Header page={page}/>
    <main id="main">{body}</main>
    {showContact && <Contact/>}
    <Footer/>
    <WhatsAppButton/>
  </div>;
}
