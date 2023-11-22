// modulos/funcoes

function converterMaiusculas(text){
    return text.toUpperCase()
}

function converterMinusculas(text){
    return text.toLowerCase()
}

function formataMoeda(valor){
    return valor.toLocaleString("pt-br", { style:"currency",currency:"BRL"})
}

export {converterMaiusculas,converterMinusculas,formataMoeda}
