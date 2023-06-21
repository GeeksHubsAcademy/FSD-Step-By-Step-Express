'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorites extends Model {

    static associate(models) {
      // No es necesario colocar las relaciones porque ya las está haciendo por la parte de belongsToMany
    }
  }
  favorites.init({
    book_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favorites',
  });
  return favorites;
};