class TelaInicial{
    constructor(){
        
    }

    draw(){
        this._imagemDeFundo();
        this._texto()
        this._butao();
    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0,0, width, height);
    }

    _texto(){
        textFont(fonteTelaInicial);
        textSize(100);     
        textAlign(CENTER);   
        text('Hispta',windowWidth/2,windowHeight/2);
    }

    _butao(){
        botaoGerenciador.y=height/7*5;
        botaoGerenciador.draw();
    }
}