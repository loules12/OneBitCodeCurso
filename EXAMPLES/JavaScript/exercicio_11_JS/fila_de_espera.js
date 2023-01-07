let opcao = 0;
const fila = [];
let filaOrdenada = [];
let filaString = "";
let novoPaciente = "";
let pacienteConsulta = "";

do {
  opcao = parseFloat(
    prompt(
      filaString.replaceAll(",", "") +
        "Escolha uma opção: \n1)Novo paciente\n2)Consultar paciente\n3)Sair"
    )
  );
  switch (opcao) {
    case 1:
      novoPaciente = prompt("Informe o nome do novo paciente:");
      fila.push(novoPaciente);
      filaOrdenada.push(
        fila.indexOf(novoPaciente) + 1 + "º - " + novoPaciente + "\n"
      );
      filaString = filaOrdenada.toString();
      break;
    case 2:
      if (filaOrdenada.length === 0) {
        alert("Não temos pacientes cadastrados no momento!");
        break;
      } else {
        pacienteConsulta = fila.shift();
        alert("Paciente " + pacienteConsulta + " vai ser atendido agora!");
        filaOrdenada.shift();

        for (let i = 0; i < filaOrdenada.length; i++) {
          filaOrdenada.splice(
            i,
            1,
            fila.indexOf(fila[i]) + 1 + "º - " + fila[i] + "\n"
          );
        }

        filaString = filaOrdenada.toString();
      }
      break;
    case 3:
      alert("Finalizando");
      break;
    default:
      alert("Está não é uma opção valida, tente novamente!");
      break;
  }
} while (opcao != 3);
