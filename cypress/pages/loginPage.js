class loginPage{

//Declaration of elements loginPage POM
  elements ={
    userNameImput : () => cy.get("#user-name"),

    passUserImput : () => cy.get("#password"),

    btnLogin : () => cy.get("#login-button")

  }

//set user in login
  enterUser(userName){
    this.elements.userNameImput().type(userName);
  }
//set pass in login
  enterPass(passUser){
    this.elements.passUserImput().type(passUser);
  }

//confirm login
  submit(){
    this.elements.btnLogin().click();
  }
  
}

export default loginPage
    
  