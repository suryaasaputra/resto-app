import FavoriteRestoIdb from '../../data/favorite-resto';

const Favorites = {
  async render() {
    return `
      <section class="container">
<div class="section-title" id="content">
<h3>Favorites Restaurant</h3>
</div>
<div class="list" id="listResto"></div>
</section>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    restos.forEach((resto) => {
      const restoCard = document.createElement('resto-card');
      restoCard.setAttribute('role', 'button');
      restoCard.setAttribute('tabindex', '0');
      restoCard.setAttribute('id', resto.id);
      restoCard.resto = resto;
      document.getElementById('listResto').appendChild(restoCard);
    });
  },
};

export default Favorites;
