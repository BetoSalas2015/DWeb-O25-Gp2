const colors = await import ('colors');
import readline  from 'readline';

export const mostrarMenu = async() => {
    return new Promise( (resolve ) => {
        console.clear();
        console.log(colors.default.green('============================'));
        console.log(colors.default.green('=  Seleccione una opción   ='));
        console.log(colors.default.green('============================'));
        console.log(colors.default.green(''));
        console.log(`${colors.default.green('1.')} Crear tarea.`);
        console.log(`${colors.default.green('2.')} Listar tareas.`);
        console.log(`${colors.default.green('3.')} Listar tareas terminadas.`);
        console.log(`${colors.default.green('4.')} Listar tareas pendientes.`);
        console.log(`${colors.default.green('5.')} Completar tareas.`);
        console.log(`${colors.default.green('6.')} Borrar tareas.`);
        console.log(`${colors.default.green('0.')} Salir.`);
        
        const r1 = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        r1.question("Seleccione una opción: ", (opc) => {
            
            r1.close();
            resolve(opc)
        })
    });
   
};

export const pausa = async () => {
    return new Promise( () => {
        const r1 = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        r1.question("Presione <<Enter>> para continuar", (opc) => {

            r1.close()
            resolve(opc);
        });
    });
    
};
