const {
    somar, calcularMedia
} = require("../sistema-academico/calculoMedia");

describe("Suíte de testes para a função calcularMédia", ()=>{
    test("Deveria retornar um erro em caso de valor informado incorretamente", () => {
        expect(() => calcularMedia("A", "B")).toThrow("O parâmetro informado deve ser um número");
    });

    test("Deveria retornar um erro em caso do número passado for nulo", () => {
        expect(() => calcularMedia(null, null)).toThrow("Devem ser informados os números de cada nota!");
    });

    test("Deveria retornar um erro caso o parâmetro da UP1 estiver fora do escopo de 0 a 10", () => {
        expect(() => calcularMedia(11, 5)).toThrow("O valor deve estar entre 0 e 10");
    });

    test("Deveria retornar um erro caso o parâmetro da UP2 estiver fora do escopo de 0 a 10", () => {
        expect(() => calcularMedia(7, -1)).toThrow("O valor deve estar entre 0 e 10");
    });
    test("Deveria retornar o valor 'aprovado' quando a média for maior ou igual a 6", ()=>{
        expect(calcularMedia(6, 6)).toBe("Aprovado por média")
    })
    test("Deveria retornar o valor 'reprovado' quando a média for maior ou igual a 6", ()=>{
        expect(calcularMedia(3, 1)).toBe("Reprovado por média")
    })
    test("Deveria retornar o valor 'reprovado' quando a média for maior ou igual a 6", ()=>{
        expect(calcularMedia(3, 1)).toBe("Reprovado por média")
    })
    test("Deveria retornar o valor 'reprovado' quando a média for maior ou igual a 6", ()=>{
        const result = calcularMedia(5, 5);
        const notaNecessariaFinal = 12.0 - 5;
        expect(calcularMedia(5, 5)).toBe("Aguardando a final. Nota necessária: "+notaNecessariaFinal)
    })     
})