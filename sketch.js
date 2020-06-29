
function setup() {
  createCanvas(windowWidth,windowHeight);
  jogo= new Jogo();
  jogo.setup();
  frameRate(40);
  somDoJogo.loop();
}

jogo.keyPressed(key);

function mousePressed(){
    personagem.pula();
}

function draw() {
  cenario.exibe();
  cenario.move();
  pontuacao.exibe();

  personagem.exibe();
  personagem.aplicaGravidade();
  
  circle(mouseX,mouseY,10);

  const inimigo= inimigos[inimigoAtual];
  const inimigoVisivel= inimigo.x< -inimigo.largura;
  
  inimigo.exibe();
  inimigo.move();
  pontuacao.adicionarPonto();
  
  if(inimigoVisivel){
    inimigoAtual++;

    if(inimigoAtual.lenght){
      inimigoAtual=0;
    }
    inimigo.velocidade=parseInt(random(20,40));
  }
  
  if(personagem.estaColidindo(inimigo)){
    image(imagemGameOver,width/2-200,height/3)
    //console.log('Hit');
    //pontuacao.pontos-=10;
    noLoop();
    somDoJogo.stop();
  }

}