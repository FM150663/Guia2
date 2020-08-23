class Persona{
    first_name:string;
    last_name:string;
    constructor(_first_name?:string,_last_name?:string){
        this.first_name = "_first_name";
        this.last_name = "_last_name";
    }
}

let personaUno = new Persona();
let personaDos = new Persona("Jorge");
let personaTres = new Persona("Jorge","Cano");