var funSaludo = function(nombre) {
    console.log("Hola " + nombre);   
}

funSaludo("Roberto")

//  IIF - Immediatly Invocked Function
var saludo = function( nombre ) {
    console.log("Hola " + nombre);
}("Juan")

console.log(saludo);
