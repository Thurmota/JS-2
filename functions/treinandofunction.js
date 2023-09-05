function dobro(x) {
  alert("O dobro de " + x + " é " + (x * 2))
}

// dobro(2)

function sayHelloInPortuguese(name = "você") {
  alert("Olá, " + name + "!")
}

//sayHelloInPortuguese("Arthur")
//sayHelloInPortuguese()

function soma(a, b, c = 0, d = 1, e = 3) {
  alert("O resultado da soma é " + (a + b + c + d + e))
}

//soma(7, 6)
//soma(1, 1)
//soma(1, 2, 3)

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }

  console.log(usuario)
}

criarUsuario("Issac", "ARTHUR@HOTMAIL", "1234", "Admin")

function muitosparametros(nome, idade, telefone, email, senha, endereco) {
  // ...
}

muitosparametros("nome", "idade", "telefone", "email", "senha", "endereco")

function objetoComoParametro(usuario) {
  usuario.nome
  usuario.email
  usuario.idade
  usuario.telefone
  usuario.senha
  usuario.endereco
}

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  endereco: "",
  senha: "",
  idade: ""
}

objetoComoParametro(dadosDoUsuario)