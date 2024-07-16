//Ponto de entrada do servidor Express.
const express = require('express') //importa o express para o node.js, 
const cors = require('cors')
const connection = require('./src/config/database')
const bodyParser = require('body-parser');
const app = express(); //instancia do express, dá pra configurar rotas, middlewares, etc
const port = process.env.PORT || 3001; //Define a porta onde o servidor irá escutar as conexões.

const corsOptions = {
  origin: 'http://localhost:5173', //origem permitida se eu quiser permitir TODAS uso '*'
  methods: ['GET', 'POST', 'PUT', 'DELETE'], //metodos permitidos
  allowHeaders: ['Content-Type'], //cabeçalhos permitidos
  credentials: true, //permite o envio de cookies e outras credenciais
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json())

app.get('/', (req, res) => { //define uma rota http get
  res.send('Backend ta funcionando!!');
});

// Endpoint para cadastrar um usuário
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  connection.query(query, [nome, email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao cadastrar usuário: back', err);
      res.status(500).send('Erro ao cadastrar usuário');
      return;
    }
    console.log('Usuário cadastrado com sucesso:', results.insertId);
    res.status(201).send('Usuário cadastrado com sucesso');
  });
  //res.send('Endpoint de cadastro de usuário');
});

// Rota de login
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
        const result = await connection.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);
        if (result.length > 0) {
            console.log('Login bem-sucedido: back', result[0]);
            res.status(200).json({ message: 'Login bem-sucedido back', user: result[0] });
        } else {
            res.status(401).send('Credenciais inválidas back');
        }
    } catch (error) {
        console.error('Erro ao realizar login: back', error);
        res.status(500).send('Erro ao realizar login back');
    }
    //res.send('Endpoint de login');
});



app.listen(port, () => { //servidor Express comece a ouvir na porta especificada
  console.log(`Servidor rodando em http://localhost:${port}`);
});
