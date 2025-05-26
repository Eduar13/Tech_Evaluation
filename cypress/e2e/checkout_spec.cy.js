import loginPage from "../pages/loginPage"
import ShoppingCartPage from "../pages/shoppingCartPage"
import CheckoutPage from "../pages/checkoutPage"
import ProductPage from "../pages/productsPage"


//Case to validate flows checkout
describe('Checkout Specs', () => {

  const login = new loginPage();
  const shopping = new ShoppingCartPage();
  const checkout = new CheckoutPage();
  const products = new ProductPage();


  let signUpData;
  before(() => {
    cy.fixture('userSuccess').then((data) => {
    signUpData = data;
    })
  })

 //Varaible to read json file of clients informatio 
  let checkoutUpData;
  before(() => {
    cy.fixture('informationClient').then((data) => {
    checkoutUpData = data;
    })
  })

//Case to validate to show the cartShopping
  it('should go to the cartShopping', () => { 
      cy.visit(Cypress.env('baseUrl'));
      login.enterUser(signUpData.userSuccess);
      login.enterPass(signUpData.pass);
      login.submit();
      products.addProduct();
      shopping.showCart();
  
  })

  //Case to validate checkout proccess
  it('should start process checkout', () => {
      cy.visit(Cypress.env('baseUrl'));
      login.enterUser(signUpData.userSuccess);
      login.enterPass(signUpData.pass);
      login.submit();
      products.addProduct();
      shopping.goToCart();
      //send data of client of json file
      checkout.checkoutProcess(checkoutUpData.name,checkoutUpData.ap,checkoutUpData.postalCode);
      checkout.validateResumeShopping();
      checkout.ConfirmCheckout();
  
  })

//Case to validate of cancelation of checkout process
  it('should cancel process checkout', () => {
      cy.visit(Cypress.env('baseUrl'));
      login.enterUser(signUpData.userSuccess);
      login.enterPass(signUpData.pass);
      login.submit();
      //function add product 
      products.addProduct();
      //function to see cartShopping 
      shopping.goToCart();
      //send data of client of json file
      checkout.checkoutProcess(checkoutUpData.name,checkoutUpData.ap,checkoutUpData.postalCode);
      checkout.cancelCheckout()
  
  })

    
})