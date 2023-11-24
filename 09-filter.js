import cursos from "./modulos/cursos.js"
/* filter (filtro)
Passa por elementos de um array (usando uma função callback) e
retorna valores de acordo com uma ou mais condições gerando um novo array. */

// Exemplo 1
const vendas = [1500,300,1000,500,750,5000,]
const meta = 1000

// Gerando um array com os valores que bateram a meta
const vendasAcimaDaMedia = vendas.filter((venda) => {return venda >= meta} )
console.log(vendas);
console.log(vendasAcimaDaMedia);

// Exemplo 2
// Filtrando alunos que começam com "M"
// Obs.: faz difereça maiúsculas e minúsculas
const alunos = ["Nicolas","Eliel","André","Kaue","Barbosa","Aline","Melissa","Marina"]
const resultados =  alunos.filter((aluno)=> {return aluno.startsWith("M")} )

console.log(alunos);
console.log(resultados);
console.log("------------");

/* Filtrando cursos */

// Filtrando por cursos da categoria Design
const cursoDesign= cursos.filter((curso)=> curso.categoria == "Design" )
console.log(cursos);
console.log(cursoDesign);

// Filtrando por cursos que NÃO SÃO da categoria Design
const cursosMenosDesign= cursos.filter((curso)=> curso.categoria !== "Design" )
console.log(cursosMenosDesign);

/* Exercicio: Gere um novo arrray com os cursos que atendem os seguintes critérios:
- Categorias Front-End e Mobile
- Preços acima de 600*/

const criterioso = cursos.filter(curso =>curso.preco >=600 && curso.categoria === "Front-End" || curso.categoria === "Mobile")
console.log(criterioso);