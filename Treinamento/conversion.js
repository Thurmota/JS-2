const medida = prompt("Digite o valor em 'm':")
const conversao = prompt("Deseja converter para qual medida?\n" +
  "1- milímetro (mm)\n" +
  "2- centímetro (cm)\n" +
  "3- decímetro (dm)\n" +
  "4- decâmetro (dam)\n" +
  "5- hectômetro (hm)\n" +
  "6- quilômetro (km)")

switch (conversao) {
  case "1":
    alert("O resultado é: " + medida * 1000)
    break
  case "2":
    alert("O resultado é: " + medida * 100)
    break
  case "3":
    alert("O resultado é: " + medida * 10)
    break
  case "4":
    alert("O resultado é: " + medida * 0.1)
    break
  case "5":
    alert("O resultado é: " + medida * 0.01)
    break
  case "6":
    alert("O resultado é: " + medida * 0.001)
    break
  default:
    alert("Opção inválida")
}