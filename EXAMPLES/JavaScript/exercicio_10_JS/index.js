let palavra = prompt("Informe a palavra que deseja testar se é um palindromo")
let leituraNormal =""
let leituraAoContrario =""

for(i = 0; i < palavra.length; i++) {
  leituraNormal += palavra[i] + " "
}

for(i = palavra.length; i > 0; i--) {
  leituraAoContrario += palavra[i-1] + " "
}

if(leituraNormal === leituraAoContrario) {
  alert("A palavra " + palavra + " é um polindromo")
} else {
  alert("A palavra " + palavra + " não é um polindromo como pode ver a seguir:\n" + leituraNormal + "\n" + leituraAoContrario)
}