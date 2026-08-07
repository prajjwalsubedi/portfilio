import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testmonial from './components/Testmonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CGTDesk from './components/CGTDesk';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

/**
 * Keep the existing portfolio as the home page, while serving CGT Desk from
 * /cgt-desk without adding a routing dependency to this small React app.
 */
const isCGTDeskPage = window.location.pathname.replace(/\/+$/, '') === '/cgt-desk';

ReactDOM.render(
  <React.StrictMode>
    {isCGTDeskPage ? (
      <>
        <Header showHero={false} />
        <CGTDesk />
        <Footer />
      </>
    ) : (
      <>
        <Header />
        <About />
        <Service />
        <Skills />
        <Experience />
        <Testmonial />
        <Blog />
        <Contact />
        <Footer />
      </>
    )}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
