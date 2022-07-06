/// <reference types="Cypress"/>

describe("Intereact with dropdown list via webdriveruni", () => {
  it("Select specific values from a dropdown", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
    cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery");

    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");
    cy.get("#dropdowm-menu-3").select("css").contains("CSS");
  });
});
