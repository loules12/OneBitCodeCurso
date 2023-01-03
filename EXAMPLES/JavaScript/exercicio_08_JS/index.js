let dinheiro = parseFloat(prompt("Qual o valor contido na conta?"))
let saque = 0
let opcao= 0

do{
  opcao = parseFloat(prompt("O saldo atual da conta é:R$" + dinheiro + "\n1)Depositar\n2)Sacar\n3)Sair"))
  switch(opcao){
    case 1:
      dinheiro += parseFloat(prompt("O saldo atual da conta é:R$" + dinheiro + "\nQuanto deseja depositar?"))
      break
    case 2:
      saque = parseFloat(prompt("O saldo atual da conta é:R$" + dinheiro +"\nQuanto deseja sacar?"))
      saque <= dinheiro ? dinheiro -= saque : alert("Saldo insuficiente")
      break
    case 3:
      alert("Finalizando")
      break
    default:
      alert("Esta opção não é valida")
  }
}while(opcao!=3)