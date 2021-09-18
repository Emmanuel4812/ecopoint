import React from 'react';
import BotonEstudio from '../../components/BotonEstudio';
import NavbarInner from '../../components/NavbarInner';
import Footer from '../Footer';

const Comercio = () => {
    return (
        <>
            <NavbarInner/>
            <div className="background-paneleSolarComercio">
                <div className="container m-auto">
                    <div className="pt-40 sm:pt-80 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Comercio
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-3xl">
                            Paneles solares para uso negocio y empresas.
Aumenta tus ganancias de una manera ecológica implementando energías renovables.
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

export default Comercio
