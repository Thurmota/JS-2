let pokemon = "Charmander" //escopo mais externo

function evoluir() {
  pokemon = "Charmeleon" // escopo mais interno
}

console.log(pokemon)
evoluir()
console.log(pokemon)
