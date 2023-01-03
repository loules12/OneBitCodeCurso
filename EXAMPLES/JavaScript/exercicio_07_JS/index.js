let opcao = 0
do {
  opcao = parseFloat(prompt("Menu interativo:" +
  "\n1)\n2)\n3)\n4)\n5)-EXIT"))
  switch(opcao){
    case 1:
      alert("Opção 1 foi selecionada")
      break
    case 2:
      alert("Opção 2 foi selecionada")
      break
    case 3:
      alert("Opção 3 foi selecionada")
      break
    case 4:
      alert("Opção 4 foi selecionada")
      break
    case 5:
      alert("Finalizando o sistema")
      break
    default:
      alert("Esta não é uma opção valida")
  }
}while(opcao!=5)