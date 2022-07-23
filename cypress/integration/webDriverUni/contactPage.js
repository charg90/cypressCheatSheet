import HomePage_PO from "../../support/pageObjects/webDriverUni/Homepage_PO";
/// <reference types="Cypress"/>
describe("Test Contact US from via WebdriverUni", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      // this.data = data;
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    const homePage_PO = new HomePage_PO();
    homePage_PO.visitHomePage();
    homePage_PO.click_ContactUs_Button();
    // cy.visit("/");
    // // cy.visit(Cypress.env("webDriverUni_homePage"+ "contatus")) usar url dinamicas
    // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  });
  it.only("should be able to submit a successful submission contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "/Contact-Us/contactus.html");
    cy.webDriverUni_ContactFormSubmission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "hola",
      "h1",
      "Thank You for your Message!"
    );
  }),
    it("should not be able to submit a successful submission contact us form as all fields are required", () => {
      cy.get('[name="first_name"]').type(data.first_name);
      cy.get('[name="email"]').type(data.email);
      cy.get("textarea.feedback-input").type(data.body);
      cy.get('[type="submit"]').click();
      cy.get("body").contains("Error: all fields are required");
    });
});
