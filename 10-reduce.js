import cursos from "./modulos/cursos.js"
/* reduce 
Passa por elementos de um array (usando uma função callback com parâmetros, e um parâmetro com valor inicial) e retorna um único valor/resultado. Pode ser útil para operações matemáticas que geram um único resultado. */

// Exemplo 1
const valores = [10,5,50,200,1000]
const total = valores.reduce((acumulador,valor)=> {return acumulador + valor},0)

console.log(valores);
console.log(total);

// Sem reduce
let acumuladora = 0
for(let i = 0;i < valores.length;i++){
   
   acumuladora = acumuladora+ valores[i]
}

console.log(acumuladora);

console.log("---------- Exercicio");

/* Exercicio 1: */
const resultado = cursos.reduce((acumulador,curso)=> acumulador+ curso.preco,0)
console.log(resultado);

/* Exercicio 2: faça a soma dos preços dos cursos de front e back-end */



