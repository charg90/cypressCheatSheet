/// <reference types="Cypress"/>

describe("Validate Radio Buttons via webUni", () => {
  before(function () {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("check and validate Radio Buttons", () => {
    //cypress code
    // cy.visit("http://www.webdriveruniversity.com/");
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("removeAttr", "target")
    //   .click({ force: true });

    cy.get("#radio-buttons").find('[type="radio"]').as("radioButtons");
    cy.get("@radioButtons").first().check(); // elegir el primero
    cy.get("@radioButtons").eq(1).check(); // elegir el 2 en el index
  });
  it("Radio buttons with disables", () => {
    // cy.visit("http://www.webdriveruniversity.com/");
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("removeAttr", "target")
    //   .click({ force: true });

    cy.get('[value="lettuce"]').should("not.be.checked");
    cy.get('[value="pumpkin"]').should("be.checked");

    cy.get('[value="lettuce"]').check();
    cy.get('[value="lettuce"]').should("be.checked");
    cy.get('[value="pumpkin"]').should("not.be.checked");

    cy.get('[value="cabbage"]').should("be.disabled");
    //
    //
  });
});
