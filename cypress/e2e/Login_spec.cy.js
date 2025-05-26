import loginPage from "../pages/loginPage"
import ProductsPage from "../pages/productsPage"

//Case to validate flows login
describe('Login Specs', () => {

  const login = new loginPage()
  const product = new ProductsPage()
//Variable to use to read data from a valid user's json file
  let signUpData 
  before(() => {
    cy.fixture('userSuccess').then((data) => {
    signUpData = data;
    })
  })

//Variable to use to read data from a valid user's locked json file
  let signUpDataFail 
    before(() => {
     cy.fixture('userLocked').then((data) => {
      signUpDataFail = data;
    })
  })
//Case to validate login successfull
  it('should show succesfull login to home page', () => {
    cy.visit(Cypress.env('baseUrl'))
    login.enterUser(signUpData.userSuccess)
    login.enterPass(signUpData.pass)
    login.submit()
    // assert to validate that after to logging is displayed the product page
    cy.xpath('//*[@id="header_container"]/div[2]/span').should('contain.text','Products')
    cy.log('Login susccefull')
  
  })

//Case to validate login fail by user locked
  it('should login fail by user locked', () => {
    cy.visit(Cypress.env('baseUrl'))
    login.enterUser(signUpDataFail.userFail)
    login.enterPass(signUpDataFail.pass)
    login.submit()
    // assert to validate user locked
    cy.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3').should('contain.text','Sorry, this user has been locked out.')
    
  
  })

//Case for validate that username field is mandatory
  it('should login request username field', () =>{
    cy.visit(Cypress.env('baseUrl'))
    login.submit()
    cy.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3').should('contain.text','Username is required')
  })

//Case for validate that password field is mandatory
  it('should login request pass field', () =>{
    cy.visit(Cypress.env('baseUrl'))
    login.enterUser(signUpData.userSuccess)
    login.submit()
    cy.xpath('//*[@id="login_button_container"]/div/form/div[3]').should('contain.text','Password is required')
  })
   
  
})