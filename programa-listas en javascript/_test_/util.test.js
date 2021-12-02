const { generateText, validateInput, createElement } = require('../util.js');

describe('Pruebas de salida de datos', () => {
    test('Salida con datos', () =>{
        const text = generateText('Daniel',30);
        expect(text).toBe('Daniel (30 years old)');
    });
      
    test('Salida con datos vacios', () =>{
        const text = generateText('',null);
        expect(text).toBe(' (null years old)');    
    });
    
    test('Salida sin datos', () =>{
        const text = generateText();
        expect(text).toBe('undefined (undefined years old)');    
    });
});

describe('DOM', () => {
    test('Create element', () => {
        expect(createElement('h1', "Hola mundo", 'encabezado')).toBe("")
    });
});

describe('Valdacion de input', () => {
    test('validacion', () => {
        expect(validateInput("Hola mundo", true, false)).toBeTruthy()
    })

    test('validacion 2', () => {
        expect(validateInput("", true, false)).toBeFalsy()
    })

    test('validacion 3', () => {
        expect(validateInput(" ", true, false)).toBeFalsy()
    })

    test('validacion 4', () => {
        expect(validateInput("aa", false, true)).toBeFalsy()
    })
})