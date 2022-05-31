// RegEx = Regular expressions son una manera de buscar a traves de un string.
// https://regexr.com/

const string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus ligula efficitur ut porttitor sit amet, molestie ut lorem. Cras iaculis elementum ante. Quisque libero odio"


let regularExpression = new RegExp("lorem", "ig");

let regularExpression2 = /lorem/ig;

console.log(regularExpression2.test(string));
console.log(regularExpression2.exec(string));