//exibe imagem na div imagemBeyInicial
//var imagemInicial = document.getElementById('imagemBeyInicial')
//imagemInicialTexto = "<img src='https://lat.beyblade.com/wp-content/uploads/2018/11/S1-BB_Valt_Bey66-1.png' class='beyInicial'/>"
//imagemInicial.innerHTML = imagemInicialTexto
//-->

//banco de dados
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
//-->

//cria as variáveis para os beyblades que serão lançados e seus jogadores
var beyMaquina
var beyJogador
var jogador = {
  nome:"Player 1",
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos: 0
}
var maquina = {
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos: 0
}
jogador.pontos = calculaPontos(jogador)
maquina.pontos = calculaPontos(maquina)

var jogadores = [jogador,maquina]

//estabelece a array contendo o banco de dados
var colecaoBeys = [bey1, bey2, bey3]
//-->


//inicia o jogo
function sortearCarta(){

//sorteia beyblade para máquina e depois para o jogador
  var numeroBeyMaquina = parseInt(Math.random() * 3)
  beyMaquina = colecaoBeys[numeroBeyMaquina]
  
  var numeroBeyJogador = parseInt(Math.random() * 3)
  while (numeroBeyJogador == numeroBeyMaquina){
    numeroBeyJogador = parseInt (Math.random() * 3)
  }
  beyJogador = colecaoBeys[numeroBeyJogador]
//-->
  
// apaga resultados anteriores
  var imgBey = document.getElementById('imgBey')
  imgBey.innerHTML = ""
  var divResultado = document.getElementById("resultado")
  divResultado.innerHTML = ""
//-->
 
 //habilita botão jogar e desabilita sortear
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
 //chama funções associadas
  exibirImgBey()
 // exibirTabelaPontos()
  exibirOpcoes() 
}

//exibe os beyblades sorteados no documento e os identifica
function exibirImgBey(){
  var imgBey = document.getElementById('imgBey')
  var imgBeyTexto = "<h2>Escolha um dos atributos para derrotar seu oponente:</h2><div class='beyJogador' style float:'left'><h2>Seu beyblade</h2><p class='nomeBey'><img src=" + beyJogador.imagem + " height='180' width='180'><br>" + beyJogador.nome + "</p></div><div class='beyMaquina' style float:'left'><h2>Seu oponente</h2><p class='nomeBey'><img src=" + beyMaquina.imagem + " height='180' width='180'><br>" + beyMaquina.nome + "</p></div>"
  
  imgBey.innerHTML = imgBeyTexto
}



//exibe tabela de pontos no documento e calcula pontos
//function exibirTabelaPontos() {
  //  var html = ""
  //for(var i = 0; i < jogadores.length; i++){
    //html += "<tr><td>" + jogadores[i].nome + "</td>"
//    html += "<td>" + jogadores[i].vitorias + "</td>"
  //  html += "<td>" + jogadores[i].empates + "</td>"
    //html += "<td>" + jogadores[i].derrotas + "</td>"
//    html += "<td>" + jogadores[i].pontos + "</td></tr>"
  //   }
//  var tabelaJogadores = document.getElementById("tabelaJogadores")
//  tabelaJogadores.innerHTML = html
//}
  
function adicionarVitoria(i){
  jogadores.vitorias++
  jogadores.pontos = calculaPontos(jogador)
  exibirTabelaPontos()
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirTabelaPontos()
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibirTabelaPontos()
}

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates + (jogador.derrotas *(-1))
  return pontos
}


function exibirOpcoes(){
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in beyJogador.atributos){
    opcoesTexto += "<br><br><input type='checkbox' name='atributo' value='" + atributo + "'>" + atributo + "<br>"
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
  var divResultado = document.getElementById("resultado")
    if (beyJogador.atributos[atributoSelecionado] > beyMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Escolheu: '+ atributoSelecionado + '<br><BR>VENCEU!</p>' 
        playVenceu()
        exibirBeyAtributos()
        //adicionarVitoria(i)
  } else if (beyJogador.atributos[atributoSelecionado] < beyMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Escolheu: '+ atributoSelecionado + '<br><BR>PERDEU</p>'
        playPerdeu()
        exibirBeyAtributos()
        //adicionarDerrota(i)
  } else {
        htmlResultado = '<p class="resultado-final">Escolheu: '+ atributoSelecionado + '<br><BR>EMPATOU</p>'
        playEmpatou()
        exibirBeyAtributos()
        //adicionarEmpate(i)
  }
  opcoes.innerHTML = ""
  divResultado.innerHTML = htmlResultado
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  
 //opcoes.innerHTML = ""
 //imgBey.innerHTML = ""
}

function exibirBeyAtributos(){
  var atributoSelecionado = obtemAtributoSelecionado()
  var imgBey = document.getElementById('imgBey')
  
  var revelaTextoJogador = ""
  for (var atributo in beyJogador.atributos){
  revelaTextoJogador += "<i>" + atributo + "</i>: <b>" + beyJogador.atributos[atributo] + "</b><br>"
  }
  var revelaTextoMaquina = ""
  for (var atributo in beyMaquina.atributos){
  revelaTextoMaquina += "<i>" + atributo + "</i>: <b>" + beyMaquina.atributos[atributo] + "</b><br>"
  }
  
  var imgBeyTexto = "<h2>Escolha um dos atributos para derrotar seu oponente:</h2><div class='beyJogador' style float:'left'><h2>Seu beyblade</h2><p class='nomeBey'><img src=" + beyJogador.imagem + " height='180' width='180'><br><b>" + beyJogador.nome + "</b><br><br>" + revelaTextoJogador + "</p></div><div class='beyMaquina' style float:'left'><h2>Seu oponente</h2><p class='nomeBey'><img src=" + beyMaquina.imagem + " height='180' width='180'><br><b>" + beyMaquina.nome + "</b><br><br>" + revelaTextoMaquina + "</p></div>"
  
  imgBey.innerHTML = imgBeyTexto
  
}

//Função para tocar audio//
function playVenceu() {
  var audio = new Audio('https://freesound.org/data/previews/505/505717_10988668-lq.mp3');
  audio.play();
}

function playPerdeu() {
  var audio = new Audio('https://freesound.org/data/previews/178/178875_1400623-lq.mp3');
  audio.play();
}

function playVenceu() {
  var audio = new Audio('https://freesound.org/data/previews/505/505717_10988668-lq.mp3');
  audio.play();
}

function playEmpatou() {
  var audio = new Audio('https://freesound.org/data/previews/142/142608_1840739-lq.mp3');
  audio.play();
}