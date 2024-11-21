leardescribe('Calculadora de Cadenas', () => {
    beforeEach(() => {
        // Cargar la página antes de cada prueba
        cy.visit('index.html');
    });

    it('Debe mostrar 0 si la entrada está vacía', () => {
        cy.get('#input-cadena').clear(); // Limpiar el campo
        cy.get('#btn-calcular').click(); // Clic en el botón
        cy.get('#resultado').should('contain.text', 'Resultado: 0'); // Verificar resultado
    });
    

    it('Debe sumar números separados por comas', () => {
        cy.get('#input-cadena').clear().type('1,2,3');
        cy.get('#btn-calcular').click();
        cy.get('#resultado').should('contain.text', 'Resultado: 6');
    });

    it('Debe sumar números separados por guiones', () => {
        cy.get('#input-cadena').clear().type('4-5-6');
        cy.get('#btn-calcular').click();
        cy.get('#resultado').should('contain.text', 'Resultado: 15');
    });

    it('Debe manejar delimitadores personalizados', () => {
        cy.get('#input-cadena').clear().type('//[;]\n7;8;9');
        cy.get('#btn-calcular').click();
        cy.get('#resultado').should('contain.text', 'Resultado: 24');
    });

    it('Debe ignorar números mayores a 1000', () => {
        cy.get('#input-cadena').clear().type('1000,2,1001');
        cy.get('#btn-calcular').click();
        cy.get('#resultado').should('contain.text', 'Resultado: 1002');
    });

    it('Debe manejar múltiples delimitadores personalizados', () => {
        cy.get('#input-cadena').clear().type('//[;][%]\n10;20%30');
        cy.get('#btn-calcular').click();
        cy.get('#resultado').should('contain.text', 'Resultado: 60');
    });

    // it('Debe manejar errores si la entrada es inválida', () => {
    //     cy.get('#input-cadena').clear().type('abc'); // Ingresar un valor inválido
    //     cy.get('#btn-calcular').click(); // Clic en el botón
    //     cy.get('#resultado').should('contain.text', 'Error: Valor inválido: abc'); // Verificar el error
    // });    

});
