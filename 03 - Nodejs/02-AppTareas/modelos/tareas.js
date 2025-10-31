import {Tarea} from './tarea.js'

export class Tareas {
    constructor() {
        this.listado = {};
    }

    crearTarea = (des) => {
        const tarea = new Tarea(des);
        this.listado[tarea.id] = tarea;
    };

    get listadoArr() {
        const listadoArr = [];
        Object.keys(this.listado).forEach( (key) => {
            const tarea = this.listado[key]
            listadoArr.push(tarea);
        })
        return listadoArr;
    }
}