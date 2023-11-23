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
    texto => texto.toUpperCase()
]

console.log(recursos); // array completo

const [produtos,converter] = recursos // Destructuring

// Acessando através da constante que foi gerada pelo destructuring
console.log(produtos[1]); // TV led

for(const produto of produtos){
    console.log("Produto: "+produto);
}

console.log(converter("edu"));
console.log(converter("geladeira"));
console.log(converter(produtos[0]));

// Destructuring em objetos
const pessoa = {
    nome: "André",
    idade: 19,
    bairro: "Penha",
    situacao:"crítica"
}

const {nome,idade,bairro,situacao} = pessoa

console.log("-------------");
console.log(`O aluno ${nome} está em situação ${situacao} no curso`);
console.log(`Mora na ${bairro} e mesmo assim sempre atrasa...`);

// Criando um apelido para a propriedade codigo
const {codigo:pedido,cursos,preco} = {codigo : "123abc",cursos:["Figma","Node.js"],preco:1000}

console.log(pedido); // pedido é um apelido
console.log(cursos);
console.log(preco);

console.log("--------------");

//Destructuring para parâmetros de função
function exibirDados({titulo,ano}){
    console.log(`Filme: ${titulo} - Ano de lançamento: ${ano}`);
}

const filme1 = {
    titulo: "Vingadores",
    ano: 2012
}

const filme2 = {
    titulo: "Barbie",
    ano: 2023
}

exibirDados(filme1)
exibirDados(filme2)