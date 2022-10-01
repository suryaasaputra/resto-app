/* eslint-disable new-cap */
const assert = require('assert');
Feature('Liking Resto');

Before(({I}) => {
  I.amOnPage('/#/favorites');
});

Scenario('liking one resto and unlike the resto ', async ({I}) => {
  I.see('Nothing in here', '.no-favorites');

  I.amOnPage('/');
  I.seeElement('resto-card');
  const firstResto = locate('resto-card').first();
  const firstRestoId = await I.grabAttributeFrom(firstResto, 'id');
  I.click(firstResto);
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorites');
  I.seeElement('resto-card');

  const likedRestoId = await I.grabAttributeFrom('resto-card', 'id');
  assert.strictEqual(firstRestoId, likedRestoId);

  // unlike resto
  I.amOnPage('/#/favorites');
  I.seeElement('.restoItem');
  I.click('.restoItem');
  I.waitForElement('#likeButton', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorites');
  I.see('Nothing in here', '.no-favorites');
});
