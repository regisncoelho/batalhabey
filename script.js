//Origem dos dados: https://www.hasbro.com/common/documents/D83B87D6E2AB4791A7BE48878ECE4410/C43169995F7A45DB8185287943434975.pdf

//https://www.hasbro.com/common/documents/D83B87D6E2AB4791A7BE48878ECE4410/150DCB7597DA4506B8E0899BA79C5338.pdf

document.querySelector("#btnSortear").addEventListener('click', sortearCarta)
document.querySelector("#btnProximaRodada").addEventListener('click', proximaRodada)
document.querySelector("#btnJogar").addEventListener('click', jogar)

//banco de dados

var bey1 = {
  nome:"Kerbeus",
  imagem: "https://i.imgur.com/PGq0MDe.png",
  atributos:{
    Ataque:3,
    Burst:2,
    Defesa:3,
    Peso:3,
    Agilidade:6,
    Stamina:2,
  }
}
 
var bey2 = {
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

var bey3 = {
  nome:"Wyvron",
  imagem: "https://i.imgur.com/ZwjVAE5.png",
  atributos:{
    Ataque:0,
    Burst:2,
    Defesa:8,
    Peso:3,
    Agilidade:4,
    Stamina:2,
  }
}

var bey4 = {
  nome:"Roktavor R2",
  imagem: "https://www.amazon.co.jp/images/I/91%2BJ75cYmWL._AC_SL1500_.jpg",
  atributos:{
    Ataque:1,
    Burst:2,
    Defesa:1,
    Peso:7,
    Agilidade:1,
    Stamina:9,
  }
}

var bey5 = {
  nome:"Spyzen S2",
  imagem: "https://i.imgur.com/YM0Y3G7.png",
  atributos:{
    Ataque:5,
    Burst:2,
    Defesa:2,
    Peso:4,
    Agilidade:3,
    Stamina:5,
  }
}

var bey6 = {
  nome:"Valtryek",
  imagem: "https://static.wikia.nocookie.net/beyga/images/5/5c/B01ValkyrieWingAccel.jpg",
  atributos:{
    Ataque:3,
    Burst:3,
    Defesa:2,
    Peso:4,
    Agilidade:3,
    Stamina:4,
  }
}

var bey7 = {
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

var bey8 = {
  nome:"Spryzen",
  imagem: "https://http2.mlstatic.com/D_NQ_NP_740269-MLB31124421699_062019-O.jpg",
  atributos:{
    Ataque:1,
    Burst:2,
    Defesa:5,
    Peso:6,
    Agilidade:4,
    Stamina:1,
  }
}

var bey9 = {
  nome:"Kerbeus k2",
  imagem: "https://i.imgur.com/bJEBlIC.png",
  atributos:{
    Ataque:0,
    Burst:2,
    Defesa:8,
    Peso:6,
    Agilidade:3,
    Stamina:1,
  }
}

var bey10 = {
  nome:"Valtryek V2",
  imagem: "https://pm1.narvii.com/6440/4d60db991d7d6a6cc04342f6f114ba11a0c61fcc_hq.jpg",
  atributos:{
    Ataque:6,
    Burst:4,
    Defesa:1,
    Peso:2,
    Agilidade:8,
    Stamina:0
  }
}

var bey11 = {
  nome:"Minoboros",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/6/60/M_oq_hasbro.jpg",
  atributos:{
    Ataque:7,
    Burst:3,
    Defesa:0,
    Peso:4,
    Agilidade:5,
    Stamina:0,
  }
}

var bey12 = {
  nome:"Yegdrion",
  imagem: "https://images-americanas.b2w.io/produtos/01/00/img/51900/0/51900042_1GG.jpg",
  atributos:{
    Ataque:1,
    Burst:2,
    Defesa:1,
    Peso:4,
    Agilidade:3,
    Stamina:8,
  }
}

var bey13 = {
  nome:"Unicrest",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/c/c7/U_rd_hasbro_recolor.jpg",
  atributos:{
    Ataque:0,
    Burst:2,
    Defesa:7,
    Peso:5,
    Agilidade:1,
    Stamina:4,
  }
}

var bey14 = {
  nome:"Doomscizor D2",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/beyblade-burst-doomscizor-d2-hasbro/patrulhapresentes/1993p/778af361789006d611cc5284fe7d1b63.jpg",
  atributos:{
    Ataque:6,
    Burst:3,
    Defesa:0,
    Peso:3,
    Agilidade:6,
    Stamina:2,
  }
}

var bey15 = {
  nome:"Wyvron W2",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/5195BhND%2B6L._SX500_SY500_CR,0,0,500,500_.jpg",
  atributos:{
    Ataque:2,
    Burst:2,
    Defesa:7,
    Peso:5,
    Agilidade:2,
    Stamina:2,
  }
}

var bey16 = {
  nome:"Odax",
  imagem: "https://images-americanas.b2w.io/produtos/01/00/img1/48692/7/48692742_1GG.jpg",
  atributos:{
    Ataque:6,
    Burst:3,
    Defesa:2,
    Peso:5,
    Agilidade:2,
    Stamina:1
  }
}

var bey17 = {
  nome:"Horusood",
  imagem: "https://i5.walmartimages.ca/images/Large/118/646/6000201118646.jpg",
  atributos:{
    Ataque:0,
    Burst:2,
    Defesa:3,
    Peso:4,
    Agilidade:3,
    Stamina:7
  }
}

var bey18 = {
  nome:"Nepstrius",
  imagem: "https://static3.tcdn.com.br/img/img_prod/639735/beyblade_com_lancador_hasbro_burst_nepstrius_n2_52_1_696d75f79d9ae21cb6c07f88a34a3d03.jpg",
  atributos:{
    Ataque:5,
    Burst:2,
    Defesa:2,
    Peso:4,
    Agilidade:4,
    Stamina:3
  }
}

var bey19 = {
  nome:"Horusood H2",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/5/5c/H2_uc_hasbro.jpg",
  atributos:{
    Ataque:0,
    Burst:1,
    Defesa:1,
    Peso:5,
    Agilidade:3,
    Stamina:10
  }
}

var bey20 = {
  nome:"Wyvron W2",
  imagem: "https://images-americanas.b2w.io/produtos/01/00/img1/97641/7/97641776_1GG.jpg",
  atributos:{
    Ataque:2,
    Burst:2,
    Defesa:7,
    Peso:5,
    Agilidade:2,
    Stamina:2
  }
}

var bey21 = {
  nome:"Roktavor R2",
  imagem: "https://i5.walmartimages.ca/images/Large/462/437/6000198462437.jpg",
  atributos:{
    Ataque:1,
    Burst:2,
    Defesa:1,
    Peso:7,
    Agilidade:1,
    Stamina:9
  }
}

var bey22 = {
  nome:"Evipero",
  imagem: "https://i.imgur.com/zkOzZXY.jpeg",
  atributos:{
    Ataque:2,
    Burst:2,
    Defesa:7,
    Peso:3,
    Agilidade:5,
    Stamina:0
  }
}

var bey23 = {
  nome:"Odax O2",
  imagem: "https://i.imgur.com/LVIGlPo.png",
  atributos:{
    Ataque:7,
    Burst:3,
    Defesa:2,
    Peso:4,
    Agilidade:5,
    Stamina:0
  }
}

var bey24 = {
  nome:"Betromoth",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/3/3a/B2_hh_hasbro.jpg",
  atributos:{
    Ataque:3,
    Burst:4,
    Defesa:1,
    Peso:6,
    Agilidade:4,
    Stamina:2
  }
}

var bey25 = {
  nome:"Ifritor I2",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/d/d5/I2_ml_hasbro.jpg",
  atributos:{
    Ataque:7,
    Burst:2,
    Defesa:3,
    Peso:3,
    Agilidade:4,
    Stamina:2
  }
}

var bey26 = {
  nome:"Xcalius X2",
  imagem: "https://http2.mlstatic.com/D_NQ_NP_680280-MLB31123427369_062019-O.jpg",
  atributos:{
    Ataque:10,
    Burst:5,
    Defesa:0,
    Peso:3,
    Agilidade:3,
    Stamina:1
  }
}

var bey27 = {
  nome:"Zeutron Z2",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/e/e1/Z2.jpg",
  atributos:{
    Ataque:0,
    Burst:2,
    Defesa:2,
    Peso:8,
    Agilidade:0,
    Stamina:9
  }
}

var bey28 = {
  nome:"Quetziko Q2",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81OkaMO3HsL._AC_SL1500_.jpg",
  atributos:{
    Ataque:1,
    Burst:3,
    Defesa:9,
    Peso:6,
    Agilidade:1,
    Stamina:1      
  }
}

var bey29 = {
  nome:"XCalius",
  imagem: "https://cdn11.bigcommerce.com/s-iodt3qca/images/stencil/1280x1280/products/419/832/s-l1600__19760.1535849634.jpg",
  atributos:{
    Ataque:8,
    Burst:4,
    Defesa:0,
    Peso:2,
    Agilidade:6,
    Stamina:0      
  }
}

var bey30 = {
  nome:"Yegdrion Y2",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/2/27/LayerYegdrionY2.png",
  atributos:{
    Ataque:0,
    Burst:2,
    Defesa:3,
    Peso:6,
    Agilidade:2,
    Stamina:8      
  }
}

var bey31 = {
  nome:"Treptune",
  imagem: "https://cdn11.bigcommerce.com/s-iodt3qca/images/stencil/1280x1280/products/452/881/s-l1600__45563.1536187293.jpg",
  atributos:{
    Ataque:0,
    Burst:2,
    Defesa:1,
    Peso:8,
    Agilidade:1,
    Stamina:7     
  }
  
}

var bey32 = {
  nome:"Evipero E2",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/e/ee/E2_he_hasbro.jpg",
  atributos:{
    Ataque:1,
    Burst:2,
    Defesa:3,
    Peso:6,
    Agilidade:4,
    Stamina:4      
  }
  
}

var bey33 = {
  nome:"Gaianon G2",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/8/84/G2_qf_hasbro_no_outline.png",
  atributos:{
    Ataque:6,
    Burst:2,
    Defesa:3,
    Peso:5,
    Agilidade:2,
    Stamina:2      
  }
  
}

var bey34 = {
  nome:"Jormuntor J2",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/6/67/J2_i_cy_hasbro.jpg",
  atributos:{
    Ataque:1,
    Burst:2,
    Defesa:2,
    Peso:4,
    Agilidade:3,
    Stamina:9     
  }
  
}

var bey35 = {
  nome:"Fengriff F2",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/2/25/F2_bj_hasbro.jpg",
  atributos:{
    Ataque:5,
    Burst:2,
    Defesa:2,
    Peso:3,
    Agilidade:7,
    Stamina:1      
  }
}

var bey36 = {
  nome:"Neptrius N2",
  imagem: "https://static.wikia.nocookie.net/beyblade/images/e/ec/N2_vz_hasbro_recolor.jpg",
  atributos:{
    Ataque:5,
    Burst:2,
    Defesa:2,
    Peso:4,
    Agilidade:4,
    Stamina:3      
  }
}
    
//-->
    
    
    
//cria as vari??veis para os beyblades que ser??o lan??ados e seus jogadores
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
  nome:"Player 2",
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos: 0
}

//estabelece a array contendo o banco de dados
var colecaoBeys = [bey1, bey2, bey3, bey4, bey5, bey6, bey7, bey8, bey9, bey10, bey11, bey12, bey13, bey14, bey15, bey16, bey17, bey18, bey19, bey20, bey21, bey22, bey23, bey24, bey25, bey26, bey27, bey28, bey29, bey30, bey31, bey32, bey33, bey34, bey34, bey35, bey36]
//-->

//inicia o jogo
function sortearCarta(){
  
//sorteia beyblade para m??quina e depois para o jogador
  var numeroBeyMaquina = parseInt(Math.random() * colecaoBeys.length)
  beyMaquina = colecaoBeys[numeroBeyMaquina]
  
  var numeroBeyJogador = parseInt(Math.random() * colecaoBeys.length)
  while (numeroBeyJogador == numeroBeyMaquina){
    numeroBeyJogador = parseInt (Math.random() * colecaoBeys.length)
  }
  beyJogador = colecaoBeys[numeroBeyJogador]
//-->
  
// // apaga resultados anteriores
//   var imgBey = document.getElementById('imgBey')
//   imgBey.innerHTML = ""
//   var divResultado = document.getElementById("resultado")
//   divResultado.innerHTML = ""
// //-->
 
 //habilita bot??o jogar e desabilita sortear
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  document.getElementById('btnProximaRodada').disabled = true
  document.querySelector(".game-area").classList.toggle("invisible")

  if (document.querySelector(".game-score").classList.contains("invisible")){
    document.querySelector(".game-score").classList.toggle("invisible")
  }
  
  
 //chama fun????es associadas
  exibirImgBey()
  exibirTabelaPontos()
  exibirOpcoes()

}


//exibe os beyblades sorteados no documento e os identifica
function exibirImgBey(){
  document.querySelector(".player1").insertAdjacentHTML("afterbegin","<img src=" + beyJogador.imagem + " height='180' width='180'><br><p style='font-size:1.25em;font-style:italic;margin:0.4em'>" + beyJogador.nome + "</span></p>")
  document.querySelector(".player2").insertAdjacentHTML("afterbegin","<img src=" + beyMaquina.imagem + " height='180' width='180'><br><p style='font-size:1.25em;font-style:italic;margin:0.4em'>" + beyMaquina.nome + "</span></p>")
}

function clearScore() {
  while (document.querySelector(".player-score").lastElementChild) {
    document.querySelector(".player-score").removeChild(document.querySelector(".player-score").firstChild)
  }
  while (document.querySelector(".machine-score").lastElementChild) {
    document.querySelector(".machine-score").removeChild(document.querySelector(".machine-score").firstChild) 
  }
}
//exibe tabela de pontos no documento e calcula pontos
function exibirTabelaPontos() {
  clearScore()
  document.querySelector(".player-score").insertAdjacentHTML("afterbegin","<b><u>" + jogador.nome + "</u></b><br><br>" + "Vit??rias: " + jogador.vitorias + " <br>" +  "Empates: " + jogador.empates + " <br>"  + "Derrotas: " + jogador.derrotas + " <br><br><b>Pontos: " + jogador.pontos + "</b>")
  document.querySelector(".machine-score").insertAdjacentHTML("afterbegin","<b><u>" + maquina.nome + "</u></b><br><br>" + "Vit??rias: " + maquina.vitorias + " <br>" +  "Empates: " + maquina.empates + " <br>"  + "Derrotas: " + maquina.derrotas + " <br><br><b>Pontos: " + maquina.pontos + "</b>")
}
  
function exibirOpcoes(){
  opcoesTexto = ""
  for (var atributo in beyJogador.atributos){
   opcoesTexto = "<div><input type='checkbox' name='atributo' value='" + atributo + "'>" + atributo + "</div>"
   document.querySelector(".game-atributes").insertAdjacentHTML("afterbegin", opcoesTexto)
  }
  if (document.querySelector(".game-atributes").classList.contains("empty")) {
     document.querySelector(".game-atributes").classList.toggle("empty")
   }
  
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
    document.querySelector(".game-result").insertAdjacentText("afterbegin",'VENCEU!')
    document.querySelector(".game-result").style.backgroundColor = "#40C4FF"
        playVenceu()
        jogador.vitorias++
        maquina.derrotas++
        jogador.pontos += 3
        
  } else if (beyJogador.atributos[atributoSelecionado] < beyMaquina.atributos[atributoSelecionado]){
    document.querySelector(".game-result").insertAdjacentText("afterbegin",'PERDEU')
        playPerdeu()
        maquina.vitorias++
        jogador.derrotas++
        maquina.pontos += 3
  } else {
    document.querySelector(".game-result").insertAdjacentText("afterbegin",'EMPATOU')
    document.querySelector(".game-result").style.backgroundColor = "#ffa775"
        playEmpatou()
        maquina.empates++
        jogador.empates++
        maquina.pontos++
        jogador.pontos++
  }
  exibirBeyAtributos()
  jogadas++
  
  document.querySelector(".game-atributes").classList.toggle("empty")
  document.querySelector(".game-result").classList.toggle("empty")
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = false
  }

