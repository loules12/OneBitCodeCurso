let nome = prompt("Informe seu primeiro nome:")
let sobrenome = prompt("Informe seu sobrenome")
let estudo = prompt("Qual sua área de estudo?")
let nascimento = parseFloat(prompt("Informe o ano de seu nascimento")) 

window.alert("O recruta " + nome + " " + sobrenome + " é estudande de " + estudo + " e tem " + (2022 - nascimento) + " anos de idade!")