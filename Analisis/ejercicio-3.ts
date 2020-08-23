class Empleado{
    nombre:string;
    salario:number;

    constructor(name:string,salary:number){
        this.nombre = name;
        this.salario = salary;
    }

    deduccionesSalariales():string{
        var sueldoBase:number = this.salario;
        var afp:number = 0.0645;
        var isss:number = 0.045;
        var renta:number = 0.012;
        var resultado:string=
            `Su suelvo base es de ${this.salario}
            Descuento de afp es de ${this.salario*afp}
            Descuento de iss es de ${this.salario*isss}
            Descuento de renta es de ${this.salario*renta}
            Salario con descuentos es de ${sueldoBase-(this.salario*afp)-(this.salario*isss)-(this.salario*renta)}`;

        return resultado;
    }
}