function exibirBeyAtributos() { 
  var revelaTextoJogador = ""
  for (var atributo in beyJogador.atributos){
  revelaTextoJogador += "<span style='font-weight: 400'>" + atributo + "</span>: " + beyJogador.atributos[atributo] + "<br>"
  }
  var revelaTextoMaquina = ""
  for (var atributo in beyMaquina.atributos){
  revelaTextoMaquina += "<span style='font-weight: 400'>" + atributo + "</span>: " + beyMaquina.atributos[atributo] + "<br>"
  }
  
  document.querySelector(".player1").insertAdjacentHTML("beforeend", revelaTextoJogador)
  document.querySelector(".player2").insertAdjacentHTML("beforeend", revelaTextoMaquina)  
}

function clearPrevious() { 
  clearScore()

  while (document.querySelector(".player1").lastElementChild) {
    document.querySelector(".player1").removeChild(document.querySelector(".player1").firstChild)
  }
  while (document.querySelector(".player2").lastElementChild) {
    document.querySelector(".player2").removeChild(document.querySelector(".player2").firstChild)
  }
  while (document.querySelector(".game-result").lastElementChild) {
    document.querySelector(".game-result").removeChild(document.querySelector(".game-result").firstChild)
  }
  while (document.querySelector(".game-atributes").lastElementChild) {
    document.querySelector(".game-atributes").removeChild(document.querySelector(".game-atributes").firstChild)
  }
  document.querySelector(".game-result").textContent = ''
  document.querySelector(".game-result").classList.toggle("empty")
  document.querySelector(".game-atributes").classList.toggle("empty")
  document.querySelector(".game-area").classList.toggle("invisible")
}

