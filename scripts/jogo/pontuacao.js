class Pontuacao{
  constructor(){
    this.pontos=0;
  }
  
  exibe(){
    textAlign(LEFT)
    textSize(50);
    text(this.pontos, width*0.1, 50);
  }
  
  adicionarPonto(){
    this.pontos+=1;
  }
  
}