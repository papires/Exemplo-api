var app = require('./config/config-api.js')();


//Start o script
app.listen(4000, function(){
    console.log('Servidor rodando: http://localhost:4000');
});

