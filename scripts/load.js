function preload() {
    imagemTelaInicial=loadImage('cenario/telainicial.png');
    fonteTelaInicial=loadFont('cenario/fonteTelaInicial.otf');
    imagemCenario = loadImage('cenario/floresta.png');
    imagemGameOver = loadImage('cenario/game-over.png');
    imagemPersonagem = loadImage('personagem/hips.png');
    imagemInimigo = loadImage('inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('inimigos/troll.png');
    imagemInimigoVoador = loadImage('inimigos/gotinha-voadora.png');
    somDoJogo=loadSound('musica/trilha_jogo.mp3');
    somDoPulo=loadSound('musica/somPulo.mp3');
    imagemVida=loadImage('cenario/coracao.png');
    fita=loadJSON('fita/fita.json');
    
  }