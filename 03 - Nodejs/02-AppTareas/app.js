const colors = await import('colors');
import { inquirerMenu, pausa } from './js/inquirer.js';

const main = async () => {
    
    let opc = 0;
    do {
       opc = await inquirerMenu();
       console.log(opc);
       if (opc !== 0) {
         await pausa();
       }
       
    } while (opc !== 0);
    
};

main();