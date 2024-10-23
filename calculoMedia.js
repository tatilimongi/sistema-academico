function calcularMedia(up1, up2) {
    if (up1 === null || up2 === null) {
        throw new Error("Devem ser informados os números de cada nota!");
    }
    
    if (typeof up1 !== "number" || typeof up2 !== "number") {
        throw new Error("O parâmetro informado deve ser um número");
    }
    
    if (up1 < 0 || up1 > 10 || up2 < 0 || up2 > 10) {
        throw new Error("O valor deve estar entre 0 e 10");
    }
    
    let media = (up1 + up2) / 2;
    
    if (media >= 6) {
        return "Aprovado por média";
    } else if (media >= 4 && media < 6) {
        let notaNecessariaFinal = 12.0 - media;
        return "Aguardando a final. Nota necessária: " + notaNecessariaFinal;
    } else {
        return "Reprovado por média";
    }
}

module.exports = { calcularMedia };
