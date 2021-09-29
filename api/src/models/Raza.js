const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('raza', {
    // Tu código acá:
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre:{
      type: DataTypes.STRING, //define el tipo de dato
      allowNull: false //es para definir que no puede tener un valor nulo
    },
    altura: {
      type: DataTypes.FLOAT, 
      allowNull: false,
    }, 
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false, 
    },
    anios_de_vida:{
      type: DataTypes.FLOAT,
    }
  });
};