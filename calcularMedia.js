const {
    lancarNotas
} = require("../sistema-academico/lancamentoNotas")

function calcularMedia(up1, up2) {
    const notas = lancarNotas(up1, up2);
    const media = (notas.up1 + notas.up2) / 2;
    return parseFloat(media.toFixed(1));
}

module.exports = { calcularMedia };