const { determinarStatus } = require('../exibirStatus');
const { calcularMedia } = require('../calcularMedia');

// Mock da função calcularMedia 
jest.mock('../calcularMedia', () => ({
  calcularMedia: jest.fn(),
}));

describe('Suíte de testes para a função determinarStatus', () => {
  test('Deve retornar "Reprovado por média" para média inferior a 4.0', () => {
    calcularMedia.mockReturnValue(3.5); 
    expect(determinarStatus(3, 4)).toBe("Reprovado por média");
  });
  test('Deve retornar "Aguardando a final" para média igual a 4.0', () => {
    calcularMedia.mockReturnValue(4.0); 
    expect(determinarStatus(4, 4)).toBe("Aguardando a final");
  });
  test('Deve retornar "Aguardando a final" para média entre 4.0 e 6.0', () => {
    calcularMedia.mockReturnValue(5.5); 
    expect(determinarStatus(5, 6)).toBe("Aguardando a final");
  });
  test('Deve retornar "Aprovado por média" para média igual a 6.0', () => {
    calcularMedia.mockReturnValue(6.0); 
    expect(determinarStatus(6, 6)).toBe("Aprovado por média");
  });
  test('Deve retornar "Aprovado por média" para média superior a 6.0', () => {
    calcularMedia.mockReturnValue(7.5); 
    expect(determinarStatus(7, 8)).toBe("Aprovado por média");
  });
  test('Deve retornar "Reprovado por média" para média no limite inferior (0.0)', () => {
    calcularMedia.mockReturnValue(0.0); 
    expect(determinarStatus(0, 0)).toBe("Reprovado por média");
  });
});
