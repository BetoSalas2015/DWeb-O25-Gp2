import { writeFileSync, readFileSync, existsSync } from 'node:fs'

const filepath = './db/data.json'

export const guardabase = (dato) => {
    writeFileSync(filepath, JSON.stringify(dato));
};

export const cargaBase = () => {
    if (!existsSync(filepath)) {
        return null;
    }
    const tareas = readFileSync(filepath, { encoding: 'utf-8'});
    return JSON.parse(tareas);
};