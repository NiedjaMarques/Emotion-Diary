//Ponto de entrada do servidor Express.
const express = require('express'); //importa o express para o node.js, 
const app = express(); //instancia do express, dá pra configurar rotas, middlewares, etc
const port = process.env.PORT || 3001; //Define a porta onde o servidor irá escutar as conexões.

app.get('/', (req, res) => { //define uma rota http get
  res.send('Backend ta funcionando!!');
});

app.listen(port, () => { //servidor Express comece a ouvir na porta especificada
  console.log(`Server is running on port ${port}`);
});
