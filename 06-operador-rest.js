/* Conceito
Usando o ... como "Rest operator"
Podemos mesclar uma lista de parâmetros/argumentos
para uma função */

const cientistas = ["Tesla","Eistein","Newton","Darwin"]
const artistas = ["Neymar","Michael Jackson","Freddy Mercury","Ozzy","Peter Parker","Ryan Gosling"]

                     // rest
const classificar = (...parametro) => parametro.sort()


console.log(classificar(...cientistas)); // spread
console.log(classificar(...artistas)); // spread


