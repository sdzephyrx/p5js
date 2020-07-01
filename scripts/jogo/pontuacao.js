class Pontuacao{
  constructor(){
    this.pontos=0;
  }
  
  exibe(){
    textAlign(RIGHT)
    textSize(50);
    text(this.pontos, width*0.9, 50);
  }
  
  adicionarPonto(){
    this.pontos+=1;
  }
  
}