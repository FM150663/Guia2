/*Function color(value:string){
    fabric return function(target){

    }
}*/

class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }

    @enumerable(false)
    greet(){
        return "Hey, " + this.greeting;
    }
}

function enumerable(value:boolean){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        descriptor.enumerable = value;
    };
}

let greet = new Greeter("Soy el mensaje");
console.log(greet.greet());