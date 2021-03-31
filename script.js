var bey1 = {
  nome:"Valtryek",
  imagem: "https://pm1.narvii.com/6440/4d60db991d7d6a6cc04342f6f114ba11a0c61fcc_hq.jpg",
  atributos:{
    Ataque:3,
    Burst:3,
    Defesa:2,
    Peso:4,
    Agilidade:3,
    Stamina:4
  }
}

var bey2 = {
  nome:"Roktavor",
  imagem: "https://i.pinimg.com/originals/c2/b4/c6/c2b4c624835dc0d8c0883f87ee5d01f3.png",
  atributos:{
    Ataque:3,
    Burst:2,
    Defesa:1,
    Peso:4,
    Agilidade:4,
    Stamina:3
  }
}
 
var bey3 = {
  nome:"Doomscizor",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81ZW1YzopML._AC_SL1500_.jpg",
  atributos:{
    Ataque:6,
    Burst:3,
    Defesa:0,
    Peso:4,
    Agilidade:5,
    Stamina:1,
  }
}
var beyMaquina
var beyJogador

var colecaoBeys = [bey1, bey2, bey3]

function sortearCarta(){
  var numeroBeyMaquina = parseInt(Math.random() * 3)
  beyMaquina = colecaoBeys[numeroBeyMaquina]
  
  var numeroBeyJogador = parseInt(Math.random() * 3)
  while (numeroBeyJogador == numeroBeyMaquina){
    numeroBeyJogador = parseInt (Math.random() * 3)
  }
  beyJogador = colecaoBeys[numeroBeyJogador]
  
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  exibirOpcoes()
  exibirImgBey()
}

function exibirImgBey(){
  var imgBey = document.getElementById('imgBey')
  var imgBeyTexto = "<h2>Escolha um dos atributos para derrotar seu oponente:</h2><div class='beyJogador' style float:'left'><br><h2>Seu beyblade</h2><br><img src=" + beyJogador.imagem + " height='180' width='180'></p>" + beyJogador.nome + "</div><div class='beyMaquina' style float:'left'><br><h2>Seu oponente</h2><br><img src=" + beyMaquina.imagem + " height='180' width='180'></p>" + beyMaquina.nome + "</div>"
  console.log(imgBeyTexto)
  imgBey.innerHTML = imgBeyTexto
}

function exibirOpcoes(){
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in beyJogador.atributos){
    opcoesTexto += "<br><br><input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "<br>"
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  if (beyJogador.atributos[atributoSelecionado] > beyMaquina.atributos[atributoSelecionado]){
    alert("Seu Beyblade venceu!")
  } else if (beyJogador.atributos[atributoSelecionado] < beyMaquina.atributos[atributoSelecionado]){
    alert("Seu oponente venceu!")
  } else {
  alert("Empate!")  
  }
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
}
