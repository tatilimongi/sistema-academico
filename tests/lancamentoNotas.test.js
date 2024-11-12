const { lancarNotas } = require("../lancamentoNotas");

describe("Suíte de testes para a função de lancarNotas", () => {
  test("Notas válidas da UP1 e UP2", () => {
    expect(lancarNotas(7.5, 8.2)).toEqual({ up1: 7.5, up2: 8.2 });
  });
  test("Nota da UP1 fora do intervalo", () => {
    expect(() => lancarNotas(-1.0, 8.2)).toThrow("Nota da UP1 inválida");
  });
  test("Nota da UP2 fora do intervalo", () => {
    expect(() => lancarNotas(7.5, 12.0)).toThrow("Nota da UP2 inválida");
  });
  test("Nota da UP1 com mais de uma casa decimal", () => {
    expect(() => lancarNotas(7.567, 8.2)).toThrow("Nota da UP1 inválida");
  });
  test("Nota da UP2 com mais de uma casa decimal", () => {
    expect(() => lancarNotas(7.5, 8.256)).toThrow("Nota da UP2 inválida");
  });
  test("Entradas não numéricas", () => {
    expect(() => lancarNotas("sete", 8.2)).toThrow("Entradas devem ser numéricas");
  });
});
