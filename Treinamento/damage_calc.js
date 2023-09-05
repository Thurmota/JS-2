let personagemDeAtaque = prompt("Digite o nome do personagem de ataque: ")
let poderDeAtaque = prompt("Digite o poder de ataque do " + personagemDeAtaque + ":")

let personagemDeDefesa = prompt("Digite o nome do defensor: ")
let quantidadeDeVida = prompt("Digite a quantidade de vida do : " + personagemDeDefesa + ":")
let poderDeDefesa = prompt("Digite o poder de defesa do: " + personagemDeDefesa + ":")
let escudo = prompt("Possui escudo [S/N]: ").toUpperCase

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && escudo === "N") {
  alert = poderDeAtaque - poderDeDefesa
}

