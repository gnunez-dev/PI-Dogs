const {Dog, Temperamento, Raza} = require('./db.js');
const { API_KEY } = process.env;
const axios = require('axios');


//https://api.thedogapi.com/v1/breeds


const pagination = (listado, pags, n) => {

    let limit = 20;
    let cantPags = Math.ceil(pags / limit);
    return {
        listResult: listado.slice( (n - 1) * limit, n * limit ),
        cantPags
    }

}

const listDogs = async (n) => {

    try {

        let list = await axios({
            method: 'get',
            url: `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`,
        })

        let listado = list.data.map( d => {
            return { id: d.id, name: d.name, img: d.image.url}
        });

        if(!n || n < 1) return listado;
        return pagination(listado, listado.length, n);

        
    } catch (error) {
        console.log(error);
    }
   
}

const findName = async(name) => {

    let list = await axios({
        method: 'get',
        url: `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`,
    })

    let listado = list.data.filter( d => d.name.includes(name) )
    return listado;


}

 
module.exports = {
    listDogs,
    findName
}
