import Restaurants from '../../data/restaurants';
import '../../components/resto-item';

const Home = {
  async render() {
    return `
<section class="hero">
<div class="hero-title">
<h2>Find Your Most Favorite Resto</h2>
<p>Explore the restautant from all over Indonesia.</p>
</div>

<img src="./images/heros/hero-image_2.jpg" alt="Hero Background Image" />
</section>

<section class="container">
<div class="section-title" id="content">
<h3>Explore Restaurant</h3>
</div>
<div class="list" id="listResto"></div>
</section>
    `;
  },

  async afterRender() {
    const restaurants = await Restaurants.list();
    restaurants.forEach((resto) => {
      const restoCard = document.createElement('resto-card');
      restoCard.setAttribute('role', 'button');
      restoCard.setAttribute('tabindex', '0');
      restoCard.setAttribute('id', resto.id);
      restoCard.resto = resto;
      document.getElementById('listResto').appendChild(restoCard);
    });
  },
};

export default Home;
