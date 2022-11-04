import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// slick-slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";

// FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// SCSS
import './styles/style.scss'
import './styles/reponsive.scss'
// Font
import './styles/fonts.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
