//Componente para o formulário de registro.
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return(
        <>
            <div className="h-screen flex items-center justify-center bg-slate-900" >       
                <div className='p-5 rounded-lg border-2 shadow-lg bg-white '>
                    <h1 className='text-center text-2xl mb-5 font-semibold text-azulClaro'>
                        Cadastre-se
                    </h1>

                    <form id="registerForm" className='grid gap-3 p-5'>
                        
                        <input className='rounded-md p-2 border outline-none' type="text" name="cadNome" id="cadNome" placeholder='Nome' />
                        <input className='rounded-md p-2 border outline-none' type="email" name="cadEmail" id="cadEmail" placeholder='Email' />
                        <input className='rounded-md p-2 border outline-none' type="password" name="cadSenha" id="cadSenha" placeholder='Senha'/>
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