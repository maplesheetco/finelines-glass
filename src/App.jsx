import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import HardwareFinishes from './pages/HardwareFinishes.jsx';
import Projects from './pages/Projects.jsx';
import Articles from './pages/Articles.jsx';
import Contact from './pages/Contact.jsx';
import RequestEstimate from './pages/RequestEstimate.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hardware-finishes" element={<HardwareFinishes />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-estimate" element={<RequestEstimate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
