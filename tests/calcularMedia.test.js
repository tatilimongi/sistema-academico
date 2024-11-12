const { calcularMedia } = require('../calcularMedia'); 

describe('Função calcularMedia', () => {

  test('Deve calcular a média de duas notas inteiras', () => {
    expect(calcularMedia(8, 6)).toBe(7.0);
    expect(calcularMedia(10, 5)).toBe(7.5);
    expect(calcularMedia(4, 4)).toBe(4.0);
  });

  test('Deve calcular a média de duas notas decimais', () => {
    expect(calcularMedia(7.5, 8.3)).toBe(7.9);
    expect(calcularMedia(9.6, 8.4)).toBe(9.0);
  });

  test('Deve calcular a média de notas nos limites 0 e 10', () => {
    expect(calcularMedia(0, 10)).toBe(5.0);
    expect(calcularMedia(10, 10)).toBe(10.0);
    expect(calcularMedia(0, 0)).toBe(0.0);
  });

});