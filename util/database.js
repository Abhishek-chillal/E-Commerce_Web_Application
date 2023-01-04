const Sequelize = require('sequelize');

const sequelize= new Sequelize('node-complete','root','hello there', {
  dialect:'mysql',
  host:'localhost'
});

module.exports = sequelize;