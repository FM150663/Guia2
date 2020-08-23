var Empleado = /** @class */ (function () {
    function Empleado(name, salary) {
        this.nombre = name;
        this.salario = salary;
    }
    Empleado.prototype.deduccionesSalariales = function () {
        var sueldoBase = this.salario;
        var afp = 0.0645;
        var isss = 0.045;
        var renta = 0.012;
        var resultado = "Su suelvo base es de " + this.salario + "\n            Descuento de afp es de " + this.salario * afp + "\n            Descuento de iss es de " + this.salario * isss + "\n            Descuento de renta es de " + this.salario * renta + "\n            Salario con descuentos es de " + (sueldoBase - (this.salario * afp) - (this.salario * isss) - (this.salario * renta));
        return resultado;
    };
    return Empleado;
}());
