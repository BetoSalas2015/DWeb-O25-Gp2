//  1ra forma de declaración
function sumar(a, b) {
    return a + b
} 

// 2da. Manera de declarar 
const sumar1 = function(a, b) {
    return a + b
}

// 3ra Forma de declarar
// Funciones flecha
const sumar2 = (a, b) =>  a + b 

const square = x => x * x;

console.log(sumar(5, 10));
console.log(sumar1(5, 10));
console.log(sumar2(5, 10));
console.log(square(5));

