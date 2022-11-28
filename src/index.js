import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { store } from './app/store'
import { Provider } from 'react-redux'

import('bootstrap/dist/css/bootstrap.min.css');
import('./styles/dashboard.css');
import('./styles/responsive.css');
import('./styles/campaign.css')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
