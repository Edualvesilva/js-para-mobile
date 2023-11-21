// 01-var-let-const.js

var idade = 18 // ESCOPO GLOBAL
if(idade >= 18){
   // let mensagem = "É adulto!" // ESCOPO DE BLOCO
} else {
    // let mensagem = "É menor" // BLOCO
}

console.log(idade)

/* Dará erro pois mensagem só existe dentro do bloco if/else */
// console.log(mensagem)

const meuNome = "Eduardo"
console.log(meuNome)

// Reatribuição NÃO É possível em constantes
// meuNome = "Eduardo Alves"
// console.log(meuNome)

// Constantes sempre são declarados com algum valor, 
// E este valor NÃO PODE SER modificado
const escola = "SENAC"
