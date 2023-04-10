function escalarJogador(){

  const lineupList = document.getElementById('lista-de-escalacao')

  const pposition = document.getElementById('pposition')
  const pname = document.getElementById('pname')
  const pnum = document.getElementById('pnumber')

  const ul = document.createElement('ul')

  const ppositionLi = document.createElement('li')
  ppositionLi.appendChild(pposition)
  ul.appendChild(ppositionLi)
  ul.appendChild(document.createElement('br'))

  const pnameLi = document.createElement('li')
  pnameLi.appendChild(pname)
  ul.appendChild(pnameLi)
  ul.appendChild(document.createElement('br'))

  const pNumLi = document.createElement('li')
  pNumLi.appendChild(pnum)
  ul.appendChild(pNumLi)
  ul.appendChild(document.createElement('br'))

  lineupList.append(ul)

  console.log(lineupList)
}