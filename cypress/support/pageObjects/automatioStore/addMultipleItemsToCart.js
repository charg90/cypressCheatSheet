class addMultipleItemsToCart {
  accessHomePage() {
    cy.visit("https://automationteststore.com/");
  }
  clickhairCareLink() {
    cy.get("a[href *= 'product/category&path=']").contains("Hair Care").click();
  }
}

export default addMultipleItemsToCart;
