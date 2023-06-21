'use strict';
// Esto es el MODELO, con esto trabaja el ORM a la hora de hacer peticiones
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Aquí se definen las asociaciones con el resto de modelos
      models.Role.hasOne(models.User)
    }
  }
  Role.init({
    // Aquí tenemos los campos que hemos introducido en el comando. La id no es necesario colocarla aquí si no vamos a cambiarle el nombre, viene predeterminada en el modelo.
    name: DataTypes.STRING
  }, {
    sequelize,
    // exporto el nombre del modelo como "role" para utilizarlo al establecer relaciones con otros modelos
    modelName: 'Role',
  });
  return Role;
};