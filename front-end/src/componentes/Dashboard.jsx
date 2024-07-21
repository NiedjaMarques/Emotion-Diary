//Componente principal da dashboard.
//grafico de humor, resumo do humor recente
import logo from '../../public/view/sunrise.png'
import { FaStar, FaFaceFrownOpen, FaHeart, FaFaceSmileBeam } from "react-icons/fa6";
import MainLayout from './MainLayout'

const Dashboard = () =>{
    return(
        <>
            <MainLayout>                
                
                <div className="flex items-center p-4">
                    <h1 className="text-xl font-bold">Olá, Fulano!</h1>
                    <img className="w-20 h-20 rounded-full ml-auto" src={logo} alt="Logo" />
                </div>

                <hr className='mb-6' />                    

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 py-5'>

                    <div className="bg-blue-600 rounded-xl p-4 flex flex-col justify-between h-48 cursor-pointer">
                        <div className='text-2xl text-yellow-300'>
                            <FaStar/>
                        </div>
                            
                        <div>
                            <p className='font-bold text-lg'>
                                Diário de Desejos
                            </p>
                            <p className='text-sm'>
                                5 entradas
                            </p>
                        </div>                                
                        
                    </div>

                    <div className="bg-red-600 rounded-xl p-4 flex flex-col justify-between h-48 cursor-pointer">
                        <div className='text-2xl'>
                            <FaFaceFrownOpen />
                        </div>

                        <div>
                            <p className='font-bold text-lg'>
                                Diário do Medo
                            </p>
                            <p className='text-sm'>
                                5 entradas
                            </p>
                        </div>
                    </div>

                    <div className="bg-green-600 rounded-xl p-4 flex flex-col justify-between h-48 cursor-pointer">
                        <div className='text-2xl text--300'>
                            <FaFaceSmileBeam />
                        </div>
                        <div>
                            <p className='font-bold text-lg'>
                                Diário de Emoções
                            </p>
                            <p className='text-sm'>
                                5 entradas
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-500 rounded-xl p-4 flex flex-col justify-between h-48 cursor-pointer">
                        <div className='text-2xl'>
                            <FaHeart />
                        </div>
                        <div>
                            <p className='font-bold text-lg'>
                                Diário da Gratidão
                            </p>
                            <p className='text-sm'>
                                5 entradas
                            </p>
                        </div>
                    </div>

                </div>
            </MainLayout>           
        </>
    )
}
export default Dashboard