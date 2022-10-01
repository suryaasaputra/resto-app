/* eslint-disable max-len */
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';


describe('Liking A Resto', () =>{
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('shouldshow the like button when the resto has not been liked before', async () =>{
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    expect(document.querySelector('[aria-label="Add to favorite resto"]'))
        .toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});
    expect(document.querySelector('[aria-label="Remove from favorite resto"]'))
        .toBeFalsy();
  });

  it('should be able to add the resto to the favorites list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const resto = await FavoriteRestoIdb.getResto(1);
    expect(resto).toEqual({id: 1});

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});
    await FavoriteRestoIdb.putResto({id: 1});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{id: 1}]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto when it has no id', async ()=>{
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
