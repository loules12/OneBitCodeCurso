function calcularMedia(a, b) {
  const media = (a + b) / 2
  return media
}

const resultado = calcularMedia(10, 5)

// console.log(resultado)

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1
  }
  return produto
}

// const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500)

console.log(notebook)

function areaRetangular (base, altura) {
  return base * altura
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}

// console.log(areaRetangular(3, 5))

// console.log(areaQuadrada(9))

function ola() {
  let texto = "..."
  return texto  // Quando o return é dado, a função é encerrada imediatamente, fazendo com que as linhas posteriores não sejam executadas.
  texto = "Olá, mundo"
  console.log(texto)
}

// console.log(ola())

function maioridade(idade){
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}  // Para que uma função tenha mais do que um return, tem que ser limitado por ramificação ou validação de algo!