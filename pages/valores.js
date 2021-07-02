import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const valores = () => {

    return(
        <div>
            <Header/>
            <div className="background-valores">
                <div className="container m-auto">
                    <div className="pt-40 sm:pt-80 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Valores
                        </div>
                        <div className="flex justify-center pt-3">
                            <pre className="w-3/4 text-center text-white font-elegant font-bold text-3xl">
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
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default valores;