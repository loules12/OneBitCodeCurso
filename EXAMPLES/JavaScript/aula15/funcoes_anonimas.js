function somar(a, b) {
  return a + b
}

let operacao = somar

console.log(operacao(4, 5))

operacao = function (a, b) {
  return a - b
}

console.log(operacao(4, 5))

olaMundo()
// oiMundo()  // Não funciona pois as funções anônimas só ficam disponíveis para uso após elas serem definidas no código 

function olaMundo() {
  console.log("Olá, mundo")
}

const oiMundo = function () {
  console.log("Oi, mundo")
}

oiMundo()