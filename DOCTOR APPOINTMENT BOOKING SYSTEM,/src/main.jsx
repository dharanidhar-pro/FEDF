/**
 * main.jsx — Application Entry Point
 * =====================================
 * CO1: React.StrictMode enables additional development checks
 *      and warnings (Virtual DOM debugging aid).
 * CO2: ES6 module imports.
 *
 * This file mounts the React component tree into the DOM — the ONLY
 * imperative DOM call in the entire application. Everything else is declarative.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// The single imperative DOM access — React takes over from here
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
