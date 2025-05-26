import loginPage from "../pages/loginPage"
import ProductPage from "../pages/productsPage"


//Spec to validate flow products
describe('Product Specs', () => {

  const login = new loginPage()
  const product = new ProductPage()

  let signUpData 

  before(() => {
    cy.fixture('userSuccess').then((data) => {
    signUpData = data;
    })
  })

//Case to validate detail of product
  it('should navigate and filter of product', () => { 
      cy.visit(Cypress.env('baseUrl'))
      login.enterUser(signUpData.userSuccess)
      login.enterPass(signUpData.pass)
      login.submit()
      product.navigateProducts()
      cy.log('Filtro de productos')
      product.filterProductsNavigate()
  
  })

  //Case only for display in detail report of execution
  it.skip('should filter succesfull of product', () => {
    cy.visit('https://www.saucedemo.com/inventory.html')
    product.filterProductsNavigate()
  
  
  })

    
})