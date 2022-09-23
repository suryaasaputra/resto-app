import Restaurants from '../../data/restaurants';
import '../components/resto-item';
import {heroTemplate,
  createRestoItemTemplate} from '../templates/templates-creator';

const Home = {
  async render() {
    return `
<section class="hero"id="hero">
</section>
<section class="container">
<div class="section-title" id="content"  tabindex="0">
<h3>Explore Restaurant</h3>
</div>
<div class="list" id="listResto"></div>
<span class="loader" id="loader"></span>
</section>
    `;
  },

  async afterRender() {
    document.getElementById('hero').innerHTML=heroTemplate();
    const restaurants = await Restaurants.list();
    document.getElementById('loader').remove();
    createRestoItemTemplate(restaurants);
  },
};

export default Home;
