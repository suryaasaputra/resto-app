/* eslint-disable max-len */
import CONFIG from '../../globals/config';
import '../components/resto-item';

const heroTemplate = () => `<div class="hero-title">
<h2>Find Your Most Favorite Resto</h2>
<p>Explore the restautant from all over Indonesia.</p>
</div>

<img src="./images/heros/hero-image_2.jpg" alt="Hero Background Image" />
`;


const createRestoDetailTemplate = (resto) => `
  
  <div class="resto-detail" id="content"  tabindex="0">
  <div class="headline">
  <h2 class="detail-title">${resto.name}</h2>
  </div>
  <div class="resto-image">
    <img class="resto__poster" 
    src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  </div>
  <div class="resto-info">
    <div class="resto-overview">
    <div class="resto-location">
    <i class="fa-solid fa-location-dot location"></i>
    <b>${resto.city}</b> <small>${resto.address}</small>
    </div>
    <div class="resto-categorie">
    Categories:<b>
    ${resto.categories.map((categorie)=>`
    <span>${categorie.name}</span>`).join(',')}
    </b>
    </div>
    <div class="resto-rating star">
    <i class="fa-solid fa-star icon "></i><b>${resto.rating}/5</b>
    </div>
    </div>
    <h3>Description</h3>
    <p>${resto.description}</p>
    <h3>Foods</h3>
    <p>${resto.menus.foods.map((food)=>`${food.name}`).join(', ')}</p>
    <h3>Drinks</h3>
    <p>${resto.menus.drinks.map((drink)=>`${drink.name}`).join(', ')}</p>
  </div>
  <div class="resto-review">
    <h3>Review</h3>
    <div class="review-container">${resto.customerReviews.map((review)=>
    `<div class="review-card">
    <h4 class="reviewer-name">${review.name}</h4>
    <span class="review-date">${review.date}</span>
    <p class="review-comment">${review.review}</p>
    </div>`).join('')}</div>
  </div>
  <div class="resto-post-review">
  <h3>Post a new review</h3>
  <form id="reviewForm">
    <div class="input-group">
    <input placeholder="Your Name" 
    type="text" class="name-input" id="reviewerName" required>
    </div>
    <div class="input-group">
    <textarea placeholder="Your Review" rows="5" class="review-input" id="reviewText" required></textarea>
    </div>
    <button id="submit-review" type="submit">Post Review</button>
  </form>
  </div>


`;

const createRestoItemTemplate = (restaurants) => {
  return restaurants.forEach((resto) => {
    const restoCard = document.createElement('resto-card');
    restoCard.setAttribute('role', 'button');
    restoCard.setAttribute('tabindex', '0');
    restoCard.setAttribute('id', resto.id);
    restoCard.resto = resto;
    document.getElementById('listResto').appendChild(restoCard);
  });
};

const createLikeButtonTemplate = () => `
  <button aria-label="Add to favorite resto" id="likeButton" class="like">
     <i class="fa-regular fa-bookmark" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Remove from favorite resto" id="likeButton" class="like">
   <i class="fa-solid fa-bookmark" aria-hidden="true"></i>
  </button>
`;

export {
  heroTemplate,
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
