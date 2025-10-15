const { crearArchivo } = require('./modulos/multiplicaion')

console.clear();

//const arg1 = process.argv[2];
const [,,arg1 = '--base=5'] = process.argv;
const [,base = 4] = arg1.split('=')

crearArchivo(base).then( (archivoCreado) => {
                          console.log(`${archivoCreado} creada exitosamente`);})
                  .catch( (err) => { console.log(err);});