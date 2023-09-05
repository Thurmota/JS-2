olaMundo()
// oiMundo() -> Não funciona pois as funções anônimas 
// precisam ser chamadas após a sua construção

function olaMundo() {
  console.log("Olá, mundo")
}

const oiMundo = function () {
  console.log("Oi, mundo!")
}

oiMundo()





function somar(a, b) {
  return a + b
}

let operacao = somar

//console.log(operacao(4, 5))

operacao = function (a, b) {
  return a - b
}

//console.log(operacao(4, 5))

// Utilidades para funções anônimas

// Quando queremos que uma função já 
//estabelecida passe a ter outro comportamento

