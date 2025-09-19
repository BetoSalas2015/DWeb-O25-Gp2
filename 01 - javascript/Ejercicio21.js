// Objeto base
var Persona = {
    saludar: function() {
        return "Hola soy " + this.nombre
    },
    despedir: function() {
        return "Adios desde " + this.nombre
    }
}

var attr = {
        nombre: {
            value: "Juan",
            writable: true,
            enumerable: true
        }
    }

var estudiante = Object.create(Persona, attr)

estudiante.edad = 25
estudiante.estudiar = function () {
    return this.nombre + " está estudiando JS"
    
}

console.log(estudiante.saludar());
console.log(estudiante.despedir());
console.log(estudiante.estudiar());

//  Verificando la cadena de prototipos
console.log(Object.getPrototypeOf(estudiante) === Persona);

