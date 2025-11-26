const colors = await import('colors');
import { inquirerMenu, pausa, capturaEntrada, listadoCiudades } from './js/inquirer.js';
import { Busquedas } from './modelos/busquedas.js';
import dotenv from 'dotenv'

dotenv.config()

const main = async () => {
    let resp;

    const busquedas = new Busquedas();
    do {
        resp = await inquirerMenu();
        switch (resp) {
            case 1: const lugar = await capturaEntrada('Ciudad: ');
                    const lugares = await busquedas.ciudad(lugar);
                    const id = await listadoCiudades(lugares);
                    const lugarSeleccionado = lugares.find( (ciudad) => ciudad.id === id)
                    
                    console.log(`\n${colors.default.yellow('ciudad: ')} ${lugarSeleccionado.lugar}`);
                    console.log(`${colors.default.yellow('Latitud: ')} ${lugarSeleccionado.lat}`);
                    console.log(`${colors.default.yellow('Longitud: ')} ${lugarSeleccionado.lon}`);
                    
                    await pausa(); 
            break;
            case 2: break;

        }
        if (resp === 0) {
            await pausa();
        }
    } while (resp !== 0);
}

main();