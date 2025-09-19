function costruyeFunciones() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push( function() { 
            var a = 0
            console.log(a++); 
        })
    }
    return arr;
}

var arreglo = costruyeFunciones();

arreglo[0]();
arreglo[1]();
arreglo[2]();