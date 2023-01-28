const Sequelize = require('sequelize');

const sequelize= new Sequelize('node-complete','root','****', {        //enter your password here 
  dialect:'mysql',
  host:'localhost'
});

module.exports = sequelize;
