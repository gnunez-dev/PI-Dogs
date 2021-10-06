const { Router } = require('express');
const { createBreeds } = require('./utils.js');

const router = Router();

router.post( '/', async (req, res) => {
   
    const newRaza = req.body;

    if(!newRaza) return res.status(400).json('Por favor complete todos los datos requeridos para crear la nueva raza');

    try {

        let raza = await createBreeds(newRaza);
        res.status(200).json(raza);
        
    } catch (error) {

       // console.log(error)
        res.status(500).json({error: "Ha habido un error al tratar de crear la nueva raza, por favor intenta de nuevo"});
        
    }

});


module.exports = router;