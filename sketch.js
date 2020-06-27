let imagemCenario;
let imagemGameOver;
let cenario;
let pontuacao;

let imagemPersonagem;
let personagem;
let imagemInimigo;
let inimigo;
let imagemInimigoGrande;
let inimigoGrande;
let imagemInimigoVoador;
let inimigoVoador;


let somDoJogo;
let somDoPulo;


const matrizInimigo=[[0, 0],[104, 0],[208, 0],[312, 0],[0, 104],[104, 104],[208, 104],[312, 104],[0, 208],[104, 208],[208, 208],[312, 208],[0, 312],[104, 312],[208, 312],[312, 312],[0, 418],[104, 418],[208, 418],[312, 418],[0, 522],[104, 522],[208, 522],[312, 522],[0, 626],[104, 626],[208, 626],[312, 626]];
const matrizPersonagem=[[0,0],[220,0],[440,0],[660,0],[0,540],[220,540],[440,540],[660,540],[0,810],[220,810],[440,810],[660,810]];
const matrizInimigoGrande=[[0,0],[400,0],[800,0],[1200,0],[1600,0],[0,400],[400,400],[800,400],[1200, 400],[1600, 400],[0,800],[400, 800],[800, 800],[1200, 800],[1600, 800],[0, 1200],[400, 1200],[800, 1200],[1200, 1200],[1600, 1200], [0, 1600],[400, 1600],[800, 1600],[1200, 1600],[1600, 1600],[0, 2000],[400, 2000],[800, 2000]];
const matrizInimigoVoador=[[0,0],[200, 0],[400, 0],[0, 150],[200, 150],[400, 150],[0, 300],[200, 300],[400, 300],[0, 450],[200, 450],[400, 450],[0, 600],[200, 600],[400, 600],[0, 750]];

const inimigos=[];

function preload() {
  imagemCenario = loadImage('/cenario/floresta.png');
  imagemGameOver = loadImage('/cenario/game-over.png');
  imagemPersonagem = loadImage('/personagem/hips.png');
  imagemInimigo = loadImage('/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('/inimigos/troll.png');
  imagemInimigoVoador = loadImage('/inimigos/gotinha-voadora.png');
  somDoJogo=loadSound('/musica/trilha_jogo.mp3');
  somDoPulo=loadSound('/musica/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  cenario= new Cenario(imagemCenario, 3);
  pontuacao= new Pontuacao();
  
  personagem= new Personagem(matrizPersonagem, imagemPersonagem, 0,30,220,270,220,270);
  const inimigo= new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 104, 104,104, 104, 10, 100);
  const inimigoGrande= new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width*2, 0, 400, 400, 350, 350,10,2000);
  const inimigoVoador= new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width*1.5, height*0.5, 200, 150, 180, 125,10,1000);
  
  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
  
  frameRate(40);
  somDoJogo.loop();
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    somDoPulo.play();
  }
}

function mousePressed(){
    personagem.pula();
    somDoPulo.play();
}

function draw() {
  cenario.exibe();
  cenario.move();
  pontuacao.exibe();

  personagem.exibe();
  personagem.aplicaGravidade();
  
  circle(mouseX,mouseY,10);
  
  inimigos.forEach(inimigo=>{
    inimigo.exibe();
    inimigo.move();
    pontuacao.adicionarPonto();
    
    
    if(personagem.estaColidindo(inimigo)){
      image(imagemGameOver,width/2-200,height/3)
      //console.log('Hit');
      //pontuacao.pontos-=10;
      noLoop();
      somDoJogo.stop();
      
    }

  }); 
}