import {pessoa,livro,alunos as reprovados} from './modulos/dados.js'
import alunos from './modulos/alunos.js';

console.log(reprovados);
console.log("------");
console.log(alunos);
console.log("------");
console.log(pessoa);
console.log(livro);
console.log(pessoa.nome);

for(const prop in pessoa){
    console.log(pessoa[prop]);
}