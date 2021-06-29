import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const valores = () => {

    return(
        <div>
            <Header/>
            <div className="absolute z-10 flex justify-center w-full grid grid-rows-2">
                <div className="text-5xl font-bold text-white text-center flex items-end justify-center">
                    Valores
                </div>
                <pre className="text-justify font-semibold text-4xl text-white font-sans mt-10">
                    {`Transparencia
Honestidad
Profesionalismo
Calidad
Excelencia
Compromiso
Responsabilidad
`}
                </pre>
            </div>           
            
           
            <img className="relative z-0 bg-auto " src='valoresImage.jpg'></img>
            <Footer/>      
        </div>
    );
}

export default valores;