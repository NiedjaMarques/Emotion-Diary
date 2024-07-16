//Configuração e métodos para fazer requisições à API.
import RegisterForm from "../componentes/RegisterForm";

// Função para cadastrar usuário
async function cadastrarUsuario(nome, email, senha) {
    const response = await fetch('/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, senha })
    });
    return response.json();
}

// Função para fazer login
// async function fazerLogin(email, senha) {
//     const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, senha })
//     });
//     return response.json();
// }

// Evento de submit para formulário de cadastro
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nome = document.getElementById('cadNome').value;
    const email = document.getElementById('cadEmail').value;
    const senha = document.getElementById('cadSenha').value;
    const result = await cadastrarUsuario(nome, email, senha);
    console.log(result); // Lida com a resposta do servidor
});

// // Evento de submit para formulário de login
// document.getElementById('loginForm').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const email = document.getElementById('logEmail').value;
//     const senha = document.getElementById('logSenha').value;
//     const result = await fazerLogin(email, senha);
//     console.log(result); // Lida com a resposta do servidor
// });