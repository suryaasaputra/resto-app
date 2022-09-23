/* eslint-disable require-jsdoc */
import CONFIG from '../../globals/config';
class RestoCard extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.innerHTML =`
<a href="/#/detail/${this._resto.id}">
<div class="card">
<div class="card-header">
<img
src=${CONFIG.BASE_IMAGE_URL}${this._resto.pictureId}
alt="Restorant Picture"
/>
</div>
<div class="body">
<h4 class="name">${this._resto.name}</h4>
<span class="rate">
<i class="fa-solid fa-star icon"></i> <b>${this._resto.rating}/5</b>
</span>
<div class="city">
<i class="fa-solid fa-location-dot"> </i> 
<b> &nbsp${this._resto.city}</b>
</div>
<p class="desc">
${this._resto.description}
</p>
</div>
</div>
</a>`;
  }
}

customElements.define('resto-card', RestoCard);
