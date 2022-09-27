const firstName = prompt("Digite seu primeiro nome: ")
const lastName = prompt("Digite seu sobrenome: ")
const study = prompt("Qual seu campo de estudo? ")
const birth = prompt("Qual sua data de nasimento? ")

alert(
    "Dados cadastrados com sucesso!\n" +
    "\nNome Completo: " + firstName + " " + lastName + 
    "\nCampo de estudo: " + study +
    "\nIdade " + (2022 - birth)
 )
 