// 02-funcoes.js

/* Formas tradicionais */

/* Sintaxe anônima associada à variável/constante
Obs.: cuidado com a ordem, já que nesta sintaxe a função PRIMEIRO precisa ser declarada para somente DEPOIS ser chamada/executada. */
const exemplo1 = function(){
    console.log("Função anônima!")
}

exemplo1()

/* Sintaxe declarada/nomeada
Obs.: nesta sintaxe, Você pode chamar a função antes ou depois de declará-la. Portanto, a ordem não importa. */
function exemplo2(){
    console.log("Função nomeada!")
}

exemplo2()

/* Exercícios
1) Crie uma função (qualquer sintaxe) que receba dois valores numéricos, calcule a diferença entre eles e retorne o resultado.

2) Chame esta função duas vezes passando valores diferentes e guardando-os em variáveis de escopo global.

3) Mostre os valores processados pela função no terminal
*/

// Arrow Function simplificada (sem chaves, return implicito)
const exercicio = (valor1,valor2) => Math.abs(valor1 - valor2)

let resultado1 = exercicio(10,5)
let resultado2 = exercicio(10,20)
let resultado3 = exercicio(66,120)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)

/* Sintaxe Arrow Function */
const exemplo3 = () => {
    console.log("Arrow Function!")
}

exemplo3()

//const saudacao = (cliente) => {
 //   console.log("olá "+cliente)
// }

// Omitir os parênteses do parâmetro (SOMENTE QUANDO FOR 1)

//const saudacao = cliente => {
//    console.log("olá "+cliente)
// }

// Omitir as {} (SOMENTE QUANDO FOR UMA ÚNICA INSTRUÇÃO)
const saudacao = cliente => console.log("Olá "+cliente)
saudacao("Fulano")
saudacao("Beltrano")

// Arrow Function com retorno IMPLÍCITO
const calculaMetade = valor => valor / 2

let resultadoA = calculaMetade(100)
let resultadoB = calculaMetade(500)

console.log(resultadoA);
console.log(resultadoB);

console.log("----------------------");

/* Exercicios

1) Monte um Arrow Function que receba um nome de uma pessoa e converta este nome para letras maiúsculas.

2) Chame a função 3x (passando nomes diferentes) e exibindo no console os resultados
*/

const exercicio2 = nome => nome.toUpperCase()

let tentativa1 = exercicio2("eduardo")
let tentativa2 = exercicio2("jose")

console.log(tentativa1);
console.log(tentativa2);