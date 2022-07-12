/// Use npm cypress upload
/// <reference types="Cypress"/>

describe("Test File upload", () => {
  it("Upload file", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.fixture("006-little-beatle.png", "base64").then((fileContent) => {
      cy.get("#myFile").attachFile(
        {
          fileContent,
          fileName: "006-little-beatle.png",
          mimeType: "image/png",
        },
        {
          uploadType: "input",
        }
      );
    });
    cy.get("#submit-button").click();
  });
  it("Upload no file", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#submit-button").click();
  });
});
