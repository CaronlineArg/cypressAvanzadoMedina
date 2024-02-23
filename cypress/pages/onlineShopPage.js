export class OnlineShopPage {
    constructor(){
       
        this.closeAddToCartModalButton="#closeModal";
        this.goToShoppingCartButton="#goShoppingCart";
        this.goToOnlineShopLink='#onlineshoplink';
        this.createProductButton='[data-cy=add-product]';
        this.productNameInput='[data-cy=productName]';
        this.productPriceInput='[data-cy=productPrice]';
        this.productCardInput='[data-cy=productCard]';
        this.productIDInput='[data-cy=productID]';
        this.createProductButtonInsideModal='[data-cy=createProduct]';
        this.searchBarInput='[data-cy=search-bar]';
        this.menuSelect='[data-cy=search-type]';
        this.deleteButton='[data-cy^=delete-]';
        this.deleteModalButton='#saveEdit';
        this.closeModalButton='[data-cy="closeModal"]';
        this.modal='[role="dialog"]';
        this.imageItem='img[src="https://ca.frankandoak.com/cdn/shop/files/2110292-017.8783_1200x.jpg?v=16922093293129"]';
        this.item='[data-cy=name]';    
    }   
    
    goToOnlineShop(){
        cy.get(this.goToOnlineShopLink).click();
    }
    clickOnCreateProduct(){
        cy.get(this.createProductButton).click();
    }
    writeInputName(productName){
        cy.get(this.productNameInput).type(productName)
    }
    writePriceInput(productPrice){
        cy.get(this.productPriceInput).type(productPrice)
    }
    writeProductCardInput(productCardImgNumber){
        cy.get(this.productCardInput).type(productCardImgNumber)
    }
    writeIDInput(IDNumber){
        cy.get(this.productCardInput).type(IDNumber)
    }
    clickOnCreateProductInsideModal(){
        cy.get(this.createProductButtonInsideModal).click();
    }
    selectOptionSearchBar(){
        cy.get(this.menuSelect).select('id');
    }
    
    writeSearchBarInput(productName){
        cy.get(this.searchBarInput).type(productName)
    }
    clickOnDeleteButton(){
        cy.get( this.deleteButton).eq(1).click({ force: true });
       
    }
    clickOnDeleteModalButton(){
    cy.get(this.deleteModalButton).click();}
    clickOnCloseModalButton(){
      
        cy.get(this.closeModalButton).click();
          
        
    }

    clickOnModalDeleteButton(){
        cy.get(this.deleteModalButton).click( );
    }
    clickOnCloseModalButton(){
        cy.wait(15000)
        cy.get(this.modal).should('be.visible');
        cy.get(this.closeModalButton).click({ force: true });
        
    }

    addToCartProductButtonClick(productName){
        cy.get(`button[value="${productName}"]`).click();
    }
    ImageItemShouldntExist(){
        
        cy.get(this.item, { timeout: 10000 }).should('not.exist');
    }

    closeAddToCartModalButtonClick(){
        cy.get(this.closeAddToCartModalButton).click();
  
    }
    goToShoppingCartButtonClick(){
        cy.get(this.goToShoppingCartButton).click();
         
    }
   
}