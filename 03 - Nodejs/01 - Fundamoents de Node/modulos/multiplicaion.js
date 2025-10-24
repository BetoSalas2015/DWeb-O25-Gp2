import { writeFileSync } from "node:fs"
const colors = await import('colors')

export const crearArchivo = (base = 5) => {
    return new Promise( (resolve) => {
        let salida = ""
        
        console.log(colors.default.green("===================="));
        console.log(colors.default.yellow(`   Tabla del ${base}`));
        console.log(colors.default.green("===================="));

        for (let i = 1; i < 10; i++) {
            salida += `${base} * ${i} = ${ base * i}\n`;
        }

        try {
            writeFileSync(`Tabla-${base}.txt`, salida)
        } catch (err) {
            throw err;
        }
        resolve(`Tabla-${base}.txt`)
        console.log(salida);
    })
 
};