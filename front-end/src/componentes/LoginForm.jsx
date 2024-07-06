//Componente para o formulário de login.
import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <>            
            <div className="h-screen flex items-center justify-center bg-slate-900">
        
                <div className='p-5 rounded-lg border-2 shadow-lg bg-white'>{/*form*/}
                    <h1 className='text-center text-2xl mb-5 font-semibold text-azulClaro'>
                        Login
                    </h1>

                    <form action="#" method="post" className='grid gap-3 p-5'>
                        
                        <input className='rounded-md p-2 border outline-none' type="email" name="logEmail" id="logEmail" placeholder='Email'/>
                        <input className='rounded-md p-2 border outline-none' type="password" name="logSenha" id="logSenha" placeholder='Senha'/>
                        <input className='bg-azulClaro hover:scale-[1.1] transition-all duration-500 ease-in-out text-white font-semibold p-2 rounded-md w-1/2 mx-auto cursor-pointer' type="submit" value="Logar"/>

                    </form>

                    <p className='text-sm text-center my-2'>
                        Não tem conta ? <Link className='hover:underline text-azulClaro' to="/cadastrar">Cadastre-se</Link>
                    </p>
                </div>
                
            </div>
        </>
    )
}
export default LoginForm