const medida = prompt("Digite um valor em metros para ser convertido: ")

const escolha = prompt("Digite o valor correspondente a conversão que deseja" +
    "\n1-Milímetros (mm)" +
    "\n2-Centímetro (cm)" +
    "\n3-Decímetro (dm)" +
    "\n4-Decâmetro (dam)" +
    "\n5-Hectômetro (hm)" + 
    "\n6-Quilômetro (km)" )

switch (escolha) {
    case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
    break
    case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
    break
    case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
    break
    case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
    break
    case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
    break
    case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
    break
    default:
        alert("Opção Inválida")
}