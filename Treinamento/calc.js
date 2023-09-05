/* alert("Seja bem vindo a super calculadora 3000")

let number = prompt("Escolha um número para ver a sua tabuada completa: ")
alert("Calculando...")
alert("Pronto! Confira seu console")

resuldado = ""

let resuldado = console.log(
  "1 x " + number + " = " + number * 1 +
  "\n2 x " + number + " = " + number * 2 +
  "\n3 x " + number + " = " + number * 3 +
  "\n4 x " + number + " = " + number * 4 +
  "\n5 x " + number + " = " + number * 5 +
  "\n6 x " + number + " = " + number * 6 +
  "\n7 x " + number + " = " + number * 7 +
  "\n8 x " + number + " = " + number * 8 +
  "\n9 x " + number + " = " + number * 9 +
  "\n10 x " + number + " = " + number * 10 +
  "\n11 x " + number + " = " + number * 11 +
  "\n12 x " + number + " = " + number * 12 +
  "\n13 x " + number + " = " + number * 13 +
  "\n14 x " + number + " = " + number * 14 +
  "\n15 x " + number + " = " + number * 15 +
  "\n16 x " + number + " = " + number * 16 +
  "\n17 x " + number + " = " + number * 17 +
  "\n18 x " + number + " = " + number * 18 +
  "\n19 x " + number + " = " + number * 19 +
  "\n20 x " + number + " = " + number * 20
) */

// Outra maneira de fazer o exercício

const numero = prompt(
  "Robô tabuada\n" +
  "Informe o número aue deseja calcular a tabudada: "
)
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da tabuada de: " + numero + ":\n\n" + resultado)