class Rombo{
    diagonalVertical:number;
    diagonalHorizontal:number;

    constructor(vertical:number,horizontal:number){
        this.diagonalHorizontal = horizontal;
        this.diagonalVertical = vertical;
    }
    
    calcularArea(vertical:number,horizontal:number):number{
        return vertical*horizontal;
    }
}