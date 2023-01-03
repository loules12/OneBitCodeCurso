let nomeTurista = prompt("Qual o seu nome?")
let visitou = confirm("Você já visitou alguma cidade?")
let quantCidadeVisitada = 0
let nomeDasCidades = ""
let cidadeAtual = ""

while(visitou){
  quantCidadeVisitada++
  cidadeAtual = prompt("Informe o nome da cidade visitada:")
  nomeDasCidades += cidadeAtual + "\n"
  visitou = confirm("Você visitou mais alguma cidade?")
}

alert(nomeTurista + " você visitou " + quantCidadeVisitada + " até agora, sendo elas:\n" + nomeDasCidades)