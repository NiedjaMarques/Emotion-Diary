//Componente para o formulário de registro.
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const RegisterForm = () => {

    const [formDataRegister, setFormDataRegister] = useState({
        nome: '',
        email: '',
        senha: ''
    })

    const navigate = useNavigate()

    const cadastrarUsuario = async (nome, email, senha) => { //função assincrona que recebe os dados (email, nome e senha)
        try {
            const response = await fetch('http://localhost:3001/cadastro', { //envia uma requisição post para a url especificada com o nome, senha e email no corpo da requisição
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({nome, email, senha}),
            })
            if (!response.ok) { //se a resposta do servidor não for ok, manda pra pagina de error
                navigate('*');
            }
            const data = await response.json(); //se a resposta for ok, converte ela em objeto javascript
            return data //retorna os dados recebidos pelo servidor
        } catch (error) {
            navigate('*');
            //return { error: error.message } //retorna a mensagem de erro, personalizar e enviar com o erro especifico
        }
    }

    const inputChange = (e) => {
        const { name, value } = e.target //pego os valores dos inputs Extrai o nome e o valor do campo que foi alterado
        setFormDataRegister((prevData) => ({ //atualiza o estado dos inputs
            ...prevData, 
            [name]: value,
        }))
    }

    const cadastroForm = async (e) => { //função pra lidar com o envio do form 
        e.preventDefault()

        try {
            const result = cadastrarUsuario(formDataRegister.nome, formDataRegister.email, formDataRegister.senha) //chama a função cadastrarUsuario com os dados (email, senha, nome)
            if (result.error) { //se der errado, mostra o erro
                navigate('*');
            }else{
                navigate('/profile'); //se der certo, cadastrou com sucesso no banco de dados 
            }
        } catch (error) {
            navigate('*'); //mostra o erro pq deu errado
        }
    }

    return(
        <>
            <div className="h-screen flex items-center justify-center bg-slate-900" >       
                <div className='p-5 rounded-lg border-2 shadow-lg bg-white '>
                    <h1 className='text-center text-2xl mb-5 font-semibold text-azulClaro'>
                        Cadastre-se
                    </h1>

                    <form onSubmit={cadastroForm} className='grid gap-3 p-5'>
                        
                        <input className='rounded-md p-2 border outline-none' 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        placeholder='Nome' 
                        onChange={inputChange} 
                        value={formDataRegister.nome}/>

                        <input className='rounded-md p-2 border outline-none' 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='Email' 
                        onChange={inputChange} 
                        value={formDataRegister.email}/>

                        <input className='rounded-md p-2 border outline-none' 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        placeholder='Senha' 
                        onChange={inputChange} 
                        value={formDataRegister.senha}/>

                        <input className='bg-azulClaro hover:scale-[1.1] transition-all duration-500 ease-in-out text-white font-semibold p-2 rounded-md w-3/4 mx-auto cursor-pointer' type="submit" value="Cadastrar" />

                    </form>

                    <p className='text-sm text-center'>
                        <Link className='hover:underline text-azulClaro' to="/">Fazer login.</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
export default RegisterForm