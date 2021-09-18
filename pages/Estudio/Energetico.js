import React from 'react';
import BotonContacto from '../../components/BotonContacto';
import NavbarInner from '../../components/NavbarInner';
import Footer from '../Footer';

const Energetico = () => {
    return (
        <>
            <NavbarInner/>
            <div className='b py-16 bg-green-500 px-4 sm:px-6 h-screen w-screen flex justify-center items-center background-index pt-32'>                
                <div className='w-full max-w-4xl rounded-xl bg-blueEco p-8 shadow flex justify-center '>
                    <div className='container m-auto'>
                        <div className="flex justify-center font-bold text-white text-2xl ">
                            ¿Por qué realizar un estudio energético?
                        </div>
                        <div className="flex justify-center text-white text-2xl pt-10">
                            Un estudio energético realizado por ECO POINT te aportará información detallada sobre:
                        </div>
                        <ul className="list-disc text-white pt-10 text-xl">
                            <li>Las necesidades energéticas de tu vivienda</li>
                            <li>Propuesta del sistema de energías renovables</li>
                            <li>Estudio de emisiones</li>
                            <li>Coste del sistema</li>
                            <li>Estudio de viabilidad económica</li>
                            <li>Periodo de amortización de la instalación</li>
                        </ul>
                        <BotonContacto href='https://api.whatsapp.com/message/KTLO5B4HWCIHM1' text="Cotiza ahora" />
                    </div>                  
                </div>                
            </div>
            <Footer/>
            
        </>
    )
}

export default Energetico
