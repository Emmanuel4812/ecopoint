import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacto from '../components/Contacto';





const panelesSolarDomestico = () => {

    return(
        <div>
            <Header/>
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
                        <Contacto/>                      
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default panelesSolarDomestico;