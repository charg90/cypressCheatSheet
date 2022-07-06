/// <reference types="Cypress"/>

describe("mouse Action", () => {
  it("Differents mouse actions", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Should be able to drag a drop a draggable item", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#draggable").trigger("mousedown", { which: 1 }); /// se hace click en el centro del boton draggable
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true }); ///llevar el elemento draggable a  donde se quiere
  });
  it("Should do double click in element", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#double-click").dblclick();
  });
  it("Click and hold and Assertions", () => {
    //cuando se clickea sobre el elemento cambia de color al manternerlo
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($el) => {
        expect($el).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
