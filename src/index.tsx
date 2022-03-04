import { StrictMode } from 'react';
import { render as Render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import NProgress from './NProgress';
import Toast from "./components/Toast";

// APP
import App from './App';

// GLOBAL STYLES
import '@/assets/scss/app.scss';

Render(
  <StrictMode>
      <App />
      <Toast />
      <NProgress />
  </StrictMode>,
  document.getElementById('root')
);
const isProd = process.env.NODE_ENV === 'production';
!isProd && reportWebVitals(console.log);
