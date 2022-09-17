/* eslint-disable no-invalid-this */
import restaurants from '../DATA.json';
import './components/card';
const listElement = document.getElementById('listResto');
const menuButton = document.getElementById('menuButton');
const searchButton =document.getElementById('searchButton');
const searchKeyword = document.getElementById('searchKeyword');
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

  searchButton.addEventListener('click', (e)=>{
    searchKeyword.classList.toggle('active');
    e.stopPropagation();
    e.preventDefault();
  });

  hero.addEventListener('click', () => {
    menu.classList.remove('open');
    searchKeyword.classList.remove('active');
  });
  const showResto = (restos) => {
    listElement.innerHTML = '';
    restos.forEach((resto) => {
      const restoCard = document.createElement('resto-card');
      restoCard.setAttribute('role', 'button');
      restoCard.setAttribute('tabindex', '0');
      restoCard.setAttribute('id', resto.id);
      restoCard.resto = resto;
      listElement.appendChild(restoCard);
    });
  };
  showResto(restaurants.restaurants);
};

export default main;
