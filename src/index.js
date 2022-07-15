import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// Сделать дефолтное описание
// Ограничить описание 200 символами

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
