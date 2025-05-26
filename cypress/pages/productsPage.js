class ProductPage{

//Declaration of elements productPage POM
  elements ={
    sauceLabBackPack : () => cy.xpath('//*[@id="item_4_title_link"]/div'),
    addToChart: () => cy.xpath('//*[@id="add-to-cart"]'),
    removeChart: ()=> cy.xpath('//*[@id="remove"]'),
    backCatalog: ()=> cy.xpath('//*[@id="back-to-products"]'),
    sauceLabBikeLight: () => cy.xpath('//*[@id="item_0_title_link"]/div'),
    filterProducts:() => cy.xpath('//*[@id="header_container"]/div[2]/div/span/select'),
    filterOptionDesc: () => cy.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]'),
    filterOptionAsc: () => cy.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[1]')

  }

//method to validate the navigation
  navigateProducts(){
    this.elements.sauceLabBackPack().click();
    cy.wait(4000);
    this.elements.addToChart().click();
    cy.log('Add product');
    cy.wait(4000);
    this.elements.removeChart().click();
    cy.log('Remove product');
    this.elements.backCatalog().click();
    cy.wait(4000);
    this.elements.sauceLabBikeLight().click();
    cy.wait(4000);
    this.elements.backCatalog().click();
    cy.wait(4000);

  }

//method to filter products the navigation
  filterProductsNavigate(){
    this.elements.filterProducts().select('Name (Z to A)');
    cy.wait(4000);
    this.elements.filterProducts().select('Name (A to Z)');
    cy.wait(4000);
    this.elements.filterProducts().select('Price (low to high)');
    cy.wait(4000);
    this.elements.filterProducts().select('Price (high to low)');
  }

//add products
  addProduct(){
    this.elements.sauceLabBackPack().click();
    cy.wait(4000);
    this.elements.addToChart().click();
    cy.log('Add product');
    cy.wait(4000);
  }
   
}

export default ProductPage
    
  