/// <reference types="Cypress" />
describe("handling data from tables via webdriver uni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("calculate total age from users", () => {
    let userDetails = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        for (let i = 0; i < userDetails.length; i++) {
          //   cy.log(userDetails[i]);
          if (Number(userDetails[i])) {
            numb += Number(userDetails[i]);
          }
        }
        cy.log(numb);
        expect(numb).to.eq(322);
      });
  });
  it("validate age base on the last name ", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          //next se mueve a la celda siguente
          .next()
          .then((age) => {
            const userAge = age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });
});
