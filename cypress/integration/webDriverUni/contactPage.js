import HomePage_PO from "../../support/pageObjects/webDriverUni/Homepage_PO";
import contactPage_PO from "../../support/pageObjects/webDriverUni/contactPage";
/// <reference types="Cypress"/>
describe("Test Contact US from via WebdriverUni", () => {
  const contactPagePO = new contactPage_PO();

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
  });
  it("should be able to submit a successful submission contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "/Contact-Us/contactus.html");

    contactPagePO.contacFormSubmission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "hola",
      "h1",
      "Thank You for your Message!"
    );
  }),
    it("should not be able to submit a successful submission contact us form as all fields are required", () => {
      contactPagePO.contacFormSubmission(
        data.first_name,
        data.last_name,
        "s",
        "hello",
        "body",
        "Error: Invalid email address"
      );
    });
});
