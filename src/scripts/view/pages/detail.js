import Restaurants from '../../data/restaurants';
import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import {createRestoDetailTemplate} from '../templates/templates-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto';

const Detail = {
  async render() {
    return `
<section class="detail" id="detailResto">
<span class="loader" id="loader"></span>
</section>


<div id="likeButtonContainer"></div>
    `;
  },


  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await Restaurants.detailRestaurant(url.id);
    document.getElementById('loader').remove();
    console.log(resto);
    const detaiContainer = document.querySelector('#detailResto');
    detaiContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: url.id,
        name: resto.name,
        pictureId: resto.pictureId,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });
    const formReview =document.getElementById('reviewForm');
    formReview.addEventListener('submit', async (e) => {
      e.preventDefault();
      const reviewerName = document.querySelector('#reviewerName').value;
      const reviewText = document.querySelector('#reviewText').value;
      const review = {
        id: url.id,
        name: reviewerName,
        review: reviewText,
      };
      console.log(review);
      const reviewResult = await Restaurants.sendReview(review);
      console.log(reviewResult);
      Swal.fire({
        icon: 'success',
        color: '#557571',
        title: 'Your review has been submitted successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      document.getElementById('reviewForm').reset();
    });
  },
};

export default Detail;
