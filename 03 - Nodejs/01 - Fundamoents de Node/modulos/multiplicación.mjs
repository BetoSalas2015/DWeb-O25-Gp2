import { writeFile } from "node:fs"

export const crearArchivo = (base = 5) => {
    let salida = ""

    console.log("====================");
    console.log(`   Tabla del ${base}`);
    console.log("====================");

    for (let i = 1; i < 10; i++) {
        salida += `${base} * ${i} = ${ base * i}\n`;
    }

    writeFile(`Tabla-${base}.txt`, salida, (err) => {
        if(err) throw err;
        console.log(`Archivo Tabla${base}.txr creada.`);
        
    })

    console.log(salida);
};