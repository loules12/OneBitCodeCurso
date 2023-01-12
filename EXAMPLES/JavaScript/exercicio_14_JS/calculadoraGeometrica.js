function divisaoPorDois (valor) {
  return valor / 2
}

function multDoisValores(base, altura) {
  return base * altura
}

function entradaDeDados(dado, forma) {
  return parseFloat(prompt("Informe a " + dado + " do " + forma + " em cm:"))
}

function mostrarResultado(forma, resultado) {
  alert("A área do " + forma + " é de " + resultado + "cm")
}
let opcao = 20
let resultado = 0

do{

  opcao = parseFloat(prompt(
    "Bem vindo à Calculadora Geométrica"+
    "\n\nEscolha uma opção:" + 
    "\n1)Calcular área do triângulo" +
    "\n2)Calcular área do retângulo" +
    "\n3)Calcular área do quadrado" +
    "\n4)Calcular área do trapézio" +
    "\n5)Calcular área do círculo" +
    "\n\n0)Sair"
    ))

    switch(opcao){
      case 1:
        let baseTriangulo = entradaDeDados("base", "triangulo")
        let alturaTriangulo = entradaDeDados("altura", "triangulo")
        resultado = divisaoPorDois(multDoisValores(baseTriangulo, alturaTriangulo))
        
        mostrarResultado("triângulo", resultado)
        break
      case 2:
        let baseRetangulo = entradaDeDados("base", "retângulo")
        let alturaRetangulo = entradaDeDados("altura", "retângulo")
        resultado = multDoisValores(baseRetangulo, alturaRetangulo)

        mostrarResultado("retângulo", resultado)
        break
      case 3:
        let ladoQuadrado = entradaDeDados("lateral", "quadrado")
        resultado = multDoisValores(ladoQuadrado, ladoQuadrado)
        
        mostrarResultado("quadrado", resultado)
        break
      case 4:
        let baseMaiorTrapezio = entradaDeDados("base maior", "trapézio")
        let baseMenorTrapezio = entradaDeDados("base menor", "trapézio")
        let alturaTrapezio = entradaDeDados("altura", "trapézio")
        resultado = divisaoPorDois(multDoisValores((baseMaiorTrapezio + baseMenorTrapezio), alturaTrapezio))

        mostrarResultado("trapézio" , resultado)
        break
      case 5:
        let raioCirculo = entradaDeDados("raio", "círculo")
        resultado = multDoisValores(multDoisValores(raioCirculo, raioCirculo), 3.14)

        mostrarResultado("círculo", resultado.toFixed(2))
        break
      case 0:
        alert("Finalizando...")
        break
      default:
        alert("Está não é uma opção válida, tente novamente!")
        break
    }
}while(opcao != 0)