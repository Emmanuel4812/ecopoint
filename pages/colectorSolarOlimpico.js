import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacto from '../components/Contacto';





const colectorSolarOlimpico = () => {

    return(
        <div>
            <Header/>
            <div className="background-colectorOlimpicaImage">
                <div className="container m-auto">
                    <div className="pt-40 sm:pt-80 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Olimpica
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-3xl">
                            Entrena siempre con agua templada generada por colectores solares
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

export default colectorSolarOlimpico;