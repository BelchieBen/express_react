const database = require('./database.js')
const { Model, DataTypes} = require("sequelize");

let connection = database.sequelize;
console.log(connection);

class User extends Model {}
User.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    // Other model options go here
    connection, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  });

  module.exports = {User};