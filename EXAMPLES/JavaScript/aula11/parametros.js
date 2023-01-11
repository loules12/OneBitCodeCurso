function dobro(x){
  alert("O dobro de " + x + " é: " + (x*2))
}

// dobro(1325)
// dobro(7)

// dobro()

// function dizerOla(name = "usuário") {
//   alert("Olá " + name)
// }

// dizerOla("Basílio")
// dizerOla()

function soma(a, b) {
  alert("O resultado da soma é " + (a + b))
}

// soma(23, 15)

function criarUsuario(nome, email, senha, tipo = "admin"){
  const usuario = {
    nome,  // Mesmo que nome: nome (neste caso está abreviado)!
    email,
    senha,
    tipo
  }

  console.log(usuario)
}

function muitosParametros(nome, email, endereco, aniversario, senha, telefone) {

}

function objComoParametro(usuario) {
  // ...
  usuario.nome  // Pode ser usado desta forma para facilitar na hora de escrever o código, ao inves de passar muitos parametros já entregar como um objeto.
}

const dadosDoUsuario = {
  nome: "",
  email: "",
  endereco: "",
  aniversario: "",
  senha: "",
  telefone: "",
}

objComoParametro(dadosDoUsuario)