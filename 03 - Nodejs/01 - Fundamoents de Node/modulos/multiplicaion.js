const fs = require('node:fs')

/*const crearArchivo = (base = 5) => {
    const promesa = new Promise( (resolve, reject) => {
        let salida = ""

        console.log("=============================");
        console.log(`       Tabla del ${base}     `);
        console.log("=============================");

        for (let i = 1;  i <= 10 ; i++) {
            salida += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`Tabla-${base}.txt`,salida, (err) => {
            if(err) reject(err)
            resolve(`Tabla del ${base}`)
            
        })

        console.log(salida);
    })
     return promesa;
   
}; */

const crearArchivo = async (base = 5) => {
    let salida = ""

    console.log("=============================");
    console.log(`       Tabla del ${base}     `);
    console.log("=============================");

    for (let i = 1;  i <= 10 ; i++) {
        salida += `${base} * ${i} = ${base * i}\n`
    }
    // writeFileSync
    
        try {
            fs.writeFileSync(`Tabla-${base}.txt`,salida)
        } catch (error) {
            throw error
        }
        console.log(salida);
        
    return `Tabla-${base}.txt`;
};


module.exports = {
    crearArchivo
}