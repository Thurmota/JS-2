const turista = prompt("Qual seu nome? ")
let cidades = " "
let contagem = 0

let continuar = prompt("Voce visitou alguma cidade? (sim/nao)")

while (continuar === "sim") {
    let cidade = prompt("Digite o nome da cidade visitada? ")
    cidades += cidade + ", " + cidades 
    contagem++ 
    continuar = prompt("Voce visitou mais alguma cidade? (Sim/Nao)")
}

alert(
    "Turista: " + turista + 
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas: " + cidades
)