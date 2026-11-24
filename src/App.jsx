import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PageMeta from './components/PageMeta.jsx';
import NotFound from './pages/NotFound.jsx';
import {
  Home,
  About,
  Services,
  ServiceDetail,
  ServiceDesignDetail,
  HardwareFinishes,
  Projects,
  Articles,
  ArticleDetail,
  Contact,
  ServiceAreas,
  CityPage,
  RequestEstimate,
  Privacy,
  Disclaimer,
} from './pages/lazy.js';

export default function App() {
  return (
    <>
      <PageMeta />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services/:slug/:designSlug" element={<ServiceDesignDetail />} />
          <Route path="/hardware-finishes" element={<HardwareFinishes />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/:slug" element={<CityPage />} />
          <Route path="/request-estimate" element={<RequestEstimate />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
