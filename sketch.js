function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo= new Jogo();
  telaInicial= new TelaInicial();
  jogo.setup();
  cenas= {
    jogo,
    telaInicial
  };
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw(){
  cenas[cenaAtual].draw();
}

function mousePressed(){
  personagem.pula();
}