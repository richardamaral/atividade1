function verificarPar(valor) {
    return valor % 2 === 0;
}

let valor = parseInt(prompt("Digite um valor: "));

if (verificarPar(valor)) {
    console.log("O valor é par.");
} else {
    console.log("O valor não é par.");
}
