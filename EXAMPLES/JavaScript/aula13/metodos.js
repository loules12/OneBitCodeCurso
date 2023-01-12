let pessoa = {
  nome: "Basílio",
  idade: 26,
  dizerOla(){
    console.log("Olá, mundo! Meu nome é " + this.nome)  // Dentrod o contexto de objétos o this sempre vai se referir ao próprio objeto
  }
}

console.log(pessoa)

pessoa.dizerOla()