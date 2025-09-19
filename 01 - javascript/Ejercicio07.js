
/** 
var nombreObjeto { 
    atributos: valor,
    función: function name(params) { }, 
    otroObjeto: { }
};
*/

/* Al estilo arreglo  */
Persona = new Object();

Persona["nombre"] = "Roberto";
Persona["apellido"] = "Salazar";

var campo = "apellido";

console.log(Persona);
console.log(Persona[campo]);


/* Operador punto  */
Persona2 = new Object();

Persona2.nombre = "Roberto";
Persona2.apellido = "Salazar";

console.log(Persona2);

/*  Objetos Literales   */
var Persona3 = {
    nombre: "Roberto",
    apellido: "Salazar",
    direccion: {
        calle: "2 sur 2",
        colonia: "Centro"
    }
}

console.log(Persona3);


