//exibe imagem na div imagemBeyInicial
var imagemInicial = document.getElementById('imagemBeyInicial')
imagemInicialTexto = "<img src='https://lat.beyblade.com/wp-content/uploads/2018/11/S1-BB_Valt_Bey66-1.png' class='beyInicial'/>"
imagemInicial.innerHTML = imagemInicialTexto


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
var jogadas = 0
var jogador = {
  nome:"Player 1",
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos: 0
}
var maquina = {
  nome:"CPU",
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos: 0
}

//estabelece a array contendo o banco de dados
var colecaoBeys = [bey1, bey2, bey3]
//-->

//inicia o jogo
function sortearCarta(){
  
//sorteia beyblade para máquina e depois para o jogador
  var numeroBeyMaquina = parseInt(Math.random() * colecaoBeys.length)
  beyMaquina = colecaoBeys[numeroBeyMaquina]
  
  var numeroBeyJogador = parseInt(Math.random() * colecaoBeys.length)
  while (numeroBeyJogador == numeroBeyMaquina){
    numeroBeyJogador = parseInt (Math.random() * colecaoBeys.length)
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
  document.getElementById('btnProximaRodada').disabled = true
  
 //chama funções associadas
  exibirImgBey()
  exibirOpcoes() 
  exibirTabelaPontos()
  
}

//exibe os beyblades sorteados no documento e os identifica
function exibirImgBey(){
  var imgBey = document.getElementById('imgBey')
  var imgBeyTexto = "<h2>Escolha um dos atributos para derrotar seu oponente:</h2><div class='beyJogador' style float:'left'><h2>Seu beyblade</h2><p class='nomeBey'><img src=" + beyJogador.imagem + " height='180' width='180'><br>" + beyJogador.nome + "</p></div><div class='beyMaquina' style float:'left'><h2>Seu oponente</h2><p class='nomeBey'><img src=" + beyMaquina.imagem + " height='180' width='180'><br>" + beyMaquina.nome + "</p></div>"
  
  imgBey.innerHTML = imgBeyTexto
}

//exibe tabela de pontos no documento e calcula pontos
function exibirTabelaPontos() {
  var imagemInicial = document.getElementById('imagemBeyInicial')
  imagemInicialTexto =  "<p class='nomeBey'><b><u>" + jogador.nome + "</u></b><br><br>" + "Vitórias: " + jogador.vitorias + " <br>" +  "Empates: " + jogador.empates + " <br>"  + "Derrotas: " + jogador.derrotas + " <br><br><b>Pontos: " + jogador.pontos + "</b></p>" +  "<p class='nomeBey'><b><u>" + maquina.nome + "</u></b><br><br>" + "Vitórias: " + maquina.vitorias + " <br>" +  "Empates: " + maquina.empates + " <br>"  + "Derrotas: " + maquina.derrotas + " <br><br><b>Pontos: " + maquina.pontos + "</b></p>"
  imagemInicial.innerHTML = imagemInicialTexto
  
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
        jogador.vitorias++
        maquina.derrotas++
        jogador.pontos += 3
        
  } else if (beyJogador.atributos[atributoSelecionado] < beyMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Escolheu: '+ atributoSelecionado + '<br><BR>PERDEU</p>'
        playPerdeu()
        maquina.vitorias++
        jogador.derrotas++
        maquina.pontos += 3
        
        
        
  } else {
        htmlResultado = '<p class="resultado-final">Escolheu: '+ atributoSelecionado + '<br><BR>EMPATOU</p>'
        playEmpatou()
        maquina.empates++
        jogador.empates++
        maquina.pontos++
        jogador.pontos++
        
  }
  exibirBeyAtributos()
  jogadas++
  
  opcoes.innerHTML = ""
  divResultado.innerHTML = htmlResultado
  
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = false
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

function proximaRodada () {
  playSomaPontos()
  exibirTabelaPontos()
 var divResultado = document.getElementById("resultado")
 if (jogadas < 5) {
 var divArea = document.getElementById('areajogo')
 divArea.innerHTML = `<div class="imgBey" id="imgBey"></div>
      <div class="opcoes" id="opcoes"></div> <button type="button" id="btnJogar" onclick="jogar()" disabled="false">Batalhar</button>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
 
// apaga resultados anteriores
  var imgBey = document.getElementById('imgBey')
  imgBey.innerHTML = ""
  
  divResultado.innerHTML = ""
//-->
   
 } else {
    if (jogador.pontos > maquina.pontos) {
      htmlResultado = '<p class="resultado-final"><b>FIM DO JOGO</b><br><br><u>' + jogador.nome + '</u> venceu</p><br>' + '<button type="button" id="btnJogar" onclick="restart()">Recomeçar</button>'
    } else if (maquina.pontos > jogador.pontos) {
      htmlResultado = '<p class="resultado-final"><b>FIM DO JOGO</b><br><br><u>' + maquina.nome + '</u> venceu</p><br>' + '<button type="button" id="btnJogar" onclick="restart()">Recomeçar</button>'
    } else {
      htmlResultado = '<p class="resultado-final"><b>FIM DO JOGO</b><br><br><u>' + jogador.nome + '</u> e <u>' + maquina.nome + '</u> empataram</p><br>' + '<button type="button" id="btnJogar" onclick="restart()">Recomerçar</button>'
    
    }
  var imgBey = document.getElementById('imgBey')
  imgBey.innerHTML = ""
  
  divResultado.innerHTML = htmlResultado
   
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
 
}

  
}

function restart (){
   var divArea = document.getElementById('areajogo')
 divArea.innerHTML = `<div class="imgBey" id="imgBey"></div>
      <div class="opcoes" id="opcoes"></div> <button type="button" id="btnJogar" onclick="jogar()" disabled="false">Batalhar</button>`
  
 var divResultado = document.getElementById('resultado')
 divResultado.innerHTML = `<div id="resultado"></div>
      </div>`
  
 var imagemInicial = document.getElementById('imagemBeyInicial')
imagemInicialTexto = "<img src='https://lat.beyblade.com/wp-content/uploads/2018/11/S1-BB_Valt_Bey66-1.png' class='beyInicial'/>"
imagemInicial.innerHTML = imagemInicialTexto
  
  jogadas = 0
  jogador.vitorias = 0
  jogador.derrotas = 0
  jogador.empates = 0
  jogador.pontos = 0
  maquina.vitorias = 0
  maquina.derrotas = 0
  maquina.empates = 0
  maquina.pontos = 0
    
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
 
}

//Função para tocar audio//
function playSomaPontos() {
  var audio = new Audio('https://freesound.org/data/previews/341/341695_5858296-lq.mp3');
  audio.play()
}

function playVenceu() {
  var audio = new Audio('https://freesound.org/data/previews/505/505717_10988668-lq.mp3');
  audio.play();
}

function playPerdeu() {
  var audio = new Audio('https://freesound.org/data/previews/178/178875_1400623-lq.mp3');
  audio.play();
}

function playEmpatou() {
  var audio = new Audio('https://freesound.org/data/previews/142/142608_1840739-lq.mp3');
  audio.play();
}