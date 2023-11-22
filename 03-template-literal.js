// 03-template-literal.js

const nome = "Chapolin"
const sobrenome = "Colorado"
let idade = 25
let cidade = "São Paulo"
let estado =  "SP"

/* Concatenação tradicional usandor operador +
 Meu nome é Chapoli Colorado, tenho 25 anos e moro atualmente na cidade de Sâo Paulo - SP. */
let mensagem1 = "Meu nome é "+nome+" "+sobrenome+",tenho "+idade+" anos e moro atualmente na cidade de "+cidade+" - "+estado+"."

console.log(mensagem1);

console.log("--------");
/* Template literal */
let mensagem2 = `Meu nome é ${nome.toUpperCase()} ${sobrenome},tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}. Sou ${idade >= 18 ? 'maior' : 'menor'} de idade`
console.log(mensagem2);