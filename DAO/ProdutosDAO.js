module.exports = function (connection) {
    return ProdutosDAO;
}

function ProdutosDAO(connection){
  this._connection = connection;
}

ProdutosDAO.prototype.salva = function(produto,callback) {
    this._connection.query('INSERT INTO produtos SET ?', produto, callback);
}

ProdutosDAO.prototype.update = function(produto,callback) {
    this._connection.query('UPDATE produtos SET ? WHERE id = ?', [produto,produto.id], callback);
}

ProdutosDAO.prototype.deletar = function(id,callback) {
    this._connection.query('DELETE from produtos WHERE id = ? ',[id],callback);
}

ProdutosDAO.prototype.buscaPorId = function (id,callback) {
    this._connection.query("select * from produtos where id = ?",[id],callback);
}

ProdutosDAO.prototype.tamanhoListaProdutos = function (callback) {
    this._connection.query("select COUNT(*) from produtos ",callback);
}

ProdutosDAO.prototype.listaProdutos = function (callback) {
    this._connection.query("SELECT * FROM produtos ",callback);
}
