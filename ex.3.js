let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let valorMaior = document.querySelector('#valorMaior');
let calculo = document.querySelector('#calculo');

function valores (){
    let valorUm = Number(valor1.value);
    let valorDois = Number(valor2.value);
    if (valorUm > valorDois){
        valorMaior.textContent = valorUm
    }else {
        valorMaior.textContent = valorDois
    }
}
calculo.onclick = function () {
    valores();
}