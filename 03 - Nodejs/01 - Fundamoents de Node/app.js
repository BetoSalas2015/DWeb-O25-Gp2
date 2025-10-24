import { crearArchivo } from './modulos/multiplicaion.js'
import { argv } from './modulos/yargs.js'

console.clear();

const base = argv.base;

crearArchivo(base).then( (archivoCreado) => {
                          console.log(`${archivoCreado} creada exitosamente`);})
                  .catch( (err) => { console.log(err);});