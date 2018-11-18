var mysql = require('mysql');

function criarConexao(){
  return mysql.createConnection({
    /*
    host: '172.17.0.2',
    user: 'user',
    password: 'pass',
	  database: 'db'
    */
    host: 'dbammo.cxyqcnqg9ybx.sa-east-1.rds.amazonaws.com',
    user: 'user',
    password: '4II9oVPZ',
    database: 'dbname01'
  });
}

module.exports = function(){
  console.log("Conectado...");
  return criarConexao;
}
