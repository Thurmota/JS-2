function calcularareaTriangulo() {
  const base = prompt("Informe a base do triângulo: ")
  const altura = prompt("Informe a altura do triângulo: ")
  return base * altura / 2
}

function calcularAreaRetangulo() {
  const base = prompt("informe a base do retângulo: ")
  const altura = prompt("informe a altura do retângulo: ")
  return base * altura
}

function calcularAreaQuadrado() {
  const lado = prompt("informe o lado do quadrado: ")
  return lado * lado
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("informe a base maior do trapézio: "))
  const baseMenor = parseFloat(prompt("informe a base menor do trapézio: "))
  const altura = prompt("informe a altura do trapézio: ")
  return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
  const raio = prompt("Informe o raio do círculo: ")
  return 3.14 * (raio * raio)
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
  )
}

function executar() {
  let option = ""

  do {
    option = exibirMenu()
    let resultado

    switch (option) {
      case "1":
        resultado = calcularareaTriangulo()
        break;
      case "2":
        resultado = calcularAreaRetangulo()
        break;
      case "3":
        resultado = calcularAreaQuadrado()
        break;
      case "4":
        resultado = calcularAreaTrapezio()
        break;
      case "5":
        resultado = calcularAreaCirculo()
        break;
      case "6":
        alert("Saindo...")
        break;
      default:
        alert("Opção inválida!")
        break;
    }

    if (resultado) {
      alert("Resultado: " + resultado)
    }
  } while (option != "6")
}

executar()