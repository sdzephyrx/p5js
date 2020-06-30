class TelaInicial{
    constructor(){
        
    }

    draw(){
        this._imagemDeFundo();
        this._texto()
    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0,0, width, height);
    }

    _texto(){
        textFont(fonteTelaInicial);
        textSize(50);
        text('Hispta',width/2,height/2);
    }
}