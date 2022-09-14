/* eslint-disable no-invalid-this */
import restaurants from '../DATA.json';
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
      listElement.innerHTML +=
`<div class="card" role="button" tabindex="0" id="${resto.id}">
<div class="header">
<img
src=${resto.pictureId}
alt="Restorant Picture"
/>
</div>
<div class="body">
<h4 class="name">${resto.name}</h4>
<span class="rate">
<i class="fa-solid fa-star icon"></i> <b>${resto.rating}/5</b>
</span>
<div class="city">
<i class="fa-solid fa-location-dot"> </i> 
<b> &nbsp${resto.city}</b>
</div>
<p class="desc">
${resto.description}
</p>
</div>
</div>`;
    });
  };
  showResto(restaurants.restaurants);
};

export default main;
