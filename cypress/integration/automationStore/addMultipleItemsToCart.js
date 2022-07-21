/// <reference types="Cypress"/>

describe("add multples items to cart", () => {
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  }),
    beforeEach(() => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href *= 'product/category&path=']")
        .contains("Hair Care")
        .click();
    }),
    it("Add specified items to cart", () => {
      globalThis.data.productName.forEach((element) => {
        cy.addToCart(element);
      });
      cy.get(".dropdown-toggle > .fa").click();
    });
});
