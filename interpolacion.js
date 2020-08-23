var a = "Ariel";
var b = 'Saludos a ti ${this.a},';
console.log(b);
function getSaludo() {
    var emojis = '(⌐■_■)';
    return "Saludos\n        " + this.last_name + ", " + this.first_name + "\n        Le enviamos un saludo desde la consola!\n        " + emojis + "\n    ";
}
