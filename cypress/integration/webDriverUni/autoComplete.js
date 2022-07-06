/// <reference types="Cypress"/>

describe("Verify autocomplete dropdown list via webdriver uni", () => {
  it("Selece specific product via autocomplete list", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *")
      .each(($items, index, $list) => {
        const product = $items.text();
        const productSelected = "Almond";

        if (product == productSelected) {
          $items.trigger("click");
          cy.get("#submit-button").click();
          cy.url().should("includes", productSelected);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get("#myInputautocomplete-list > *").each(($items) => {
          const product = $items.text();
          const productSelected = "Grapes";

          if (product == productSelected) {
            $items.trigger("click");
            cy.get("#submit-button").click();
            cy.url().should("includes", productSelected);
          }
        });
      });
  });
});
