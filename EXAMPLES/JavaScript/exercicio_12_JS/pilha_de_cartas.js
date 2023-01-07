let opcao =0
const baralho = ["3 de copas\n", "2 de paus\n"]
let baralhoString = baralho.toString()
let cartaRemovida = ""
let adicionarCarta = ""

do {
  
  opcao = parseFloat(prompt("Cartas no baralho:\n" + baralhoString.replaceAll(",", "") + "\n1)Adicionar Carta\n2)Puxar uma carta\n3)Sair"))

  switch(opcao) {
    case 1:
      adicionarCarta = prompt("Qual carta deseja adicionar?")
      baralho.unshift(adicionarCarta + "\n")
      baralhoString = baralho.toString()
      break
    case 2:
      if(baralho.length === 0){
        alert("Não tem nenhuma carta no baralho no momento!")
        break
      } else {
        cartaRemovida = baralho.shift()
        alert("A carta " + cartaRemovida + " foi removida do baralho!")
        baralhoString = baralho.toString()
        break
      }
    case 3:
      alert("Finalizando")
      break
    default:
      alert("Esta não é uma opção valida, tente novamente!")
      break
  }
}while (opcao != 3)