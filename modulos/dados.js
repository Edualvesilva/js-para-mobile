const pessoa = {
    nome : 'jon oliva',
    idade: 66,
    cidade: 'São Paulo'
}

const livro = {
    titulo : "O Senhor dos Anéis",
    volume: "As Duas Torres",
    ano: 1954
}

/* Se for exportação de somente UM recurso usamos export default nomeDoRecurso */
// export default pessoa

export {pessoa,livro}