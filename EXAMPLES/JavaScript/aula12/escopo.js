let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal() {
  let animal = "Gato"
}

// criarAnimal()
// console.log(animal)  // Quando a variável é criada em um escopo mais interno ela não é valida em um escopo mais externo, quando é mais externo é possível ser utilizada em um escopo mais interno.

// Haja vista que o escopo interno seria dentro de um for, uma function, entre outros.

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true  // o var fica disponível no escopo mais externo
    let situacao = "Aprovado"  // o let se limita ao escopo mais interno caso esteja em tal.
  } else {
    var aprovado = false
    let situacao = "Reprovado"
  }

  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}

avaliarNota(83)
avaliarNota(49)

function ola() {
  var texto = "Olá, mundo!"  // Se for criado um var dentro de uma função, ele não fica disponível fora dela, isso só acontece nas estruturas de validação como if, etc...
}

console.log(texto)


// console.log(newName)
// console.log(lastName)

// var newName = "Basílio"  // Quando é definido por var, a linguagem internamente inicia esta variável sem conteudo no inicio do programa e ela recebe seu conteudo só a partir da linha de declaração
// let lastName = "Neto"  // Já no modo de definição let, ele só passa a existir a partir do momento de sua definição

// console.log(newName)
// console.log(lastName)
