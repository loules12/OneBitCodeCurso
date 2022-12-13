const idade = prompt("Informe a sua idade:")

if(idade >= 18 ){
  alert("Você é maior de idade")
} else {
  alert("Você é menor de idade")

  if(idade < 12) {
    alert("Você é uma criança!")
  }
}

/*
  O mesmo processo pode ser realizado com uma Sintaxe abreviada
  const resultado = condicao ? resultado_verdadeiro : resultado_falso
  podendo deixar o código mais limpo desta forma!
*/