const { lancarNotas } = require('../lancamentoNotas'); 

describe('Função lancarNotas', () => {
  test('Deve retornar um objeto com as notas lançadas', () => {
    // Testando se a função retorna as notas corretamente
    const notas = lancarNotas(8, 6);

    // Verificando se o objeto retornado tem os valores corretos da up1 e up2 
    expect(notas).toEqual({ up1: 8, up2: 6 });
  });

  test('Deve retornar notas numéricas', () => {
    // Verificando se as notas são numéricas
    const notas = lancarNotas(7, 5);
    expect(typeof notas.up1).toBe('number');
    expect(typeof notas.up2).toBe('number');
  });

  test('Deve lançar notas negativas', () => {
    // Testando a função com notas negativas
    const notas = lancarNotas(-5, -8);
    expect(notas).toEqual({ up1: -5, up2: -8 });
  });
});