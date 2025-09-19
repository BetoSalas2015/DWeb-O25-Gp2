var objetoLiteral = {
    nombre: "Roberto",
    edad: 49
};

console.log(objetoLiteral);

var objetoJSON = JSON.stringify(objetoLiteral);
console.log(objetoJSON);
var nuevoObjeto = JSON.parse(objetoJSON);
console.log(nuevoObjeto);


