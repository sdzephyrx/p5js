class Jogo{
    constructor(){
        this.inimigoAtual=0;
    }

    setup(){
        cenario= new Cenario(imagemCenario, 3);
        pontuacao= new Pontuacao();
        
        personagem= new Personagem(matrizPersonagem, imagemPersonagem, 0,30,220,270,220,270);
        const inimigo= new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 104, 104,104, 104, 10, 100);
        const inimigoGrande= new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width*2, 0, 400, 400, 350, 350,15,100);
        const inimigoVoador= new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width*1.5, height*0.5, 200, 150, 180, 125,10,100);
        
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(key){
        if(key === 'ArrowUp'){
            personagem.pula();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();
        pontuacao.exibe();
      
        personagem.exibe();
        personagem.aplicaGravidade();
        
        circle(mouseX,mouseY,10);
      
        const inimigo= inimigos[this.inimigoAtual];
        const inimigoVisivel= inimigo.x< -inimigo.largura;
        
        inimigo.exibe();
        inimigo.move();
        pontuacao.adicionarPonto();
        
        if(inimigoVisivel){
            this.inimigoAtual++;
      
          if(this.inimigoAtual.lenght){
            this.inimigoAtual=0;
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
}