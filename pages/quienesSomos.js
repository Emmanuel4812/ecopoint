import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const quienesSomos = () => {

    return(
        <div>
            <Header/>
            <div className="absolute z-10 flex justify-center w-full mt-60 grid grid-rows-2">
                <div className="text-5xl font-bold text-white text-center flex items-center justify-center">
                    Quienes somos
                </div>
                <pre className="text-justify font-semibold text-4xl text-white font-sans">
                    {`Empresa comprometida con el planeta tierra implementando las
energías renovables como una solución principal, para tener un
mundo mas sustentable. Trabajamos en proyectos fotovoltaicos y 
térmicos para la industria, negocios y hogares. 
`}
                </pre>
            </div>           
            
           
            <img className="relative z-0 bg-auto " src='quienesSomosImage.jpg'></img>
            <Footer/>      
        </div>
    );
}

export default quienesSomos;