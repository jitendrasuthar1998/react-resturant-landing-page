import React, { Suspense, lazy } from 'react';
import { Header, AboutUs } from './container';
import { Navbar } from './components';
import './App.css';

const Chef = lazy(() => import('./container/Chef/Chef'));
const FindUs = lazy(() => import('./container/Findus/FindUs'));
const Footer = lazy(() => import('./container/Footer/Footer'));
const SpecialMenu = lazy(() => import('./container/Menu/SpecialMenu'));
const Gallery = lazy(() => import('./container/Gallery/Gallery'));
const Intro = lazy(() => import('./container/Intro/Intro'));
const Laurels = lazy(() => import('./container/Laurels/Laurels'));

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Suspense fallback='loading'>
      <SpecialMenu />
    </Suspense>
    <Suspense fallback='loading'>
      <Chef />
    </Suspense>
    <Suspense fallback='loading'>
      <Intro />
    </Suspense>
    <Suspense fallback='loading'>
      <Laurels />
    </Suspense>
    <Suspense fallback='loading'>
      <Gallery />
    </Suspense>
    <Suspense fallback='loading'>
      <FindUs />
    </Suspense>
    <Suspense fallback='loading'>
      <Footer />
    </Suspense>
  </div>
);

export default App;
