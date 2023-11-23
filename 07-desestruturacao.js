/* Destructuring ou Desestruturação
Extrair os dados de arrays e objetos para variáveis/constantes individuais */

// Destructuring em arrays
const alunas = ["Tanaka","Aline","Zimbo"]
const [tanaka,aline,zimbo] = alunas

console.log(tanaka);
console.log(aline);
console.log(zimbo);
console.log("--------------");

const unidades = ["Penha","Tatuapé","Itaquera","São Miguel"]
const [penha,tatuape,,smp] = unidades

console.log(penha);
console.log(tatuape);
console.log(smp);
console.log("--------------");

const [tesla,eistein,newton] = ["Tesla","Eistein","Newton"]
console.log(tesla);
console.log(eistein);
console.log(newton);
console.log("--------------");

const recursos = [
    ["Notebook","TV led","Computador Desktop"],
    function(texto){return texto.toUpperCase()}
]

console.log(recursos); // array completo

const [produtos,converter] = recursos // Destructuring

// Acessando através da constante que foi gerada pelo destructuring
console.log(produtos[1]); // TV led

for(const produto of produtos){
    console.log("Produto: "+produto);
}