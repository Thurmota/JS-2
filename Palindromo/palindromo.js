const word = prompt("Informe uma palavra para ser analisada: ")
let invertedWord = ""

for (let i = word.length - 1; i >= 0; i--) {
invertedWord += word[i]
}

if (word === invertedWord) {
    alert(word + " é um palíndromo!")
} else {
    alert(word + "não ê um palíndromo!\n\n" + word + " !== " + invertedWord )
}