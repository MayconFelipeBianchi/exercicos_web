let valor1 = document.querySelector('#valor1');
let valor = document.querySelector('#valor');
let calculo = document.querySelector('#calculo');

function valores(n) {
        if (n% 2 === 0) {
            alert("ERRO")
        } else {
            alert("impar")
        }
    }
calculo.onclick = function () {
    valores();
}

