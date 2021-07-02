import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const quienesSomos = () => {

    return(
        <div>
            <Header/>
            <div className="background-quienesSomos">
                <div className="container m-auto">
                    <div className="pt-40 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Quienes somos
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-3xl">
                            Empresa comprometida con el planeta tierra implementando las
                            energías renovables como una solución principal, para tener un
                            mundo mas sustentable. Trabajamos en proyectos fotovoltaicos y 
                            térmicos para la industria, negocios y hogares.
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>

            <Footer/>      
        </div>
    );
}

export default quienesSomos;