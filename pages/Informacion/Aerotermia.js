import React from 'react';
import Image from 'next/image';
import AerotermiaAplicacion from '../../public/aerotermiaAplicacion.jpg';
import BotonEstudio from '../../components/BotonEstudio';
import NavbarInner from '../../components/NavbarInner';
import Footer from '../Footer';


const Aerotermia = () => {
    return (
        <>
            <NavbarInner/>
            <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10 pt-14'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Aerotermia</div>
                        <div className="font-elegant sm:text-xl">
                        La energía aerotérmica es la energía almacenada en forma de calor en el aire ambiente. Mediante la bomba de calor aireagua, aprovechamos esta energía y la intercambiamos con el agua para poder obtener calefacción, refrigeración y agua
    caliente sanitaria (ACS). En función de la temperatura del aire ambiente la bomba de calor consigue diferentes niveles de
    rendimiento, dependiendo del rendimiento estacional (SPF) conseguido, se considera renovable cuando el SPF de la bomba
    de calor es mayor o igual a 2,5.
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow font-elegant sm:text-xl">
                    La bomba de calor aire-agua recupera del ambiente de forma gratuita
gran parte de la energía necesaria para cubrir las necesidades térmicas
de una vivienda. Mediante la acción del compresor, la bomba de calor
aire-agua logra complementar de forma eficiente la energía necesaria
para calentar su hogar en invierno, refrigerarlo en verano y producir ACS
(Agua Caliente Sanitaria).
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow font-elegant sm:text-xl">
                    Dado que la mayor parte de la energía no se produce, sino
que se traslada desde el ambiente a la vivienda, el uso de
un sistema con bomba de calor aire-agua permite
importantes ahorros con respecto a sistemas energéticos
que tienen como fuente de energía combustibles fósiles
                    </div>                    
                </div>
            </div>
            <div className='bg-greenEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Aplicaciones del sistema</div>
                        <ul className="list-disc  pt-10 text-xl  font-elegant">
                            <li>Calefacción en viviendas, edificios, naves industriales, etc.</li>
                            <li>Producción de ACS</li>
                            <li>Climatización de Piscinas</li>
                            <li>Coste del sistema</li>
                            <li>Refrigeración, etc</li>
                        </ul>
                    </div>
                    <div className='col-span-2'>
                        <Image src={AerotermiaAplicacion} alt="Picture of the author" />
                    </div>                    
                </div>
            </div>
            <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
                        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                            <div className="flex justify-center text-4xl font-bold font-elegant">Ventajas</div>
                            <div className="font-elegant sm:text-xl">
                                Eco Point dispone de una amplia gama de bombas de calor aire / agua que le permitirán disfrutar de las siguientes ventajas: 
                            </div>
                            <ul className="list-disc  pt-10 text-xl  font-elegant">
                                <li>SOLUCIÓN INTEGRAL para calefactar, refrigerar y producir ACS en cualquier tipo de edificación. Con un solo equipo obtenemos una solución integral para la climatización de nuestra vivienda durante todo el año.</li>
                                <li>INTEGRACIÓN CON SISTEMAS DE ENERGÍA SOLAR TÉRMICA Y FOTOVOLTAICA.</li>
                                <li>TECNOLOGÍA INVERTER DC. Permite adaptar la potencia de la bomba de calor a las demandas energéticas puntuales de la instalación, ajustando el consumo de acuerdo a las necesidades puntuales.</li>
                                <li>LAS MAS ALTAS CLASIFICACIONES ENERGÉTICAS, HASTA A+++ COP DE HASTA 5,01 en función de la temperatura externa, que permite un bajo consumo y un elevado rendimiento.</li>
                            </ul>
                        </div>
                        <div>
                            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                                <ul className="list-disc  pt-10 text-xl  font-elegant">
                                    <li>AMPLIO RANGO DE TEMPERATURAS DE OPERACIÓN, ya que dispone de un intervalo de funcionamiento con temperaturas exteriores desde -20ºC a 40º C.</li>
                                    <li>TEMPERATURA DE IMPULSIÓN de 7 a 62ºC, que permite climatizar de forma muy efectiva.</li>
                                    <li>FUNCIONAMIENTO MUY SILENCIOSO. Las bombas de aire Eco Point permiten disfrutar de una total tranquilidad incluso durante la noche.</li>
                                    <li>OPTIMIZACIÓN DE SISTEMAS EXISTENTES. Compatibilidad con otros sistemas de calentamiento ya existentes en la vivienda.</li>
                                    <li>RESPETUOSA CON EL MEDIO AMBIENTE, reducción significativa de las emisiones de CO2</li>
                                </ul>
                            </div>                        
                        </div>
                        <div>
                            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                                <div>En Eco Point ofrecemos también asesoramiento completo ofreciendo entre otros los siguientes servicios:</div>
                                <ul className="list-disc  pt-10 text-xl  font-elegant">
                                    <li>Cálculo y dimensionamiento del sistema.</li>
                                    <li>Replanteo y diseño de la instalación</li>
                                    <li>Servicio puesta en marcha</li>
                                    <li>Atención post-venta a través de nuestros servicios técnicos</li>
                                    <li>Red de instaladores autorizados que le garantizan una perfecta instalación del sistema cumpliendo con altos estándares de calidad Eco Point.</li>
                                </ul>
                            </div>                        
                        </div>
                </div>
            </div>
            <div className='bg-greenEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10'>
                        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                            <div className="flex justify-center text-4xl font-bold font-elegant">Funcionamiento</div>
                            <div className="font-elegant sm:text-xl pt-5">
                            Las bombas de calor aire agua de Enertres utilizan como fuente energética el aire exterior. A partir de esta energía, la bomba de calor, mediante un ciclo termodinámico,
consigue alcanzar la temperatura necesaria para obtener calefacción, agua caliente sanitaria y frío. Todo ello con un bajo consumo eléctrico.
                            </div>
                            <div className="font-elegant font-bold sm:text-xl pt-5">
                                Principio de funcionamiento
                            </div>
                            <div className="font-elegant sm:text-xl pt-5">
                                La bomba de calor está formada por un compresor, una válvula de expansión y dos intercambiadores de calor: el evaporador y el condensador.
                            </div>
                            <ul className="list-disc  pt-10 text-xl  font-elegant">
                                <li>En el evaporador se produce un intercambio entre la energía obtenida del aire exterior y el refrigerante que se encuentra en su interior, que pasa de estado líquido a estado gaseoso.</li>
                                <li>El refrigerante evaporado pasa al compresor. Accionado por un motor eléctrico, y mediante un proceso de compresión, el compresor logra elevar la temperatura del refrigerante.</li>
                                
                            </ul>
                        </div>
                        <div>
                            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                                <ul className="list-disc  pt-10 text-xl  font-elegant">
                                    <li>El gas comprimido llega al condensador, donde pasa nuevamente a estado líquido. Durante este proceso de condensación se produce una cesión energética del refrigerante al circuito hidráulico, con lo que se libera la energía necesaria para cubrir las necesidades de calefacción y ACS de la vivienda.</li>
                                    <li> El refrigerante pasa a la válvula de expansión, que reduce su presión y temperatura y lo pasa al evaporador en las condiciones óptimas para que se reinicie el proceso.</li>
                                    <li>En el momento que se produzca una demanda de frío, el ciclo termodinámico de la bomba de calor se invierte, absorbiendo calor del interior de la vivienda y cediéndolo al ambiente.</li>
                                </ul>
                            </div>                        
                        </div>
                        <BotonEstudio href="/Estudio/Energetico" text="Quiero mi estudio personalizado"/>
                </div>
                
            </div>
            <Footer/>                       
        </>
    )
}

export default Aerotermia
