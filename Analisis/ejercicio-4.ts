class Calculadora{
    numero1:number;
    numero2:number;

    constructor(_numero1,_numero2){
        this.numero1=_numero1;
        this.numero2=_numero2;
    }

    operacionesBasicas(operador:string):number{
        var resultado:number;
        switch(operador){
            case "+":
                resultado=this.numero1+this.numero2;
                break;
            case "-":
                resultado=this.numero1-this.numero2;
                break;
            case "*":
                resultado=this.numero1*this.numero2;
                break;
            case "/":
                resultado=this.numero1/this.numero2;
                break;
            default:
                resultado = 0;
                break;
        }
        return resultado;
    }
}