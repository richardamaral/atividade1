function calcularMedia(valores) {
    let soma = valores.reduce((acc, cur) => acc + cur, 0);
    return soma / valores.length;
}

let valores = [];

for (let i = 0; i < 2; i++) {
    let valor = parseFloat(prompt("Digite um valor: "));
    valores.push(valor);
}

let media = calcularMedia(valores);
console.log("Média dos valores:", media);
