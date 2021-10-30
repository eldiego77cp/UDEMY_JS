let mes = 12;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}
else if( mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}
else if( mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Verano";
}
else if( mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Otoño";
}
else{
    estacion = "Valor incorrecto";
}

console.log(estacion);

// Mismo ejemplo con AND en lugar de OR

let mesAlt = 111;
let estacionAlt;

if( mesAlt >= 1 && mesAlt <= 3){
    estacionAlt = "Verano";
}
else if( mesAlt >= 4 && mesAlt <= 6){
    estacionAlt = "Otoño";
}
else if( mesAlt >= 7 && mesAlt <= 9){
    estacionAlt = "Invierno";
}
else if( mesAlt >= 10 && mesAlt <= 12){
    estacionAlt = "Primavera";
}
else{
    estacionAlt = "Valor incorrecto";
}

console.log(estacionAlt);