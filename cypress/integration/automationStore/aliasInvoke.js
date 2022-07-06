/// <reference types="Cypress"/>

describe("Alias and Invoke", () => {
  it("Validate specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href *= 'product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });
  it("validate products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("product");
    cy.get("@product").should("length", 16);
    cy.get("@product")
      .find(".productcart") /// find recorre el elemento buscando .product card
      .invoke("attr", "title")
      .should("include", "Add to Cart");
    //
  });
  it.only("Calculate total of normal and sales products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("product");
    // cy.get('@product').find('.oneprice').each(($el,index)=>{
    //     $el.text()
    // })
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("sale");
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("normalSale");

    let itemsTotal = 0;

    cy.get("@sale").then(($linkText) => {
      let items = $linkText.split("$");
      const finalSale = items
        .map((item) => Number(item))
        .reduce((acc, item) => acc + item);
      itemsTotal += finalSale;
      cy.log(finalSale);
    });
    cy.get("@normalSale")
      .then(($linkText) => {
        let itemsNormal = $linkText.split("$");
        const finalNormal = itemsNormal
          .map((item) => Number(item))
          .reduce((acc, item) => acc + item);
        itemsTotal += finalNormal;
        cy.log(finalNormal);
      })
      .then(() => {
        cy.log(itemsTotal);
        expect(itemsTotal).to.equal(648.5);
      });
  });
});
