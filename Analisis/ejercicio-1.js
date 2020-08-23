var Rombo = /** @class */ (function () {
    function Rombo(vertical, horizontal) {
        this.diagonalHorizontal = horizontal;
        this.diagonalVertical = vertical;
    }
    Rombo.prototype.calcularArea = function (vertical, horizontal) {
        return vertical * horizontal;
    };
    return Rombo;
}());
