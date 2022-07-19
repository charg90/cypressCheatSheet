/// <reference types="Cypress"/>

describe("itarated over elements", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href *= 'product/category&path=']").contains("Hair Care").click();
  });
  it("Log infomartion of all hair Products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("index:" + index + ":" + $el.text());
    });
  });
  it("Add specific product to basket", () => {
    cy.selectProduct("Curl to straight Shampoo");
  });
  it("Add another specific product to basket", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
  it("Add another specific product to basket", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
