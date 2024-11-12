const { calcularMedia } = require("../sistema-academico/calcularMedia");

function determinarStatus(up1, up2){
    const media = calcularMedia(up1, up2);
    if (media < 4.0){
        return "Reprovado por média"
    }
    else if (media >= 6.0){
        return "Aprovado por media";
    }
    else{
        return "Aguadando a final"
    }
}

module.exports = { determinarStatus }