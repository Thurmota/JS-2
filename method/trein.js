let pessoa = {
  nome: "arthur",
  idade: 26,
  // função dentro do objeto
  dizerOla() {
    console.log("Olá, mundo! Meu nome é: " + this.nome)
  }
}

console.log(pessoa)
pessoa.dizerOla()

