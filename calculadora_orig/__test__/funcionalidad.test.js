const { init, limpiar } = require("../funcionalidad");
const fs = require("fs");
document.body.innerHTML = fs.readFileSync("./calculadora.html");

describe("Prueba para funcion init", () => {
  test("Init", () => {
    init();
  });
  test("evento uno", () => {
    limpiar();
    init();
    uno.onclick();
    expect(resultado.textContent).toBe("1");
  });
});
