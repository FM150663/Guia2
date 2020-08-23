function hello() { }
function setName(name) { }
function setName2(name, surName) {
    return "string";
}
//alcance de una funcion
function setName3(name) {
    var variableInterna = "Ariel";
    return "Hola " + name;
}
//console.log("Hola " + variableinterna);
var variableExterna = "Ariel";
function setName4(name) {
    return "Hola " + name;
}
console.log("Hola " + variableExterna);
