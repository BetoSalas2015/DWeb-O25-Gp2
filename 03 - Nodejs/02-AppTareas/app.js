const colors = await import('colors');
import { inquirerMenu, pausa, capturaEntrada, listadoTareasBorrar } from './js/inquirer.js';
import { Tareas } from './modelos/tareas.js'
import { guardabase, cargaBase } from './js/guardabase.js';

const main = async () => {
    
    let opc = 0;
    let tareas = new Tareas();
    const tareasbd = await cargaBase();
    if (tareasbd) {
       await tareas.cargarListado(tareasbd);
    }

    do {
       opc = await inquirerMenu();
       switch (opc) {
          case 1:  const resp = await capturaEntrada("Descripción: ");
                  tareas.crearTarea(resp); break
          case 2: tareas.imprimeTareas(); break;
          case 3: tareas.imprimePendientesCompletadas(true); break;
          case 4: tareas.imprimePendientesCompletadas(false); break;
          case 6: const id = await listadoTareasBorrar(tareas.listadoArr) ;

                  tareas.borrarTareas(id); break;
          
       }
       guardabase(tareas.listadoArr);
       
       if (opc !== 0) {
         await pausa();
       }
      
    } while (opc !== 0);
    
};

main();