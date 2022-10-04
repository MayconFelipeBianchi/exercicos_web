let inputVPagar = document.querySelector('#inputVPagar');
let inputKG = document.querySelector('#inputKG');
let pago = document.querySelector('#pago');
let calculo = document.querySelector('#calculo');

function valorDoKG (){
let pagar = Number (inputVPagar.value);
let KG = Number (inputKG.value);
let soma = pagar * KG;
pago.textContent = Number (soma);
}
calculo.onclick = function () {
    valorDoKG();
}
