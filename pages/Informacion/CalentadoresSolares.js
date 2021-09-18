import React from 'react';
import BotonContacto from '../../components/BotonContacto';
import BotonEstudio from '../../components/BotonEstudio';
import NavbarInner from '../../components/NavbarInner';
import Footer from '../Footer';

const CalentadoresSolares = () => {
    return (
        <>
            <NavbarInner></NavbarInner>
             <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10 pt-16'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Termo Solar</div>
                        <div className="font-elegant sm:text-xl pt-5">
                            Los sistemas solares de Eco Point se caracterizan por la alta calidad de sus componentes y por ofrecer una amplia gama de soluciones para todo tipo de aplicaciones, domésticas, residenciales o industriales, que nos permiten utilizar eficientemente esta energía gratuita.
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Ventajas</div>
                        <div className="font-elegant sm:text-xl pt-5">
                            En Eco Point estudiamos y definimos los sistemas de aplicación más adecuados, teniendo en cuenta todos los parámetros necesarios, desde una perspectiva global de sistema.
                        </div>
                        <div className="font-elegant sm:text-xl pt-5">
                            Esto nos permite asegurar en todo momento la máxima eficiencia y rendimiento de cada una de las instalaciones. La utilización de sistemas de control de caudal variable en los paneles solares térmicos, hace que se adapten automáticamente a las diferentes condiciones de radiación. De esta forma se consigue un alto rendimiento durante todo el año.
                        </div>
                    </div>          
                </div>
            </div>
            <div className='bg-greenEco flex justify-center items-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Ventajas</div>
                        <div className="font-elegant sm:text-xl pt-5">
                            Ofrecemos asesoramiento y los siguientes servicios:
                        </div>
                        <ul className="list-disc  pt-2 text-xl  font-elegant">
                            <li>Cálculo y dimensionamiento del sistema.</li>
                            <li>Replanteo y diseño de la instalación.</li>
                            <li>Estudio energético con cálculo del periodo de amortización.</li>
                            <li>Servicio puesta en marcha.</li>
                            <li>Atención post-venta a través de nuestros servicios técnicos.</li>
                            <li>Red de instaladores autorizados que le garantizan una perfecta instalación del sistema, cumpliendo con altos estándares de calidad Eco Point.</li>
                        </ul>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Funcionamiento</div>
                        <div className="font-elegant sm:text-xl pt-5">
                            El aprovechamiento de la energía solar es el procedimiento de transformación de la energía radiante del sol en calor o energía térmica, mediante un fluido calo-portador que circula por el interior de los captadores solares térmicos y que posteriormente cederá la energía captada, para su aprovechamiento en diferentes aplicaciones entre las que podemos destacar la producción de agua caliente sanitaria y el apoyo a la calefacción.
                        </div>
                        <div className="font-elegant sm:text-xl pt-5">
                            Se habla de aprovechamiento de la energía solar a baja temperatura cuando la energía térmica obtenida se utiliza para aplicaciones con temperaturas inferiores a 80ºC.
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

export default CalentadoresSolares
