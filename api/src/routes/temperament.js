const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {allTemperament} = require('./utils.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/**
 * 
 * [] GET /dogs:
 * Obtener un listado de las razas de perro
 * Debe devolver solo los datos necesarios para la ruta principal
 * 
 */

router.get( '/', async (req, res) => {
   

    try {

        let list = await allTemperament();
        console.log({list});
        res.status(200).json(list);
        
    } catch (error) {

        res.status(404).json('No hemos encontrado el listado de razas');
        
    }
    
});





module.exports = router;
