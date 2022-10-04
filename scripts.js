let inputVPagar = document.querySelector('#inputVPagar');
let inputDadoPeloCliente = document.querySelector('#inputDadoPeloCliente');
let calculo = document.querySelector('#calculo');
let Troco = document.querySelector('#Troco');

function salvarValores() {
    let pagar = Number(inputVPagar.value);
    let Cliente = Number(inputDadoPeloCliente.value);
    let soma = pagar - Cliente;
    Troco.textContent = Number(soma);
}
calculo.onclick = function () {
    salvarValores();
}
