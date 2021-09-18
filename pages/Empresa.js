import React from 'react';
import NavbarInner from '../components/NavbarInner';
import Footer from './Footer';



const QuienesSomos = () => {
    return (
        <div>
            <NavbarInner/>
            <video autoPlay muted loop>
                <source src="/quienesSomosVideo.mp4">
                </source>
            </video>
            <div className="relative z-0">
                <div className="container m-auto h-screen">
                    <div className="pt-40 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Quienes somos
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant  lg:text-3xl">
                            Empresa comprometida con el planeta tierra implementando las
                            energías renovables como una solución principal, para tener un
                            mundo mas sustentable. Trabajamos en proyectos fotovoltaicos y 
                            térmicos para la industria, negocios y hogares.
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
};






const Mision = () => {
    return (
        <div>
             <div className="background-misionVision">
                <div className="container m-auto">
                    <div className="pt-20 sm:pt-40 lg:pt-30">
                        <div className="lg:text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Misión
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-xl sm:text-3xl">
                                Transformar la manera en la que nuestros clientes ven el mundo mientras invierten en energías renovables en sus hogares negocios e industrias.
                            </div>
                        </div>                    
                    </div>
                    <div className="pt-10">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Visión
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-xl sm:text-3xl">
                                Ser altamente competente en el sector energético implementando las energías renovables mientras apoyamos en le economia de los mexicanos.
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
};



const Valores = () => {
    return (
        <div>
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
        </div>
    )
};








const Empresa = () => {
    return (
        <div>
            <QuienesSomos/>
            <Mision/>
            <Valores/>
            <Footer/>
        </div>
    )
}

export default Empresa
