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
const alunos = ["Nicolas","Eliel","André","Kaue","Barbosa","Aline","Melissa","Marina"]
const resultados =  alunos.filter((aluno)=> {return aluno.startsWith("M")} )

console.log(alunos);
console.log(resultados);