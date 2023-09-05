const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
//------------------------------===---------------------------------

// Map -> Transformação em arrays, cria um novo 
// array a partir de um já existente

//const nomes = []

//for (let i = 0; i < personagens.length; i++) {
//  nomes.push(personagens[i].nome)
//}

//console.log(nomes)

// Método Map
const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

console.log(nomes)

//------------------------------===---------------------------------

// Filter -> Filtrar elementos de um array, 
// cria um novo array com esses elementos

//const orcs = []

//for (let i = 0; i < personagens.length; i++) {
//  if (personagens[i].raca === "Orc") {
//    orcs.push(personagens[i])
//  }
//}

//console.log(orcs)


// Método Filter
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

console.log(orcs)

//------------------------------===---------------------------------

// Reduce -> Transforma um array em outro elemento, 
// em um outro array, em um objeto, etc.

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

// Outro exemplo REDUCE

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem)
  } else {
    valorAcumulado[personagem.raca] = [personagem]
  }

  return valorAcumulado
}, {})

console.log(racas)

// Sort -> Ordenar arrays, mudar elementos de posição,
// tendo algum critério

// 1, 2, 4, 7, 3, 0

const personagensOrdenado = personagens.slice().sort(function (a, b) {
  return b.nivel - a.nivel
})

console.log(personagens)
console.log(personagensOrdenado)