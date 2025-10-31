import { writeFileSync } from 'node:fs'

const filepath = './db/data.json'

export const guardabase = (dato) => {
    writeFileSync(filepath, JSON.stringify(dato));
};