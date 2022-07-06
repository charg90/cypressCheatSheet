/// <reference types="Cypress"/>

describe("Test Contact US from via WebdriverUni", () => {
  it("should be able to submit a successful submission contact us form", () => {
    //cypress code
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("JOhn");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("johndoe@hotmail.com");
    cy.get("textarea.feedback-input").type("hola");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  }),
    it("should not be able to submit a successful submission contact us form as all fields are required", () => {
      // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.visit("http://www.webdriveruniversity.com/");
      cy.get("#contact-us").click({ force: true });
      cy.get('[name="first_name"]').type("JOhn");
      cy.get('[name="email"]').type("johndoe@hotmail.com");
      cy.get("textarea.feedback-input").type("hola");
      cy.get('[type="submit"]').click();
      cy.get("body").contains("Error: all fields are required");
    });
});
