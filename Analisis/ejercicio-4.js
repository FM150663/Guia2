var Calculadora = /** @class */ (function () {
    function Calculadora(_numero1, _numero2) {
        this.numero1 = _numero1;
        this.numero2 = _numero2;
    }
    Calculadora.prototype.operacionesBasicas = function (operador) {
        var resultado;
        switch (operador) {
            case "+":
                resultado = this.numero1 + this.numero2;
                break;
            case "-":
                resultado = this.numero1 - this.numero2;
                break;
            case "*":
                resultado = this.numero1 * this.numero2;
                break;
            case "/":
                resultado = this.numero1 / this.numero2;
                break;
            default:
                resultado = 0;
                break;
        }
        return resultado;
    };
    return Calculadora;
}());
