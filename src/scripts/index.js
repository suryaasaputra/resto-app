import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menuButton'),
  drawer: document.querySelector('#menu'),
  content: document.querySelector('#main'),
});

// eslint-disable-next-line no-unused-vars
const search = new App({
  button: document.querySelector('#searchButton'),
  drawer: document.querySelector('#searchKeyword'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
