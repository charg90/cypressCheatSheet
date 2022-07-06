/// <reference types="Cypress"/>

describe("alerts and events validations", () => {
  it("Confirm js alerts contains the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button1").click();
    cy.on("window:alert", (str) => expect(str).to.equal("I am an alert box!"));
  });
  it("Validate js confirm alert box works correctly when clicking on the alert box", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4").click();
    cy.on("window:alert", (str) => true);
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it.only("Validate js confirm alert box works correctly when clicking on cancel", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });
  it.only("Validate js confirm alert box works correctly when clicking using STUB", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
/// asi se puede pasar un false en un alert con window confirm, con windows alert
/// no se puede hacer, por eso se usa windows confirm
