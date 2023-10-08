import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.tsx';
import './scss/index.scss';
import { configureInitialTheme } from './app/utils/common';

configureInitialTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
