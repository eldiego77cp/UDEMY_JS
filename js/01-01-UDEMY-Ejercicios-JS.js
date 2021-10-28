// Operador ternario (if/else abreviado)
let edad = 27;

let resultado = (edad >= 18) ? "Puede Votar" : "No puede votar. Es menor de 18 años";
console.log(resultado);

// Operador ternario combinado
let miNumero = "18";

let edad2 = Number(miNumero); 
console.log( edad2 );

let resultado2 = (edad2 >= 18)? "Puede votar" : "Muy joven para votar";
console.log( resultado2 ); 

let pruebaNumero = (isNaN(edad2)) ? "No es un Número" : resultado2;
console.log( pruebaNumero ); 

