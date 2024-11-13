const { lancarNotas } = require("../lancamentoNotas");

test('Notas válidas', () => {
    const resultado = lancarNotas(7.5, 8.2);
    expect(resultado).toEqual({ up1: 7.5, up2: 8.2, mensagem: "Notas salvas com sucesso" });
});

test('Nota de 1UP fora do intervalo', () => {
    expect(() => lancarNotas(-1.0, 8.2)).toThrow('Nota de 1UP inválida');
});

test('Nota de 2UP fora do intervalo', () => {
    expect(() => lancarNotas(7.5, 12.0)).toThrow('Nota de 2UP inválida');
});

test('Nota de 1UP com mais de uma casa decimal', () => {
    expect(() => lancarNotas(7.567, 8.2)).toThrow('Nota de 1UP inválida');
});

test('Nota de 2UP com mais de uma casa decimal', () => {
    expect(() => lancarNotas(7.5, 8.256)).toThrow('Nota de 2UP inválida');
});

test('Entradas não numéricas', () => {
    expect(() => lancarNotas('sete', 8.2)).toThrow('Entradas devem ser numéricas');
});
