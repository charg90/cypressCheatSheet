class addHairCareToBaskest_PO {
  addHairCareToBaskest() {
    globalThis.data.productName.forEach((element) => {
      cy.addToCart(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  }
}

export default addHairCareToBaskest_PO;
