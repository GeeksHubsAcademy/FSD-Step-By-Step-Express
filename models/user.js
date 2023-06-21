"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.belongsTo(models.Role, {
        foreignKey: "role_id"
      })
    }
  }
  User.init(
    {
      email: {
        // Si quiero añadir algún atributo al modelo para que encaje con los de la migración, tengo que crear un objeto para cada elemento e introducir los atributos pertinentes
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
