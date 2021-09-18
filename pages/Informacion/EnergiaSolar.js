import React from 'react';
import BotonEstudio from '../../components/BotonEstudio';
import NavbarInner from '../../components/NavbarInner';
import Footer from '../Footer';


const EnergiaSolar = () => {
    return (
        <>  
            <NavbarInner/>
             <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10 pt-14'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Energía Solar</div>
                        <div className="font-elegant sm:text-xl pt-5">
                            Los sistemas solares Eco Point se caracterizan por la alta calidad de sus componentes y por ofrecer una amplia gama de soluciones para todo tipo de aplicaciones, domésticas, residenciales o industriales, que nos permite utilizar eficientemente esta energía gratuita.
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Ventajas</div>
                        <div className="font-elegant sm:text-xl pt-5">
                            Los sistemas Eco Point están basados fundamentalmente en la utilización de productos de la más alta calidad conforme a las distintas normas de aplicación.
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Funcionamiento</div>
                        <div className="font-elegant sm:text-xl pt-5">
                            La producción de energía eléctrica por medio de captadores solares fotovoltaicos tiene lugar a partir de los materiales semiconductores que los constituyen, los cuales se excitan al recibir la radiación solar provocando una corriente continua de electrones, o lo que es lo mismo, generando electricidad.
                        </div>
                    </div> 
                                   
                </div>
                 
            </div>
            <div className='bg-greenEco flex justify-center items-center' >
                <div className="my-10">
                    <BotonEstudio href="/Estudio/EnergeticoIndustrial" text="Quiero mi estudio personalizado" />
                </div>
            </div>
            <Footer/>
            
        </>
    )
}

export default EnergiaSolar
