class CheckoutPage{

  //Declaration of elements checkoutPage
  elements ={
    checkoutBtn : () => cy.xpath('//*[@id="checkout"]'),
    fillName: () => cy.xpath('//*[@id="first-name"]'),
    fillAp: () => cy.xpath('//*[@id="last-name"]'),
    fillPostalCode: () => cy.xpath('//*[@id="postal-code"]'),
    continueBtn: () => cy.xpath('//*[@id="continue"]'),
    cancelCheckout: () => cy.xpath('//*[@id="cancel"]'),
    paymentInformation: ()=> cy.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[1]'),
    priceTotal: ()=> cy.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[5]'),
    total: ()=> cy.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[5]'),
    finishCheckout: ()=> cy.xpath('//*[@id="finish"]'),
    confirmationShopping: ()=> cy.xpath('//*[@id="checkout_complete_container"]/h2'),
    backHome: ()=> cy.xpath('//*[@id="back-to-products"]')
  
  }

//events to apply to checkout elements
  checkoutProcess(name,ap,postalCode){
    cy.log("da click chechout")
    cy.wait(4000);
    this.elements.checkoutBtn().click();
    cy.wait(4000);
    this.elements.fillName().type(name);
    cy.wait(4000);
    this.elements.fillAp().type(ap);
    cy.wait(4000);
    this.elements.fillPostalCode().type(postalCode);
    cy.wait(4000);
    this.elements.continueBtn().click()

  }

//Cancel process checkout action 
  cancelCheckout(){
    this.elements.cancelCheckout().click();
  }

//Validate the resume of shopping
  validateResumeShopping(){
    this.elements.paymentInformation().should('contain.text','Payment Information')
    cy.wait(4000)
    this.elements.priceTotal().should('contain.text','Price Total')
    cy.wait(4000)
    this.elements.total().should('contain.text','Total')
    cy.wait(4000)

  }

//confirm the shopping
  ConfirmCheckout(){
    this.elements.finishCheckout().click();
    cy.wait(4000)
    this.elements.confirmationShopping().should('contain.text','Thank you for your order!')
    cy.wait(4000)
    this.elements.backHome().click();
  }

   
}

export default CheckoutPage
    
  