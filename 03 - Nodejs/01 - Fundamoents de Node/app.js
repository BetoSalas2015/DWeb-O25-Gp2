const { crearArchivo } = require('./modulos/multiplicaion')

console.clear();

let base = 5


crearArchivo(base).then( (archivoCreado) => {
                          console.log(`${archivoCreado} creada exitosamente`);
                })
                  .catch( (err) => { console.log(err);
                  });