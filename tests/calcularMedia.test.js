const { calcularMedia } = require("../calcularMedia");
const { lancarNotas } = require("../lancamentoNotas");

jest.mock("../lancamentoNotas", () => ({
  lancarNotas: jest.fn(),
}));

describe("Suíte de testes para a função calcularMedia", () => {
  test("Deve calcular a média corretamente para notas válidas de 1UP e 2UP", () => {
    lancarNotas.mockReturnValue({ up1: 7.5, up2: 8.2 });
    const resultado = calcularMedia(7.5, 8.2);
    expect(resultado).toBeCloseTo(7.9, 1);
  });
  test("Deve calcular a média corretamente para notas iguais de 1UP e 2UP", () => {
    lancarNotas.mockReturnValue({ up1: 5.0, up2: 5.0 });
    const resultado = calcularMedia(5.0, 5.0);
    expect(resultado).toBe(5.0);
  });
  test("Deve calcular a média corretamente para a nota mínima e máxima", () => {
    lancarNotas.mockReturnValue({ up1: 0.0, up2: 10.0 });
    const resultado = calcularMedia(0.0, 10.0);
    expect(resultado).toBe(5.0);
  });
  test("Deve calcular a média corretamente para a nota de 1UP no limite inferior", () => {
    lancarNotas.mockReturnValue({ up1: 0.0, up2: 7.0 });
    const resultado = calcularMedia(0.0, 7.0);
    expect(resultado).toBe(3.5);
  });
  test("Deve calcular a média corretamente para a nota de 2UP no limite superior", () => {
    lancarNotas.mockReturnValue({ up1: 8.0, up2: 10.0 });
    const resultado = calcularMedia(8.0, 10.0);
    expect(resultado).toBe(9.0);
  });
});
