/* eslint-disable max-len */
import FavoriteRestoIdb from '../../data/favorite-resto';
import {createRestoItemTemplate} from '../templates/templates-creator';

const Favorites = {
  async render() {
    return `
<section class="container" id="container">
<div class="section-title" id="content"  tabindex="0">
<h3>Favorites Restaurant</h3>
</div>
<div class="list" id="listResto"></div>
</section>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    if (!restos.length) {
      // document.getElementById('listResto').remove();
      const capt = document.createElement('div');
      capt.classList.add(('no-favorites'));
      capt.innerText= 'Nothing in here';
      document.getElementById('container').appendChild(capt);
      return;
    }
    createRestoItemTemplate(restos);
  },
};

export default Favorites;
