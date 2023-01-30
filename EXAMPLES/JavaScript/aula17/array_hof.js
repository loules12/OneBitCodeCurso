const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map  --> Transforma um array em um novo array (cria um novo array)

// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome)
// }

const nomes = personagens.map(function(){
  return personagem.nome
})

console.log(nomes)


// Filter  --> Filtra apenas a informação desejada dentro de um array, passando para ele uma hof com o retorno desejado

// const orcs =[]

// for (let i = 0; i < personagens.length; i++) {
//   if (personagens[i].raca === "Orc") {
//     orcs.push(personagens[i])
//   }
  
// }

const orcs = personagens.filter(function(personagem) {
  return personagem.raca === "Orc"
})

console.log(orcs)


// Reduce  --> Transforma um array em outro elemento ou valor.

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel
}, 0)

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]){
    valorAcumulado[personagem.raca].push(personagem)
  } else {
    valorAcumulado[personagem.raca] = [personagem]
  }

  return valorAcumulado
}, {})


// Sort  --> Ordena o array de acordo com algum item ou especificação, ele modifica o proprio array

personagens.sort()