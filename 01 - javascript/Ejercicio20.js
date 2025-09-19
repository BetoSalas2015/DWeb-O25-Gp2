//  Función constructora
function Persona(nombre) {
    this.nombre = nombre
}

Persona.prototype.saludar = function() {
    return "Hola, soy " + this.nombre
}

var persona1 =  new Persona("Ana")
var persona2 = new Persona("Juan")

console.log(persona1);
console.log(persona2);
console.log(persona1.saludar());
console.log(persona2.saludar());

/*
// 1
var objeto = {}
// 2
objeto.Persona()
// 3
this = objeto // No es posible
// 4
return objeto
*/