function calcularQuadrado(valores) {
    return valores.map(valor => valor ** 2);
}

let valores = [];

for (let i = 0; i < 3; i++) {
    let valor = parseFloat(prompt("Digite um valor: "));
    valores.push(valor);
}

let quadrados = calcularQuadrado(valores);
console.log("Quadrados dos valores:", quadrados);
