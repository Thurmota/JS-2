function calcularMedia(a, b) {
  const media = (a + b) / 2
  return media
}

const resultado = calcularMedia(7, 2)
//console.log(resultado)

function criarProduto(nome, preço) {
  const produto = {
    nome,
    preço,
    estoque: 1
  }
  return produto
}

//console.log(criarProduto('notebook', 2500))

function areaRetangular(base, altura) {
  return base * altura
}

//console.log(areaRetangular(3, 5))

function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}

//console.log(areaQuadrada(9))

function ola() {
  let texto = "..."
  return texto
  //nenhum código vai ser compilado após o return
}


function maiorIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}

console.log(maiorIdade(29))
console.log(maiorIdade(13))