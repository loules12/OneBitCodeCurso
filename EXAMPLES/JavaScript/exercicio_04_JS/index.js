let nomePersonagemAtacante = prompt("Informe o nome do personagem atacante:")
let ataquePersonagemAtacante = parseFloat(prompt("Informe o poder de ataque do personagem " + nomePersonagemAtacante + ":"))

let nomePersonagemDefensivo = prompt("Informe o nome do personagem defensivo:")
let vidaPersonagemDefensivo = parseFloat(prompt("Informe a quantidade de vida que o " + nomePersonagemDefensivo + " tem:"))
let defesaPersonagemDefensivo = parseFloat(prompt("Informe o poder de defesa do " + nomePersonagemDefensivo + ":"))
let escudo = confirm("O " + nomePersonagemDefensivo + " está usando escudo? \nSe sim, clique em ok")

if (ataquePersonagemAtacante > defesaPersonagemDefensivo && escudo == false) {
  let danoCausado = ataquePersonagemAtacante - defesaPersonagemDefensivo
  vidaPersonagemDefensivo -= danoCausado
  alert("O personagem " + nomePersonagemAtacante + " causou " + danoCausado + " de dano ao personagem " + nomePersonagemDefensivo + "!\n\n" + nomePersonagemDefensivo + " ficou com " + vidaPersonagemDefensivo + " de vida")
} else if(ataquePersonagemAtacante > defesaPersonagemDefensivo && escudo == true) {
  let danoCausado = (ataquePersonagemAtacante - defesaPersonagemDefensivo) / 2
  vidaPersonagemDefensivo -= danoCausado
  alert("O personagem " + nomePersonagemAtacante + " causou " + danoCausado + " de dano ao personagem " + nomePersonagemDefensivo + "!\n\n" + nomePersonagemDefensivo + " ficou com " + vidaPersonagemDefensivo + " de vida")
} else {
  alert("O personagem " + nomePersonagemAtacante + " não causou dano ao personagem " + nomePersonagemDefensivo)
}