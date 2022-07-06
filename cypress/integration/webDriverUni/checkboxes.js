/// <reference types="Cypress"/>

describe("Validate checkboxes via webUni", () => {
  it("check and validate", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // validate checkbox
    //cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked")
    // cy.get("#checkboxes > :nth-child(1) > input").check().should("not.be.checked"); no tendria que estar check

    // improve code
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check().should("be.checked");
    cy.get("@option-1").uncheck().should("not.be.checked");

    //check multiple check boxes
    cy.get('input[type="checkbox"]')
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
