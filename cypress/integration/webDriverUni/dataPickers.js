/// <reference types="Cypress"/>

describe("TEst data Pickers via webdriveruniversity", () => {
  it("Select date from the data picker", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();

    // let date = new Date();
    // date.setDate(date.getDate()); // get current date
    // cy.log(date.getDate());

    // let date2 = new Date();
    // date.setDate(date.getDate() + 5); // get currente date + 5 days
    // cy.log(date2.getDate() + 5);

    let date = new Date();
    date.setDate(date.getDate() + 2);

    let year = date.getFullYear(); // get current year from
    let month = date.toLocaleString("default", { month: "long" });
    let day = date.getDate();
    cy.log(year, month, day);

    const selectMonthAndYear = () => {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(year)) {
            cy.get(".nex").first().click;
          }
          selectMonthAndYear();
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(month)) {
                // cy.get(".next").first().click;
              }
              selectMonthAndYear();
            });
        });
    };
    selectMonthAndYear();
  });
});
