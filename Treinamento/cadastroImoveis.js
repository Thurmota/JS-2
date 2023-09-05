const imoveis = []
let opcao = " "

do {
  opcao = prompt(
    "Bem-vindo(a) ao cadastro de imóveis!\n" +
    "Total de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1- Novo imóvel\n2- Lista de imóveis\n3- Sair"
  )

  switch (opcao) {
    case "1":
      const imovel = {}

      imovel.proprietário = prompt("Informe o nome do proprietário: ")
      imovel.quartos = prompt("Quantos quartos possui o imóvel? ")
      imovel.banheiros = prompt("Quantos banheiros possui o imóvel? ")
      imovel.garagem = prompt("o imóvel possui garagem? (Sim/Não) ")

      const confirmation = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietário +
        "\nQuartos : " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui garagem? " + imovel.garagem
      )

      if (confirmation) {
        imoveis.push(imovel)
      }
      break

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].proprietário +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiros +
          "\nPossui garagem? " + imoveis[i].garagem
        )
      }
      break

    case "3":
      alert("Encerrando...");
      break

    default:
      alert("Opção inválida!");
  }
} while (opcao != "3");
