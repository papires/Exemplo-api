module.exports = function(app){

  //Editar um produto
  app.put('/api/produto/:id', function (req, res) {
    var prodId = req.params.id;
    var connection = app.DAO.FactoryMysql01();
    var produtoDAO = new app.DAO.ProdutosDAO(connection);

    var prod = req.body;
    prod.id = prodId;

    produtoDAO.update(prod, function(erro,resultado){
        if(erro){
          console.log('Erro PUT do produto:' + erro);
          res.status(500).send(erro);
        }else{
          console.log('Produto Alterado: ' + JSON.stringify(resultado));
          res.json(resultado);
          return;
        }
    });
    connection.end();
  });

  //Encontar um produto
  app.get('/api/produto/:id', function (req, res) {
    var id = req.params.id;
    var connection = app.DAO.FactoryMysql01();
    var produtoDAO = new app.DAO.ProdutosDAO(connection);

    produtoDAO.buscaPorId(id, function(erro,resultado){
        if(erro){
          console.log('Erro ao get do produto:' + erro);
          res.status(500).send(erro);
        }else{
          console.log('pagamento encontrado: ' + JSON.stringify(resultado));
          res.json(resultado);
          return;
        }
    });
    connection.end();
  });

  //Deletar um produto
  app.delete('/api/produto/:id', function(req, res) {
    var id = req.params.id;
    var connection = app.DAO.FactoryMysql01();
    var produtoDAO = new app.DAO.ProdutosDAO(connection);

    produtoDAO.deletar(id, function(erro){
      if(erro){
        console.log('Erro ao deletar no banco:' + erro);
        res.status(500).send(erro);
      } else {

        res.status(201).send("OK!");
    }
    });
  });

  //Adicionar produto
  app.post('/api/produto',function(req,res){
    req.assert("titulo","Titulo obrigatório").notEmpty();
    req.assert("Descricao","Descricao obrigatório").notEmpty();
    req.assert("valorReal","valor obrigatório").notEmpty().isFloat();
    req.assert("valorPromocional","valor obrigatório").notEmpty().isFloat();

    var erros = req.validationErrors();
    if(erros){
      console.log("Erro de validacao...");
      res.status(400).send(erros);
      return;
    }

    var jsonMsg = req.body;
    var connection = app.DAO.FactoryMysql01();
    var produtoDAO = new app.DAO.ProdutosDAO(connection);

    produtoDAO.salva(jsonMsg, function(erro,resultado){
      if(erro){
        console.log('Erro ao inserir no banco:' + erro);
        res.status(500).send(erro);
      } else {
        res.location('/api/produto/' + resultado.insertId);
        res.status(201).json(resultado);
      }
    });
    connection.end();
  });

  //Tamnho da lista de produtos
  app.get('/api/tamanholista', function (req, res){
    var connection = app.DAO.FactoryMysql01();
    var produtoDAO = new app.DAO.ProdutosDAO(connection);
    produtoDAO.tamanhoListaProdutos(function(erro,resultado){
        if(erro){
          console.log('Erro ao get lista do produto:' + erro);
          res.status(500).send(erro);
        }else{
          console.log('Tamanho da lista: ' + JSON.stringify(resultado));
          res.json(resultado);
          return;
        }
    });
    connection.end();
  });

  //Lista todos os produtos.
  app.get('/api/listaprodutos', function (req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var connection = app.DAO.FactoryMysql01();
    var produtoDAO = new app.DAO.ProdutosDAO(connection);
    produtoDAO.listaProdutos(function(erro,resultado){
        if(erro){
          console.log('Erro ao get lista do produto:' + erro);
          res.status(500).send(erro);
        }else{
          console.log('Lista de produtos: ' + JSON.stringify(resultado));
          res.json(resultado);
          return;
        }
    });
    connection.end();
  });

}
