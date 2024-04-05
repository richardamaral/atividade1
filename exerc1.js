function ordenarValores(valores) {
    return valores.sort((a, b) => a - b);
}

let valores = [];

for (let i = 0; i < 5; i++) {
    let valor = parseFloat(prompt("Digite um valor: "));
    valores.push(valor);
}

let valoresOrdenados = ordenarValores(valores);
console.log("Valores em ordem crescente:", valoresOrdenados);
