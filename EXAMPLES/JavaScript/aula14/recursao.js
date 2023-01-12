// Função recursiva é uma função que chama ela mesma.

function dividir(numero) {
  console.log(numero)
  if(numero % 2 === 0) {
    dividir(numero / 2)
  } else {
    return numero
  }
}

// dividir(40)

function dobrar(num) {  // Pela sintaxe desta função ela vai executar até chegar no limite da pilha de funções
  console.log(num)
  dobrar(num * 2)
}

// dobrar(1)  

// fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1  === 5 * !4
function fatorial(num) {
  console.log("Número: " + num)
  if(num === 0) {
    return 1
  } else if (num === 1) {
    return 1
  } else {
    console.log(num + " * !" + (num -1))
    return num * fatorial(num - 1)
  }
 }

 console.log(fatorial(5))