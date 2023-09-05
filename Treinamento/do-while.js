let choice = ""

do {
  choice = prompt("Digite uma opção" +
    "\n1- OPÇÃO 1" +
    "\n2- OPÇÃO 2" +
    "\n3- OPÇÃO 3" +
    "\n4- OPÇÃO 4" +
    "\n5- ENCERRAR")

  switch (choice) {
    case "1":
      alert("Você escolheu a opção 1")
      break
    case "2":
      alert("Você escolheu a opção 2")
      break
    case "3":
      alert("Você escolheu a opção 3")
      break
    case "4":
      alert("Você escolheu a opção 4")
      break
    case "5":
      alert("Você escolheu encerrar o programa")
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
  }


} while (choice !== "5")
