const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = new Sequelize('express_app','postgres','Testing321?',{
  host: 'localhost',
  dialect: 'postgres'
});
//const models = require('./models.js')

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
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  });

function connect(){
    try{
        sequelize.authenticate();
        User.sync();
        console.log("Authenticated with database");
      }
      catch(err) {
        console.log("Unable to connect to databse " + {err});
      }
}



module.exports = {connect, sequelize, User};

