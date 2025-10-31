import inquirer from "inquirer";
const colors = await import('colors');

const menu = [{
    type: 'list',
    name: 'menuOpt',
    message: 'Seleccione una opción',
    choices: [
        {
            value: 1,
            name: `${colors.default.green('1.')} Crear tarea.`
        },
        {
            value: 2,
            name: `${colors.default.green('2.')} Listar tareas.`
        },
        {
            value: 3,
            name: `${colors.default.green('3.')} Listar rareas reminadas.`
        },
        {
            value: 4,
            name: `${colors.default.green('4.')} Listar tareas pendientes`
        },
        {
            value: 5,
            name: `${colors.default.green('5.')} Completar tarea.`
        },
        {
            value: 6,
            name: `${colors.default.green('6.')} Borrar tarea.`
        },
        {
            value: 0,
            name: `${colors.default.green('0.')} Salir.`
        },
    ]
}];

export const inquirerMenu = async () => {
        console.clear();
        console.log(colors.default.green('============================'));
        console.log(colors.default.green('=  Seleccione una opción   ='));
        console.log(colors.default.green('============================'));

        const { menuOpt } = await inquirer.prompt(menu);
        return menuOpt;
};

export const pausa =  async () => {{
    const {pausaOpt} = await inquirer.prompt([{
        type: 'input',
        name: 'pausaOpt',
        message: `Presione ${colors.default.yellow('<<ENTER>>')} para continuar.`
    }]);
}};

export const capturaEntrada = async (message) => {
    const respuesta = await inquirer.prompt([{
        type: 'input',
        name: 'resp',
        message,
        validate: (entrada) => {
            if (entrada.length === 0) {
                return `Entrada inválida. Reintente`
            } else {
                return true;
            }
        }
    }])
    return respuesta.resp
};