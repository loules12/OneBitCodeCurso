const nomeVeiculo01 = prompt("Informe o nome do primeiro veículo:")
const velVeiculo01 = parseFloat(prompt("Informe a velocidade final que o " + nomeVeiculo01 + " pode alcançar:"))
const nomeVeiculo02 = prompt("Informe o nome do segundo veículo:")
const velVeiculo02 = parseFloat(prompt("Informe a velocidade final que o " + nomeVeiculo02 + " pode alcançar:"))

if(velVeiculo01 > velVeiculo02) {
  alert("O " + nomeVeiculo01 + " tem uma velocidade final maior que o " + nomeVeiculo02 + "!")
} else if (velVeiculo02 > velVeiculo01) {
  alert("O " + nomeVeiculo02 + " tem uma velocidade final maior que o " + nomeVeiculo01 + "!")
} else {
  alert("A velocidade final do " + nomeVeiculo02 + " é igual a do " + nomeVeiculo01 + "!")
}