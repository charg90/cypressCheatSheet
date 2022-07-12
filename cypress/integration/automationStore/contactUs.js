/// <reference types="Cypress"/>

describe("Test Contact US form automation Store web", () => {
  before(() => {
    cy.fixture("userDetails").as("user");
  });
  it("Shoulde able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$= 'contact']")
      .click()
      .then((item) => {
        cy.log(item.text());
      });

    // cy.xpath("//a[contains(@href,'contact')]").click();
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("bad bad bad");
    cy.get("button[title ='Submit']").click();
    // validar que  contenga el texto
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
  it.only("Validate properties of the contact us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Uses  cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name:");

    //JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name:");

      // Embedded commands (Clousures)
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
      });
    });
  });
});
