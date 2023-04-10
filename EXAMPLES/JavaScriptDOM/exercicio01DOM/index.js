function escalarJogador(){

  const lineupList = document.getElementById('lista-de-escalacao')

  const h3 = document.createElement('h3')
  h3.innerText = "Cadastro de jogador:"

  const ul = document.createElement('ul')

  const playerName = document.createElement('li') 
  playerName.innerText = "Nome: "
  const pNameInput = document.createElement('input')
  pNameInput.type = 'text'
  pNameInput.name = 'fullname'
  ul.appendChild(document.createElement('br'))

  const playerPosiction = document.createElement('li') 
  playerPosiction.innerText = "Posição: "
  const pPosictionInput = document.createElement('input')
  pPosictionInput.type = 'text'
  pPosictionInput.name = 'posiction'
  ul.appendChild(document.createElement('br'))
  
  const playerNumber = document.createElement('li') 
  playerNumber.innerText = "Número da camisa: "
  const pNumberInput = document.createElement('input')
  pNumberInput.type = 'text'
  pNumberInput.name = 'number'
  ul.appendChild(document.createElement('br'))

  if(pNameInput != null == pPosictionInput != null == pNumberInput != null) {
    confirm('Confirma a escalação deste jogador?')
    if (confirm) {
      playerName.appendChild(pNameInput)
      ul.appendChild(playerName)
      playerPosiction.appendChild(pPosictionInput)
      ul.appendChild(playerPosiction)
      playerNumber.appendChild(pNumberInput)
      ul.appendChild(playerNumber)
    }
  }

}