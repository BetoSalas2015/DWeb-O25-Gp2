const colors = await import('colors');
import { mostrarMenu, pausa } from './js/mensajes.js';

const main = async () => {
    
    let opc = '0';
    do {
       opc = await mostrarMenu();
       console.log(opc);
       
    } while (opc !== '0');
    
     await pausa();
    
};

main();