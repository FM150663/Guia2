var a:string = "Ariel";
var b = 'Saludos a ti ${this.a},';
console.log(b);

function getSaludo():string{
    let emojis = '(⌐■_■)';
    
    return `Saludos
        ${this.last_name}, ${this.first_name}
        Le enviamos un saludo desde la consola!
        ${emojis}
    `;
}