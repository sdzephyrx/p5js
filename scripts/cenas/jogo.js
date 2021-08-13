class Jogo{
    constructor(){
        this.indice=0;
        this.mapa=fita.mapa;
    }

    setup(){
        cenario= new Cenario(imagemCenario, 3);
        pontuacao= new Pontuacao();
        vida= new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);

        personagem= new Personagem(matrizPersonagem, imagemPersonagem, 0,30,220,270,220,270);
        const inimigo= new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 104, 104,104, 104, 10);
        const inimigoGrande= new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width*0.5, 0, 400, 400, 350, 350,15);
        const inimigoVoador= new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width*1.5, height*0.5, 200, 150, 180, 125,10);
        
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
        vida.draw();

        personagem.exibe();
        personagem.aplicaGravidade();
        
        circle(mouseX,mouseY,10);
        const linhaAtual= this.mapa[this.indice]
        const inimigo= inimigos[linhaAtual.inimigo];
        const inimigoVisivel= inimigo.x< -inimigo.largura;
        
        inimigo.velocidade=linhaAtual.velocidade;
        
        inimigo.exibe();
        inimigo.move();

        pontuacao.adicionarPonto();
        
        if(inimigoVisivel){
            this.indice++;
            inimigo.aparece();
          if(this.indice> this.mapa.length-1){
            this.indice=0;
          }
        }
        
        if(personagem.estaColidindo(inimigo)){
          vida.perdeVida();
          personagem.tornarInvencivel();
          if(vida.vidas=== 0){
            vida.perdeVida();
            image(imagemGameOver,width/2-200,height/3);
            noLoop();
            somDoJogo.stop();
          }
        }
    }
}