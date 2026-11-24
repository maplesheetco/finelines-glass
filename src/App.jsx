import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PageMeta from './components/PageMeta.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import ServiceDesignDetail from './pages/ServiceDesignDetail.jsx';
import HardwareFinishes from './pages/HardwareFinishes.jsx';
import Projects from './pages/Projects.jsx';
import Articles from './pages/Articles.jsx';
import ArticleDetail from './pages/ArticleDetail.jsx';
import Contact from './pages/Contact.jsx';
import ServiceAreas from './pages/ServiceAreas.jsx';
import CityPage from './pages/CityPage.jsx';
import RequestEstimate from './pages/RequestEstimate.jsx';
import Privacy from './pages/Privacy.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <PageMeta />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
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
      </main>
      <Footer />
    </>
  );
}
