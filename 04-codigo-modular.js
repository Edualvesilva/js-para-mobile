import {pessoa,livro,alunos as reprovados} from './modulos/dados.js'
import alunos from './modulos/alunos.js';

/* Importação manual de cada função */
// import { converterMaiusculas,converterMinusculas,formataMoeda } from './modulos/funcoes.js';

/* Importação das funções atráves de um apelido/alias */
import * as minhasFuncoes from "./modulos/funcoes.js"


console.log(reprovados);

console.log("------");
console.log(alunos);
console.log("------");

console.log(pessoa);
console.log(livro);
console.log(pessoa.nome);

console.log("------");
console.log(minhasFuncoes.converterMaiusculas(reprovados[0]));
console.log(minhasFuncoes.converterMinusculas(reprovados[1]));

let preco1 = 1200.88
let preco2 = 100000.75
let preco3 = 500.8452

console.log(minhasFuncoes.formataMoeda(preco1));
console.log(minhasFuncoes.formataMoeda(preco2));
console.log(minhasFuncoes.formataMoeda(preco3));