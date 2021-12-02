const { expect, test } = require('@jest/globals');
const { suma, resta, multiplicacion, division } = require ('../calc')

describe ('Operaciones matematicas', () => {

    test('Suma', () => {
        expect(suma(2, 2)).toBe(4);
    })

    test('Resta', () => {
        expect(resta(2, 2)).toBe(0)
    })

    test('Multiplicacion', () => {
        expect(multiplicacion(2, 2)).toBe(4)
    })

    test('Division', () => {
        expect(division(2, 2)).toBe(1)
    })

})

describe ('isNan', () => {
    test('Suma con letras', () =>{
        expect(suma("a","a")).toBe(0)
    })
})