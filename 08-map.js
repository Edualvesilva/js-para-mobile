import cursos from "./modulos/cursos.js";
/* map (mapear - transforma em outra coisa) 
Passa por elementos de um array e realiza operações em cada um deles atráves de uma função (callback), gerando um novo array.
*/

// Exemplo 1
const numeros = [10,20,5,12,55,50]
const numerosDobrados = numeros.map(numero => numero * 2)
console.log(numerosDobrados);

console.log("-----");
console.log(cursos);

// Exemplo 2: Gerar um novo array apenas com os nomes dos cursos

const titulos = cursos.map(curso => curso.titulo)
console.log(titulos);

/* Exercício
Use o map para gerar um novo array APENAS com os preços calculados com um desconto de 10%.

como calcular? 
-Opção 1: valor - valor * 0.10
-Opção 2: valor *0.9
*/

// const novosPrecos = cursos.map(curso => curso.preco * 0.9)
const novosPrecos = cursos.map(curso => {
    return {...curso, preco: curso.preco * 0.9}
})

console.log("------ Exercicio");
console.log(novosPrecos);
