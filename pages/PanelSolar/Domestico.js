import React from 'react';
import BotonEstudio from '../../components/BotonEstudio';
import NavbarInner from '../../components/NavbarInner';
import Footer from '../Footer';

const Domestico = () => {
    return (
        <>
           <NavbarInner/>
           <div className='background-paneleSolarDomestico'>
                <div className="container m-auto">
                    <div className="pt-40 sm:pt-80 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Doméstico
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-3xl">
                            Paneles solares para uso doméstico.Una solución ecológica mediante el uso de las energías renovables
                            </div>
                        </div>
                       <BotonEstudio href="/Estudio/Energetico" text="Quiero mi estudio personalizado"/>              
                    </div>
                </div>
           </div>
           <Footer/>
        </>
    )
}

export default Domestico
