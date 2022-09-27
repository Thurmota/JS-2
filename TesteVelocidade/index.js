const name_one = prompt("Digite o nome da primeira nave: ")
const velocity_one = prompt("Digite a velocidade da nave: ")

const name_two = prompt("Digite o nome da segunda nave: ")
const velocity_two = prompt("Digite a velocidade da nave: ")

if (velocity_one > velocity_two) {
    alert("A velocidade da nave " + name_one + " é maior")
} else if (velocity_two > velocity_one) {
    alert("A velocidade da nave " + name_two + " é maior")
} else {
    alert("A velocidade das naves são iguais")
}