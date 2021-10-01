const {Dog, Temperamento, Raza} = require('../db');
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

const queryApi = async () =>{

    return await axios({
        method: 'get',
        url: `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`,
    })

}




const listDogs = async (n) => {

    try {

        let list = await queryApi();

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

    let list = await queryApi();

    let listado = list.data.filter( d => d.name.includes(name) )
    return listado;

}


const findBreeds = async(id) => {

    let list = await queryApi();

    let listado = list.data.filter( d => d.id === Number(id) )
    return listado;

}

//const jane = await User.create({ name: "Jane" });


/**
 * Revisar si ya existen los temperamentos creados en la base de datos,
 * en caso de que no existan se deben tomar de la api y subirlos a la db
 * 
 * para subirlos, debemos filtrar todas las razas,
 * tomar los temperamentos de cada una, e irlos agregando a un array,
 * verificar que no esten incluidos ya en ese array.
 * 
 * Luego, recorrer el array e ir subiendo a la base de datos.
 * 
 */

const allTemperament = async () => {

    let temperamentos =  await Temperamento.findAll()
                            .then( d => d)
                            .catch( e => console.log(e) );
    //console.log({temperamentos});

    if(temperamentos.length < 1){

        let list = await queryApi();

        let listadoT = list.data.map(d => d.temperament && d.temperament.split(", ")).flat();
        
        let listadoTemperamentos = [];

        for(let i = 0; i < listadoT.length; i++ ){

            if( !listadoTemperamentos.includes(listadoT[i]) ){

                listadoTemperamentos.push(listadoT[i]);

            }

        }

        let temperamentosPromesas = listadoTemperamentos.map( t => Temperamento.create({ nombre: t }) )



        Promise.all(temperamentosPromesas)
        .then( async() => {
            let temperamentos = await Temperamento.findAll();
            return temperamentos;
        })
        .catch( (e) => console.log('error!', e)); 
        
        
        
    } else {
        return temperamentos;
    }

    
}

 
module.exports = {
    listDogs,
    findName,
    findBreeds,
    allTemperament
}
