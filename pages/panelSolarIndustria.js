import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacto from '../components/Contacto'





const panelesSolaresIndustria = () => {

    return(
        <div>
            <Header/>
            <div className="background-paneleSolarIndustria">
                <div className="container m-auto">
                    <div className="pt-40 sm:pt-80 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Industria
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-3xl">
                            Paneles solares industriales, utilizando la energía infinita del sol en tu industria, fabrica, bodega, etc.
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

export default panelesSolaresIndustria;