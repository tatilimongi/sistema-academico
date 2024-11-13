function lancarNotas(up1, up2) {
  if (typeof up1 !== 'number' || typeof up2 !== 'number') {
      throw new Error("Entradas devem ser numéricas");
  }

  if (up1 < 0 || up1 > 10) {
      throw new Error("Nota de 1UP inválida");
  }
  if (up2 < 0 || up2 > 10) {
      throw new Error("Nota de 2UP inválida");
  }

  if (up1.toFixed(1) !== up1.toString()) {
      throw new Error("Nota de 1UP inválida");
  }
  if (up2.toFixed(1) !== up2.toString()) {
      throw new Error("Nota de 2UP inválida");
  }

  return { up1, up2, mensagem: "Notas salvas com sucesso" };
}

module.exports = { lancarNotas };
