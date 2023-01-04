let numeroEntrada = parseFloat(prompt("Informe um número para ver a sua tabuada de 1 a 20:"))

let resultado = 0
let resultadoFinal = ""

for(i=0; i < 20; i++) {
  resultado = ((i+1) * numeroEntrada)
  resultadoFinal += numeroEntrada + " * " + (i+1) + " = " + resultado + "\n"
}

alert(resultadoFinal)