function proximaRodada () {
  clearPrevious()
  exibirTabelaPontos()
  playSomaPontos()
var divResultado = document.getElementById("resultado")
 if (jogadas < 5) {  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
   
 } else {
  document.querySelector(".game-result").classList.toggle("empty");
  document.querySelector(".game-area").classList.toggle("invisible");
  document.querySelector(".game-instruction").classList.toggle("empty");
  document.querySelector(".game-atributes").classList.toggle("empty");
  document.querySelector(".parcial1").classList.toggle("empty");
  document.querySelector(".parcial2").classList.toggle("empty")
  if (jogador.pontos > maquina.pontos) {
      document.querySelector(".game-result").insertAdjacentHTML("afterbegin","<b>FIM DO JOGO</b><br><br><u>" + jogador.nome + "</u> venceu <br><br><button type='button' id='btnJogar' onclick='restart()''>Recome??ar</button><br>")
      document.querySelector(".game-result").style.backgroundColor = "#40C4FF"
  } else if (maquina.pontos > jogador.pontos) {
      document.querySelector(".game-result").insertAdjacentHTML("afterbegin","<b>FIM DO JOGO</b><br><br><u>" + maquina.nome + "</u> venceu <br><br><button type='button' id='btnJogar' onclick='restart()'>Recome??ar</button><br>")
      document.querySelector(".game-result").style.backgroundColor = "#e8475f"
  } else {
      document.querySelector(".game-result").insertAdjacentHTML("afterbegin","<b>FIM DO JOGO</b><br><br><u>" + jogador.nome + "</u> e <u>" + maquina.nome + "</u> empataram <br><br>" + "<button type='button' id='btnJogar' onclick='restart()'>Recomer??ar</button><br>")
      document.querySelector(".game-result").style.backgroundColor = "#ffa775"
  }
  document.querySelector(".game-result").style.width  = "500px"
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

//Fun????o para tocar audio//
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