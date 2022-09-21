import Restaurants from '../../data/restaurants';
import UrlParser from '../../routes/url-parser';
import {createRestoDetailTemplate} from '../templates/templates-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
<section class="detail" id="detailResto">

</section>

<div id="likeButtonContainer"></div>
    `;
  },


  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await Restaurants.detailRestaurant(url.id);
    console.log(resto);
    const detaiContainer = document.querySelector('#detailResto');
    detaiContainer.innerHTML = createRestoDetailTemplate(resto);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: url.id,
        name: resto.name,
        pictureId: resto.pictureId,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
