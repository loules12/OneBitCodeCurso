let valorEmMetros = prompt("Informe a quantidade de metros")
let conversao = prompt("Para qual sistema de medida você deseja converter está quantidade de métros?\nPara milímetro digite(mm):\nPara centímetro digite(cm):\nPara decímetro digite(dm):\nPara decâmetro digite(dam):\nPara hectometro digite(hm):\nPara quilômetro digite(km):")

let resultado = 0

switch(conversao) {
  case "mm":
    alert(valorEmMetros + " metros é equivalente à " + (valorEmMetros * 1000) + " milímetros")
    break
  case "cm":
    alert(valorEmMetros + " metros é equivalente à " + (valorEmMetros * 100) + " centímetros")
    break
  case "dm":
    alert(valorEmMetros + " metros é equivalente à " + (valorEmMetros * 10) + " decímetro")
    break
  case "dam":
    alert(valorEmMetros + " metros é equivalente à " + (valorEmMetros / 10) + " decâmetro")
    break
  case "hm":
    alert(valorEmMetros + " metros é equivalente à " + (valorEmMetros / 100) + " hectometro")
    break
  case "km" :
    alert(valorEmMetros + " metros é equivalente à " + (valorEmMetros / 1000) + " quilômetro")
    break
  default:
    alert("Está não é uma conversão de acordo com as nossas opções no momento")
}