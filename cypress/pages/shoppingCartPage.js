class ShoppingCartPage{

//Declaration of elements shoppingPage POM
  elements ={
    cartOption : () => cy.xpath('//*[@id="shopping_cart_container"]/a'),
    returnShopping: () => cy.xpath('//*[@id="continue-shopping"]'),

  }

//see the products in cartShopping
  showCart(){
    cy.wait(4000);
    this.elements.cartOption().click();
    cy.wait(4000);
    this.elements.returnShopping().click();

  }

//see the products in cartShopping without return to catalog
  goToCart(){
    cy.wait(4000);
    this.elements.cartOption().click();
  }

   
}

export default ShoppingCartPage
    
  