let opcao = 0
const fila = []
let filaOrdenada = []
let filaString = ""
let itemAtual = ""
let novoPaciente = ""
let pacienteConsulta = ""

do{
  opcao = parseFloat(prompt(filaString + "Escolha uma opção: \n1)Novo paciente\n2)Consultar paciente\n3)Sair"))
  switch(opcao){
    case 1:
      novoPaciente = prompt("Informe o nome do novo paciente:")
      fila.push(novoPaciente)
      filaOrdenada.push((fila.indexOf(novoPaciente) + 1) + "º - " + novoPaciente + "\n")
      filaString = filaOrdenada.toString()
      break
    case 2:
      pacienteConsulta = fila.shift()
      alert("Paciente " + pacienteConsulta + " vai ser atendido agora!")
      filaOrdenada.shift()

      for(let i = 0; i < filaOrdenada.length; i++) {
        itemAtual = filaOrdenada[i]
        filaOrdenada.splice(i, 1, ((fila.indexOf(itemAtual) + 1) + "º - " + itemAtual + "\n"))
      } 
      filaString = filaOrdenada.toString().replaceAll(",", "")
      break
    case 3:
      alert("Finalizando")
      break
    default:
      alert("Está não é uma opção valida, tente novamente!")
      break
  }
}while(opcao != 3)