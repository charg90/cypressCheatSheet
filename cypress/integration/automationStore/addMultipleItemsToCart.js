/// <reference types="Cypress"/>
import addMultipleItemsToCart from "./../../support/pageObjects/automatioStore/addMultipleItemsToCart";
import addHairCareToBasket_PO from "./../../support/pageObjects/automatioStore/addHairCareToBasket";
describe("add multples items to cart", () => {
  const multipleItemsToCart = new addMultipleItemsToCart();
  const addHairCareToBaskest = new addHairCareToBasket_PO();
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  }),
    beforeEach(() => {
      multipleItemsToCart.accessHomePage();
      multipleItemsToCart.clickhairCareLink();
    }),
    it("Add specified items to cart", () => {
      addHairCareToBaskest.addHairCareToBaskest();
    });
});
