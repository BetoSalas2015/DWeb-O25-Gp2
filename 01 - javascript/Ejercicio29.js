//  Callback Hell

// DEfinimos nuestras "Bases de datos "
const empleados = [
    {
        id: 1,
        nombre: "Juan"
    },
    {
        id: 2,
        nombre: "Pedro"
    }, 
    {
        id: 3,
        nombre: "Jorge"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500 
    }
];

 const id = 4

const getEmpleado = (id) => {
    const promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find( (e) => (e.id === id) )?.nombre
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`El empleado con id ${id} no existe.`);
        }
    } );
    return promesa;
    
};

const getSalario = function(id) {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( e => e.id === id )?.salario
        salario ? resolve(salario) : reject((`El salrio con id ${id} no existe.`))
    } ) 
}

getEmpleado(id)
    .then( (empleado) => {
            const emp = empleado
            return getSalario(id).then( (salario) => {
                    console.log(`El empleado ${emp} tiene un salario de ${salario}`);
                } );
        } )
    .catch( (err) => { console.log(err) } );

/* getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log(err);  
    }
    getSalario(id, (err, salario) => {
        if (err) {
            console.log( `El empleado ${empleado} no tiene salario` );
            return
        }
        console.log(`El empleado ${empleado} tiene un salario de  ${salario}`); 
    })
})*/

