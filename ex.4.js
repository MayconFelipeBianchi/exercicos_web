let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let valor3 = document.querySelector('#valor3');
let valor4 = document.querySelector('#valor4');
let valorMenor = document.querySelector('#valorMenor');
let calculo = document.querySelector('#calculo');

function valores (){
    let valorUm = Number(valor1.value);
    let valorDois = Number(valor2.value);
    let valorTres = Number(valor3.value);
    let valorQuatro = Number(valor4.value);
    if (valorUm < valorDois){
        valorMenor.textContent = valorUm
    }else if (valorUm < valorTres){
            valorMenor.textContent = valorUm
    }else if (valorUm < valorQuatro){
        valorMenor.textContent = valorUm
}else if (valorDois < valorTres){
    valorMenor.textContent = valorDois
}else if (valorDois < valorQuatro){
    valorMenor.textContent = valorDois
}else if (valorTres < valorQuatro){
    valorMenor.textContent = valorDois
}
}
calculo.onclick = function () {
    valores();
}