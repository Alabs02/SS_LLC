import { StrictMode } from 'react';
import { render as Render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import NProgress from './NProgress';
import Toast from './components/Toast';

// REDUX STORE
import store from './store';
import { Provider } from 'react-redux';

// APP
import App from './App';

// GLOBAL STYLES
import '@/assets/scss/app.scss';

Render(
  <Provider store={store}>
    <StrictMode>
      <App />
      <Toast />
      <NProgress />
    </StrictMode>
  </Provider>,
  document.getElementById('app-root')
);
const isProd = process.env.NODE_ENV === 'production';
!isProd && reportWebVitals(console.log);
