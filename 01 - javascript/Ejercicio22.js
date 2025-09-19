var a = 5
console.log(typeof a);

var b = "Saludos"
console.log(typeof b);

var c = {}
console.log(typeof c);

var d = []
console.log(typeof d);
console.log(Object.prototype.toString.call(d));

function Persona(nombre) {
    this.nombre = nombre
}

var e = new Persona("Juan")
console.log(typeof e);
console.log(e instanceof Persona);

console.log(typeof undefined);
console.log(typeof null);





