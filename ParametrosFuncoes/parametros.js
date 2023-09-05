function dobro(x) {
  alert("O dobro de " + x + " é " + (x * 2))
}

//dobro(4)

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!")
}

//dizerOla("Arthur")
//dizerOla()

function soma(a, b) {
    alert("O restultado da soma é " + (a + b))
}

//soma(1, 2)

function criarUsuario(nome, email, senha, tipo = "Admin") {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

//criarUsuario("Arthur", "arthur@gmail.com", "1234")

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    //...
}

function objetoComoParametro(usuario) {
    //...
    usuario.nome
    usuario.email
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
    nome: "",
    telefone: "", 
    endereco: "", 
    email: "", 
    senha: " ", 
    aniversario: ""
}

objetoComoParametro(dadosDoUsuario)