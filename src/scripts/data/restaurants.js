import API_ENDPOINT from '../globals/api-endpoint';

class Restaurants {
  static async list() {
    const response = await fetch(API_ENDPOINT.list);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async search(keyword) {
    const response = await fetch(API_ENDPOINT.search(keyword));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default Restaurants;
