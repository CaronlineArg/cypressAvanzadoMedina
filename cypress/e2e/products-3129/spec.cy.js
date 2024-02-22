const directorioName = __dirname.replaceAll('\\', '/');
const module = directorioName.split(/[/]/)[2]
const scenarioName = directorioName.slice(directorioName.lastIndexOf('/') + 1).split('-').slice(0, -1).join('-');
const testCaseId = directorioName.split(/[-]/).pop();

describe(`${scenarioName} - ${module} `, () => {

    it('Deberia permitir al usuario crear  un producto', () => {
        cy.fixture(`${module}/3129.json`).then(data=>{
            
            data.producto=`${'3129'.producto}-${testCaseId}`
        })
        cy.log(directorioName);
        cy.log('Verificar que exista, si existe eliminarlo');
        cy.log(`Crear el producto numero ${'3129'.producto}`);
    });
});