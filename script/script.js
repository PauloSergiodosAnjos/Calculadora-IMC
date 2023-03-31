function calcImc (peso, altura) {
    return peso / (altura ** 2);
}

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    resultImc(calcImc(peso, altura).toFixed(2));
    for (let i = 0; i < 1; i++) {
        const imc = calcImc(peso, altura);
        condicoesImc(frase(imc));
    }
    });

function resultImc (msg) {
    const resultado = document.querySelector('#imc');
    resultado.innerHTML = msg;
}

function condicoesImc (msg) {
    const mensagem = document.querySelector('#frase');
    mensagem.innerHTML = msg;
}

function frase (imc) {
    if (imc < 18.5) {
        return 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Normal';
    }  else if (imc >= 25.0 && imc <= 29.9) {            
        return 'Sobrepeso';                              
    } else if (imc >= 30.0 && imc <= 39.9) {
        return 'Obesidade';
    } else {
        return 'Obesidade grave';
    }
}


























