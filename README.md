# api-produtos-mysql
# ammovarejo-api

### Padrão do json para envio de dados do produto:
{
"titulo" : "Produto 1 um...",
"valorReal" : 10.00,
"valorPromocional" : 1.99,
"Descricao" : "TESTE UPDATE PUT produto 1.",
"figura01": "http://www.paraibatotal.com.br/static/imagens/noticias/normal/1365452860498-linha-wedding.jpg",
"figura02": "http://www.paraibatotal.com.br/static/imagens/noticias/normal/1365452860498-linha-wedding.jpg",
"figura03": ""
}

### Exemplo de adicionar produtos no bd.
curl http://localhost:3000/api/produto -X POST -H "Content-type: application/json" -d @testeJS/produto01.json -v ;

### Exemplo de como deletar um produto no bd.
curl http://localhost:3000/api/produto/90 -X DELETE ; echo

### Exemplo de como pegar a informação de um produto.
curl http://localhost:3000/api/produto/90 -X GET ; echo

### Exemplo de como alterar informações de um produto.
curl http://localhost:3000/api/produto/10 -X PUT -H "Content-type: application/json"  -d @produto01.json -v ; echo

### Exemplo de pegar a lista de produtos.
curl http://localhost:3000/api/listaprodutos -X GET -H "Content-type: application/json" | json_pp 


