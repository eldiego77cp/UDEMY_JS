// Operador ternario (if/else abreviado)
let edad = 27;

let resultado = (edad >= 18) ? "Puede Votar" : "No puede votar. Es menor de 18 años";
console.log(resultado);

// Operador ternario combinado ()
let miNumero = "18";

let edad2 = Number(miNumero); 
console.log( edad2 );

let resultado2 = (edad2 >= 18)? "Puede votar" : "Muy joven para votar";
console.log( resultado2 ); 

let pruebaNumero = (isNaN(edad2)) ? "No es un Número" : resultado2;
console.log( pruebaNumero ); 

// Ejercicio de momento del día

/*  6 - 12 (Buenos Días)
   12 - 18 (Buenos Tardes)
   18 - 24 (Buenos Noches)
    0 - 6 (Durmiendo)
*/

let hora = 24;

if (hora >=0 && hora <6) {
    console.log("Durmiendo")
}
else if(hora >=6 && hora <12) {
    console.log("Buenos Días")
}
else if(hora >=12 && hora <18) {
    console.log("Buenas Tardes")
}
else if(hora >=18 && hora <24) {
    console.log("Buenas Noches")
}
else {
    console.log("Hora Incorrecta")
}

/* Ejercicio estaciones del año con Switch (la comparación de switch es estricta, es decir
que compara tanto el valor asignado como el tipo de dato) */

let mes = 1;

switch (mes) {
    case 1: case 2: case 3:
        console.log("Verano")
        break;
    case 4: case 5: case 6:
        console.log("Otoño")
        break;
    case 7: case 8: case 9:
        console.log("Invierno")
        break;
    case 10: case 11: case 12:
        console.log("Primavera")
        break;
    default:
        console.log("Caso no encontrado")
        break;
}