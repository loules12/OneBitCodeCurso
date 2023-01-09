let listaImoveis = []
let opcao = 0


do {
  opcao = parseFloat(prompt(
    "Bem-vindo(a) ao cadastro de imóveis!\n"+
    "Total de imóveis: " + listaImoveis.length +
    "\n\nEscolha uma opção:" +
    "\n1)Novo imóvel" +
    "\n2)Lista de imóveis cadastrados" +
    "\n0)Sair"
    ))

  switch(opcao){
    case 1:

      const imovel = {}

      imovel.nomeProprietario = prompt("Nome do proprietário:")
      imovel.quantQuartos = prompt("Quantidade de quartos:")
      imovel.quantBanheiros = prompt("Quantidade de banheiros:")
      imovel.garagem = prompt("O imóvel tem garagem? (Sim/Não)")

      const confirmacao = confirm(
        "Salvar este imóvel?\n"+
        "\nProprietário: " + imovel.nomeProprietario +
        "\nQuartos: " + imovel.quantQuartos +
        "\nBanheiros: " + imovel.quantBanheiros + 
        "\nTem garagem? " + imovel.garagem
      )

      if(confirmacao) {
        listaImoveis.push(imovel)
        alert("Imóvel salvo com sucesso!")
      } else {
        alert("Voltando ao menu")
      }
      
      break
    case 2:
      if(listaImoveis.length === 0) {
        alert("Não tem nenhum imóvel cadastrado no momento.")
        break
      } else {
        for(let i = 0; i < listaImoveis.length; i++){
          alert(
            "Imóvel - " + (i + 1) +
            "\nProprietário: " + listaImoveis[i].nomeProprietario +
            "\nQuartos: " + listaImoveis[i].quantQuartos +
            "\nBanheiros: " + listaImoveis[i].quantBanheiros +
            "\nPossui garagem? " + listaImoveis[i].garagem
          )
        }
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