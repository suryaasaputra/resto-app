/* eslint-disable no-invalid-this */
import restaurants from '../DATA.json';
import './components/card';
const listElement = document.getElementById('listResto');
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const hero = document.querySelector('.hero');

const main = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  menuButton.addEventListener('click', (e) => {
    menu.classList.toggle('open');
    e.stopPropagation();
  });

  hero.addEventListener('click', () => {
    menu.classList.remove('open');
  });

  const showResto = (restos) => {
    listElement.innerHTML = '';
    restos.forEach((resto) => {
      const restoCard = document.createElement('resto-card');
      restoCard.resto = resto;
      listElement.appendChild(restoCard);
    });
  };
  showResto(restaurants.restaurants);
};

export default main;
