// Each page is its own JavaScript file, downloaded only when a visitor opens
// that page, so the first load stays small. The build step that prerenders
// pages swaps this file for pages/eager.js (see vite.config.js), because
// server rendering needs every page loaded up front.
import { lazy } from 'react';

export const Home = lazy(() => import('./Home.jsx'));
export const About = lazy(() => import('./About.jsx'));
export const Services = lazy(() => import('./Services.jsx'));
export const ServiceDetail = lazy(() => import('./ServiceDetail.jsx'));
export const ServiceDesignDetail = lazy(() => import('./ServiceDesignDetail.jsx'));
export const HardwareFinishes = lazy(() => import('./HardwareFinishes.jsx'));
export const Projects = lazy(() => import('./Projects.jsx'));
export const Articles = lazy(() => import('./Articles.jsx'));
export const ArticleDetail = lazy(() => import('./ArticleDetail.jsx'));
export const Contact = lazy(() => import('./Contact.jsx'));
export const ServiceAreas = lazy(() => import('./ServiceAreas.jsx'));
export const CityPage = lazy(() => import('./CityPage.jsx'));
export const RequestEstimate = lazy(() => import('./RequestEstimate.jsx'));
export const Privacy = lazy(() => import('./Privacy.jsx'));
export const Disclaimer = lazy(() => import('./Disclaimer.jsx'));
