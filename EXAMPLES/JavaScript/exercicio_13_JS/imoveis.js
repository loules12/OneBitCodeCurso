let listaImoveis = []
let imovelPadrao = {
  nomeProprietario : "",
  quantQuartos : "",
  quantBanheiros : "",
  garagem : ""
}

let quantImoveis = 0

let imoveisString = ""

do {
  opcao = parseFloat(prompt("No momento temos " + quantImoveis + " imóveis cadastrados!\n\n---MENU---\n1)Cadastra novo imóvel\n2)Mostrar todos os imóveis\n0)Sair"))

  switch(opcao){
    case 1:

      imovelPadrao.nomeProprietario = prompt("Nome do proprietário:")
      imovelPadrao.quantQuartos = prompt("Quantidade de quartos:")
      imovelPadrao.quantBanheiros = prompt("Quantidade de banheiros:")
      imovelPadrao.garagem = prompt("Tem garagem?")

      listaImoveis.push(imovelPadrao)
      
      
      for(let i = 0; i < listaImoveis.length; i++) {
        imoveisString += ("Casa de " + listaImoveis[i].nomeProprietario + "\nContem " + listaImoveis[i].quantQuartos + " quartos\nContem " + listaImoveis[i].quantBanheiros + " banheiro(s)\nCom garagem: " +listaImoveis[i].garagem + "\n\n")
      }

      quantImoveis++

      break
    case 2:
      if(listaImoveis.length === 0) {
        alert("Não tem nenhum imóvel cadastrado no momento.")
        break
      } else {
        alert(imoveisString)
      break
      }
    case 0:
      alert("Finalizando...")
      break
    default: 
      alert("Esta não é uma opção valida, tente novamente!")
      break
  }

} while(opcao != 0)