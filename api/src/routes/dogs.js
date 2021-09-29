const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {listDogs, findName} = require('../../src/utils.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/**
 *  [ ] GET /dogs:
 * Obtener un listado de las razas de perro
 * Debe devolver solo los datos necesarios para la ruta principal
 */

router.get( '/', async (req, res, next) => {
   
    if(req.query.hasOwnProperty('name')) next(); 
    
    let {pag} = req.query;

    try {

        let list = await listDogs(pag);
        res.status(200).json(list);
        
    } catch (error) {

        res.status(404).json('No hemos encontrado el listado de razas');
        
    }


});

router.get( '/', async (req, res) => {

    let {name} = req.query;

    if(!name) return res.status(404).json('Por favor ingresar un nombre');

    try {

        let list = await findName(name);
        res.status(200).json(list);
        
    } catch (error) {

        res.status(404).json('No hemos encontrado razas que incluyan el nombre ingresado');
        
    }


});


module.exports = router;
