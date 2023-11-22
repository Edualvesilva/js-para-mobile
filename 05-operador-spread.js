/* ...Spread -> espalhar Copiar elementos/dados de um array/objeto para dentro de outro array/objeto */

const bandas = ["Pink Floyd","Rush","Yes"]
const maisBandas = [...bandas,"Slayer","Nightwish"]

console.log(bandas);
console.log(maisBandas);

/* Spread com objetos */
const cliente = {
    nome: "Seu Madruga",
    cidade: "Rio de Janeiro",
    idade: 65
}

const novosDados = {
    ...cliente, // copiando as propriedades do cliente pra cá
    estado: "SP",
    pedido: "123xyz",
    total: 5000.88,
    idade: 60 // Sobrescrevendo valores de propriedades
}
console.log(novosDados);