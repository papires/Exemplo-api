//Modulo para carregar todas as libs liago na api.
var express = require('express');
var consign = require('consign');
var bodyparse = require('body-parser');
var expressValidator = require('express-validator');


//retorn app, com as libs carregadas. 
module.exports = function(){
  var app = express();

  app.use(bodyparse.urlencoded( {extended: true} ));
  app.use(bodyparse.json());
  app.use(expressValidator());

  consign()
    .include('controllers')
    .then('DAO')
    .into(app);
  return app;
}
