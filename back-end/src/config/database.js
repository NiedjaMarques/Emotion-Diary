//Configuração do banco de dados (MongoDB ou MySQL).
const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,        
    user: 'root', 
    password: 'root',
    database: 'emotion_diary'
})
module.exports = pool;

//falta colocar verificação de erro, para ver se esta funcionando corretamente caso dê erro no banco de dados
