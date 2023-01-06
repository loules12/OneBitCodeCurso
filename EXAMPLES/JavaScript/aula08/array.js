const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar Elementos
// push  --> Adiciona um elemento no final do array

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift  --> Adiciona um elemento no inicio do array

tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Remover Elementos
// pop  --> Remove o ultimo elemento do array

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift  --> Remove o primeiro elemento do array

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
// includes  --> Verifica se existe um determinado item no array, pesquisa pelo valor exato

const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf  --> Verifica se um elemento está ou não incluso no array e retorna a posição se estiver presente

const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice  --> Copia uma parte de um array e trás para um novo array, pode ser usado o sinal negativo para que ele conte de trás pra frente (do final do array para o começo), Não modifica o array principal.

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4,)
console.log(arr)
console.log(hobbits)
console.log(outros)