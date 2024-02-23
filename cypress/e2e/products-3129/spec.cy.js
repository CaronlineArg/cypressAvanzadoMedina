
/// <reference types="cypress" />
//const constantes=require()
const directorioName = __dirname.replaceAll('\\', '/');
const module = directorioName.split(/[/]/)[2]
const scenarioName = directorioName.slice(directorioName.lastIndexOf('/') + 1).split('-').slice(0, -1).join('-');
const testCaseId = directorioName.split(/[-]/).pop();

import { OnlineShopPage } from "../../pages/onlineShopPage";  
import { fixturesProduct } from "./3129.json"



describe(`${scenarioName} - ${module} `, () => {
    const onlineShopPage = new OnlineShopPage();
    let data;
    before("Precondiciones", ()=>{
     
       
        cy.request({
            url:'https://pushing-it.onrender.com/api/login',
            method:"POST",
            body:{
             
                
                "username" : Cypress.env().usuario,
                "password" : Cypress.env().contraseña,
            
    
                }
           }).then((resp) => {
            window.localStorage.setItem("token",resp.body.token)
            window.localStorage.setItem("user",resp.body.user.username)
           
            
            cy.visit('')
        })
    
    });
    beforeEach("Precondiciones", ()=>{
     
        cy.fixture(`${module}/${testCaseId}.json`).then((loadedData) => {
            data = loadedData;
            data.producto = `${testCaseId.producto}-${testCaseId}`;
        });
});
    it('Deberia permitir al usuario crear  un producto', () => {
       
        cy.log(directorioName);
    
        cy.log('Verificar que exista, si existe eliminarlo');
        cy.log(`Crear el producto numero ${testCaseId.producto}`);
        onlineShopPage.goToOnlineShop();
        onlineShopPage.clickOnCreateProduct();
        cy.wrap(data).should('exist').then(() => {
          
            onlineShopPage.writeInputName(`${testCaseId}`);
            onlineShopPage.writePriceInput(data.productPrice);
            onlineShopPage.writeProductCardInput(data.productCardImgNumber);
            onlineShopPage.writeIDInput(data.productID);
            onlineShopPage.clickOnCreateProductInsideModal();
            cy.wait(10000)
            onlineShopPage.clickOnCloseModalButton();
            onlineShopPage.selectOptionSearchBar();
            onlineShopPage.writeSearchBarInput(`${data.productName}{enter}`);
            onlineShopPage.clickOnDeleteButton();
            onlineShopPage.clickOnDeleteModalButton();
            onlineShopPage.clickOnCloseModalButton();
            onlineShopPage.selectOptionSearchBar();
            onlineShopPage.writeSearchBarInput(`{enter}`);
            cy.wait(5000)
            onlineShopPage.ImageItemShouldntExist();
        });
    });
});
/*
 cy.request({
            method: "GET",
            url: `${Cypress.env().baseUrlAPI}/product/${testCaseId.product.id}`,
            failsOnStatusCode:false,
            headers: {
                Authorization: `Bearer ${Cypress.env().token}`
            }
        }).its('body.products.docs').each((product)=>{

            cy.request({
                method: "DELETE",
                url: `${Cypress.env().baseUrlAPI}/product/${product._id}`,
                failsOnStatusCode:false,
                headers: {
                    Authorization: `Bearer ${Cypress.env().token}`
                }
        })

         cy.request({
                url: `${Cypress.env()}.'https://pushing-it.onrender.com/api/product/${product.testCaseId}`,
                method: "DELETE",
                failsOnStatusCode:false,
                headers: {
                    Authorization: `Bearer ${Cypress.env().token}`
                
                }
           }).then((resp) => {
            window.localStorage.setItem("token",resp.body.token)
            window.localStorage.setItem("user",resp.body.user.username)

        })
         */