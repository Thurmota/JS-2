const arr = ["Frodo", "Sam", "Merrey", "Mendes", "Felipe"]
console.log(arr)

// adicionar elementos no final do array
// push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// adicionar elementos no inicio do array
// unshift
tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

// Remover elementos no final do array
// pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// Remover elementos no inicio do array
// shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemnto
// include
const inclui = arr.includes("oi")
console.log(inclui)

// Pesquisar o índice do elemento
// indexOf
const indice = arr.indexOf("Merrey")
console.log(indice)

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat
// concatenar
const sociedade = hobbits.concat(outros, "Teste")
console.log(sociedade)

// splice
// substituição dos elementos ou remover
const elementosRemovidos = sociedade.splice(indice, 1, "AdicaoSplice")
console.log(sociedade)
console.log(elementosRemovidos)

// iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}
