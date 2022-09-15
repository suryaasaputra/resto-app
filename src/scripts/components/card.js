/* eslint-disable require-jsdoc */
class RestoCard extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.innerHTML =`
<style>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}


.card-header {
width: 100%;
}

.card-header img {
width: 100%;
height: 200px;
object-fit: cover;
}

.body {
display: grid;
padding: 10px;
row-gap: 10px;
grid-template-columns: 2fr 1fr;
}

.body .name {
grid-column-start: 1;
grid-column-end: 2;
font-size: 18px;
padding: 0;
color: #181818;
}

.body .rate {
color: #efd345;
grid-row-start: 2;
height: fit-content;
padding: 0;
max-height: 25px;
}

.body .city {
font-size: 24px;
grid-row-start: 1;
grid-row-end: 3;
display: flex;
justify-content: center;
align-items: center;
color: #557571;
text-shadow: 0px 8px 10px rgba(150, 150, 150, 0.5);
}

.body .city .icon {
margin: 0 50px;
}
.city b {
text-shadow: none;
color: #413f42;
font-size: 22px;
}

.body .desc {
grid-column-start: 1;
grid-column-end: 3;
}

.body p {
color: #5b6d5b;
font-size: 14px;
text-align: justify;
line-height: 1.25rem;
}
.bottom {
display: flex;
padding: 0 20px;
justify-content: space-between;
margin-top: auto;
}
</style>

<div class="card">
<div class="card-header">
<img
src=${this._resto.pictureId}
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
</div>`;
  }
}

customElements.define('resto-card', RestoCard);
