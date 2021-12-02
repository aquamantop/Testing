const fs = require("fs");
document.body.innerHTML = fs.readFileSync('./calculadora.html');

const { init, limpiar, resetear, resolver } = require('../funcionalidad');

describe('Pruebas para init',() => {

    test('Init',() => {
        init();
    });
    
    test('Evento uno', () => {
        limpiar();
        init();
        uno.onclick();
        expect(resultado.textContent).toBe("1");
    })

})

describe('Pruebas para limpiar', () => {

    test('Limpiar', () => {
        limpiar();
    })

    test('Limpiar 2', () => {
        uno.onclick();
        limpiar();
        expect(resultado.textContent).toBe("")
    })
    

})

describe('Pruebas para resetear', () => {

    test('Resetear', () => {
        resetear();
    })

    test('Resetear 2', () => {
        uno.onclick();
        resetear();
        expect(resultado.textContent).toBe("")
    })

})

describe('Pruebas para resolver', () => {

    test('Resolver', () => {
        resolver();
    })

    test('Resolver 2', () => {
        uno.onclick();
        dos.onclick();
        
        resolver();
    })

})