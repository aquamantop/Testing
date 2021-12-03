const { init, limpiar, resolver, resetear} = require("../funcionalidad");
const fs = require("fs");
document.body.innerHTML = fs.readFileSync("./calculadora.html");

describe("Prueba para funcion init", () => {
  test("Init", () => {
    init();
  });
  test("Resetear funcion", () => {
    limpiar();
    init();
    uno.onclick();
    expect(resultado.textContent).toBe("1");
    resetear();
    expect(resultado.textContent).toBe("");
  });  
  test("Resetear boton", () => {
    limpiar();
    init();
    siete.onclick();
    expect(resultado.textContent).toBe("7");
    reset.onclick();
    expect(resultado.textContent).toBe("");
  });
  test("evento uno", () => {
    limpiar();
    init();
    uno.onclick();
    expect(resultado.textContent).toBe("1");
  });
  test("evento nuevo", () => {
    limpiar();
    init();
    nueve.onclick();
    expect(resultado.textContent).toBe("9");
  });
  test("evento cero", () => {
    limpiar();
    init();
    cero.onclick();
    expect(resultado.textContent).toBe("0");
  });
  test("suma de 2 numeros", () => {
    limpiar();
    init();
    uno.onclick();
    suma.onclick();
    dos.onclick();
    igual.onclick();
    expect(resultado.textContent).toBe("3");
  });
  test("resta de 2 numeros", () => {
    limpiar();
    init();
    cinco.onclick();
    resta.onclick();
    uno.onclick();
    igual.onclick();
    expect(resultado.textContent).toBe("4");
  });
  test("multiplicacion de 2 numeros", () => {
    limpiar();
    init();
    tres.onclick();
    multiplicacion.onclick();
    seis.onclick();
    igual.onclick();
    expect(resultado.textContent).toBe("18");
  });
  test("division de 2 numeros", () => {
    limpiar();
    init();
    ocho.onclick();
    division.onclick();
    cuatro.onclick();
    igual.onclick();
    expect(resultado.textContent).toBe("2");
  });
});
