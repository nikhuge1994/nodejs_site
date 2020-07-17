const Sequelize = require('sequelize');

const connection = new Sequelize('node','root','skyline1234',
{
    dialect:'mysql'.
    host:'localhost'
});

module.exports = connection;