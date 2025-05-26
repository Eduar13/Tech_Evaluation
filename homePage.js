class HomePage{

  elements ={
    sauceLabBackPack : () => cy.xpath('//*[@id="item_4_title_link"]/div'),
    addToChart: () => cy.xpath('//*[@id="add-to-cart"]'),
    removeChart: ()=> cy.xpath('//*[@id="remove"]')


  }

  navigateProducts(){
    this.elements.sauceLabBackPack().click(),
    cy.wait(4000)
    this.elements.addToChart().click()
    cy.log('Add product')
    cy.wait(4000) 
    this.elements.removeChart().click()
    cy.log('Remove product')
    
   
  }
   
}

export default HomePage
    
  