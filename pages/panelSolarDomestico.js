import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacto from '../components/Contacto'





const panelesSolares = () => {

    return(
        <div>
            <Header/>
            <div className="background-paneleSolarDomestico">
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
                        <Contacto/>                      
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default panelesSolares;