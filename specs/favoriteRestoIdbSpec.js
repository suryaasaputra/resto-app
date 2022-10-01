import {itActsAsFavoriteRestoModel} from './contract/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto';

describe('Favorite Resto Idb Contract Implementation', ()=>{
  afterEach(async ()=>{
    (await FavoriteRestoIdb.getAllRestos()).forEach(async (resto)=>{
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
