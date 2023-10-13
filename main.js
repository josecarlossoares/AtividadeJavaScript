const readline = require('readline-sync')

function calc(valor1, valor2, op){
    let result;
        switch (op){
            case '+':
                result = valor1 + valor2
                break;
            case '-':
                result = valor1 - valor2
                break;
            case '*':
                result = valor1 * valor2
                break;
            case '/':
                result = valor1/valor2
                break;
        }
        return result;
}


let primeiroDado = readline.questionInt('Informe o primeiro valor: ')
let segundoDado = readline.questionInt('Informe o segundo valor: ')
let terceiroDado = readline.question('Digite o operador aritmetico do calculo. ')


let resposta = calc(primeiroDado, segundoDado, terceiroDado)
let resto = 0
if (terceiroDado == '/'){
    if( primeiroDado % segundoDado != 0){
        resto = primeiroDado % segundoDado
        console.log(`O resultado foi ${resposta} e o resto da divisão foi ${resto}`)
    }else{
        console.log(`O resultado da operação foi ${resposta}`);
    }
}