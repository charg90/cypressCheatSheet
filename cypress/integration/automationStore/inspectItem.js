/// <reference types="Cypress"/>

describe("Test automation store using channing commands", () => {
  it("click on the first item header", () => {
    //cypress code
    cy.visit("https://automationteststore.com/");
    cy.get("a[title='Skinsheen Bronzer Stick']").click();
  });
  it.only("click on the first item by title", () => {
    //cypress code
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (item) {
        console.log("Selected the followin item" + item.text());
      });
  });
  it("click on the first item using index", () => {
    //cypress code
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
