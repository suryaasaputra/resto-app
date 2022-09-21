import Restaurants from '../../data/restaurants';
import '../../components/resto-item';

const Search = {
  async render() {
    return `
<section class="container">
<div class="section-title" id="content">
<h3>Search Result</h3>
</div>
<div class="list" id="listResto"></div>
</section>
    `;
  },

  async afterRender() {
    // const keyword = document.querySelectorAll('#searchKeyword').value;
    const searchResult = await Restaurants.search(keyword);
    console.log(searchResult);
    searchResult.forEach((resto) => {
      const restoCard = document.createElement('resto-card');
      restoCard.setAttribute('role', 'button');
      restoCard.setAttribute('tabindex', '0');
      restoCard.setAttribute('id', resto.id);
      restoCard.resto = resto;
      document.getElementById('listResto').appendChild(restoCard);
    });
  },
};

export default Search;
