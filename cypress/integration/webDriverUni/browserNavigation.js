/// <reference types="Cypress"/>

describe("Validate webDriverUni home page link", () => {
  it("Confirms link redirect to the correct pages", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "Contact-Us");
    cy.go("back");
    cy.reload();
    cy.go("forward");
    cy.url().should("include", "Contact-Us");
    cy.go("back");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.url().should("include", "Login-Portal");
    cy.go("back");
  });
  it.only("validate to do list url", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "To-Do-List/");
    cy.go("back");
  });
});
