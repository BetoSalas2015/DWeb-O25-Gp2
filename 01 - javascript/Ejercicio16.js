var Persona = {
    nombre: "Juan",
    apelido: "Pérez",
    getNombre: function() {
        var nombreCompleto = this.nombre + " " + this.apelido
        return nombreCompleto
    }
}

var logNombre = function() {
    console.log("Logged " + this.getNombre());  
};

var nombreLog = logNombre.bind(Persona)

nombreLog()