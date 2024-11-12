const { determinarStatus } = require('../exibirStatus');
const { calcularMedia } = require('../calcularMedia');

// Mock da função calcularMedia 
jest.mock('../calcularMedia', () => ({
  calcularMedia: jest.fn(),
}));

describe('Função determinarStatus', () => {

  test('Deve retornar "Reprovado por média" para média menor que 4.0', () => {
    calcularMedia.mockReturnValue(3.5); 
    expect(determinarStatus(3, 4)).toBe("Reprovado por média");
  });

  test('Deve retornar "Aprovado por média" para média maior ou igual a 6.0', () => {
    calcularMedia.mockReturnValue(6.5); 
    expect(determinarStatus(6, 7)).toBe("Aprovado por média");
  });

  test('Deve retornar "Aguardando a final" para média entre 4.0 e 6.0', () => {
    calcularMedia.mockReturnValue(5.0); 
    expect(determinarStatus(5, 5)).toBe("Aguardando a final");
  });

});