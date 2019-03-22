const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);


connection.connect((err) => {
  if(err) return console.log(err);
  console.log('connected to db');
  
});


module.exports = connection;