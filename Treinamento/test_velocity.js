let firstVeicule = prompt("Digite a velocidade do primeiro veículo: ")
let secondVeicule = prompt("Digite a velocidade do segundo veículo: ")

parseFloat(firstVeicule)
parseFloat(secondVeicule)

if (firstVeicule > secondVeicule) {
  alert("O primeiro veículo é mais rápido")
} else if (firstVeicule < secondVeicule) {
  alert("O segundo veículo é mais rápido")
} else {
  (firstVeicule = secondVeicule)
  alert("Os veícuolos estão com a mesma velocidade")
}

