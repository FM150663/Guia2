function hello():void{}

function setName(name:string):void{}

function setName2(name:string,surName:string):string{
    return "string";
}

//alcance de una funcion
function setName3(name:string):string{
    var variableInterna:string = "Ariel";

    return "Hola "+name;
}

//console.log("Hola " + variableinterna);

var variableExterna:string = "Ariel";
function setName4(name:string):string{
    return "Hola " + name;
}
console.log("Hola " + variableExterna);