import MainLayout from './MainLayout'
import { FaPlus, FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const DiarioMedo = () => {
    return(
        <>
            <MainLayout>
                <div className='flex flex-col justify-between h-dvh'>
                    
                    <div className='flex items-center '>
                        <Link to="/dashboard">
                            <FaAngleLeft className='text-2xl mr-3 font-extrabold' />
                        </Link>
                        <h1 className='text-2xl font-semibold py-4'>                                    
                            Diário de Medos
                        </h1>
                    </div>
                    
                    <div className='flex items-center py-4'>
                        <p>Etapa 1. Adicione seus desejos (10)</p>
                        <span className='ml-auto bg-azulClaro rounded-xl py-2 px-4'>
                            3/10
                        </span>
                    </div>

                    <ul className='grid grid-cols-1 gap-3 pt-10'>
                        <li className='bg-slate-700 px-2 py-3 rounded-md'>Dar um passeio</li>
                        <li className='bg-slate-700 px-2 py-3 rounded-md'>Fazer uma viagem</li>
                        <li className='bg-slate-700 px-2 py-3 rounded-md'>Ler um livro</li>
                    </ul>

                    <div className='mt-auto mb-10 flex justify-end p-4'>
                        <button className='bg-azulClaro rounded-full p-3 mt-auto'>
                            <FaPlus className='text-3xl' />
                        </button>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
export default DiarioMedo