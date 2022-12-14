import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './view/app';
// import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menuButton'),
  drawer: document.querySelector('#menu'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.bundle.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  }
  // swRegister();
});
