/* eslint-disable max-len */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto';

describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({id: 1});
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should show unlike buttton when the resto has been liked', async () =>{
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    expect(document.querySelector('[aria-label="Remove from favorite resto"]'))
        .toBeTruthy();
  });

  it('should not show like button when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    expect(document.querySelector('[aria-label="Add to favorite resto"]'))
        .toBeFalsy();
  });

  it('should be able to remove liked resto from favorite list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    document.querySelector('[aria-label="Remove from favorite resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    await FavoriteRestoIdb.deleteResto(1);
    document.querySelector('[aria-label="Remove from favorite resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
