import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { trackContactClicks } from './analytics.js';
import './index.css';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    {/* v7_startTransition keeps the current page on screen while the next
        page's file downloads, instead of flashing an empty page. */}
    <BrowserRouter future={{ v7_startTransition: true }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

trackContactClicks();

// Pages built ahead of time already contain their HTML, so React attaches to
// it instead of drawing the page again from scratch.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
