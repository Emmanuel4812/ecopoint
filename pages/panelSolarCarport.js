import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacto from '../components/Contacto';





const panelesSolarCarport = () => {

    return(
        <div>
            <Header/>
            <div className="background-paneleSolarCarport">
                <div className="container m-auto">
                    <div className="pt-40 sm:pt-80 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Carport
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-3xl">
                            Una manera diferente de generar energía infinita mientras proteges tu coche con paneles solares
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

export default panelesSolarCarport;