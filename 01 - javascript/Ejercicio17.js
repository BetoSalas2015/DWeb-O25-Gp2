var Persona = {
    nombre: "Juan",
    apelido: "Pérez",
    getNombre: function(lang) {
        var nombreCompleto = this.nombre + " " + this.apelido + "(" + lang + ")"
        return nombreCompleto
    }
}

var logNombre = function(lang) {
    console.log("Logged " + this.getNombre(lang));  
};

logNombre.apply(Persona, ["es"])