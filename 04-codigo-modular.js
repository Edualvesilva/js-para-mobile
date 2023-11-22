import {pessoa,livro} from './modulos/dados.js'

console.log(pessoa);
console.log(livro);
console.log(pessoa.nome);

for(const prop in pessoa){
    console.log(pessoa[prop]);
}