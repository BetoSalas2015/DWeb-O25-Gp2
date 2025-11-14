import axios from "axios";

export class Busquedas {
    historial = [];

    constructor() {

    }

    async ciudad (lugar = "") {
        const { data } = await axios.get('https://reqres.in/api/users?page=2')
        console.log(data);
        
        return [];
    };
}