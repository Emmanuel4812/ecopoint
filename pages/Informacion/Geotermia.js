import React from 'react';
import Image from 'next/image';
import captacionVertical from '../../public/captacionVertical.jpg';
import captacionHorizontal from '../../public/captacionHorizontal.jpg';
import captacionCircuito from '../../public/captacionCircuito.jpg';
import BotonContacto from '../../components/BotonContacto';
import NavbarInner from '../../components/NavbarInner';
import Footer from '../Footer';

const Geotermia = () => {
    return (
        <>
            <NavbarInner/>
            <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10 pt-16'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">GEOTERMIA</div>
                        <div className="font-elegant sm:text-xl">
                        La energía geotérmica es aquella energía en forma de calor situada bajo la superficie solida de la tierra.
Mediante los diferentes sistemas de captación se realiza el intercambio de calor con el terreno. La energía geotérmica de muy baja
temperatura se regenera constantemente por efecto del sol, la lluvia y el calor interno de la tierra.
La energía geotérmica es una de las energías renovables mas eficiente, aprovechable en cualquier lugar del planeta, 24 horas al día,
365 días al año
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow font-elegant sm:text-xl">
                    La bomba de calor geotérmica aprovecha la temperatura constante del
subsuelo a lo largo de todo el año.
Por ejemplo, la que contiene el terreno que rodea a las viviendas o de las
aguas freáticas, absorbiendo o cediendo calor al terreno a través de los
diferentes sistemas de captación geotérmica.
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow font-elegant sm:text-xl">
                    Esto permite calentar su hogar en invierno, refrigerarlo en verano y producir
agua caliente sanitaria de manera muy eficiente.
El aprovechamiento de esta energía se realiza desde hace más de 40 años en
países como Alemania, Austria, Suiza, Suecia, Francia, USA, por lo que su
aprovechamiento es muy fiable por tratarse de una tecnología madura.
                    </div>                    
                </div>
            </div>
            <div className='bg-greenEco flex justify-center items-center'>
                <div className='grid grid-cols-1 m-10'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">¿Dónde podemos instalar esta energía?</div>
                        <div className="flex justify-center text-4xl font-normal font-elegant">Aplicaciones del sistema:</div>
                        <ul className="list-disc  pt-10 text-xl  font-elegant">
                            <li>Climatización de edificios, naves industriales, hospitales, oficinas, centros comerciales, pabellones deportivos, geriátricos, gimnasios, etc.</li>
                            <li>En la producción de agua caliente sanitaria (ACS).</li>
                            <li>Para la climatización de piscinas.</li>
                            <li>Para la refrigeración.</li>
                            <li>Ideal para la ganadería.</li>
                            <li>Granjas avícolas y porcinas.</li>
                            <li>Piscifactorias.</li>
                            <li>Procesos Industriales.</li>
                            <li>Lavaderos industriales, etc.</li>
                        </ul>
                    </div>                
                </div>
            </div>
            <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
                        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                            <div className="flex justify-center text-4xl font-bold font-elegant">Ventajas</div>
                            <div className="font-elegant sm:text-xl">
                                Los sistemas geotérmicos de Eco Point ofrecen las siguientes ventajas:
                            </div>
                            <div className="font-elegant font-semibold sm:text-xl pt-5">
                                Comodidad y confort
                            </div>
                            <ul className="list-disc  pt-2 text-xl  font-elegant">
                                <li>Calefacción por medio de la simple pulsación de un botón.</li>
                                <li>Funcionamiento seguro y silencioso.</li>
                                <li>Produce agua caliente, calefacción y frío.</li>
                                <li>Posibilidad de usarse para refrescamiento gratuito (free-cooling).</li>
                                <li>Altamente fiable.</li>
                            </ul>
                            <div className="font-elegant font-semibold sm:text-xl pt-5">
                                Respeto por el medio ambiente
                            </div>
                            <div>
                                <ul className="list-disc  pt-2 text-xl  font-elegant">
                                    <li>Sin humos.</li>
                                    <li>Sin hollín.</li>
                                    <li>Sin polvo.</li>
                                    <li>Sin depósitos para combustible.</li>
                                    <li>Bajas emisiones de CO2. Hasta un 75% menos sistemas que emplean combustibles fósiles.</li>
                                </ul>
                            </div>
                            <div className="font-elegant font-semibold sm:text-xl pt-5">
                                Reducidos costes de operación
                            </div>
                            <div>
                                <ul className="list-disc  pt-2 text-xl  font-elegant">
                                    <li>Reducidos costes de operación.</li>
                                    <li>Muy bajo mantenimiento.</li>
                                </ul>
                            </div>          
                        </div>
                        <div>
                            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                            <div className="font-elegant font-semibold sm:text-3xl lg:text-2xl pt-5">
                                Retorno de la inversión a corto plazo
                            </div>
                            <div>
                                <ul className="list-disc  pt-2 text-xl  font-elegant">
                                    <li>Sin chimeneas</li>
                                    <li>Sin espacios para depósitos ni cuartos de calderas.</li>
                                    <li>Sin conexiones a la red de gas. No hay combustión.</li>
                                    <li>Revalorización de la edificación, gracias a una fuente energética propia.</li>
                                    <li>Posibilidad de subvenciones.</li>
                                </ul>
                            </div>
                            <div className="font-elegant font-semibold sm:text-xl pt-5">
                                Ahorro de energía
                            </div>
                            <div>
                                <ul className="list-disc  pt-2 text-xl  font-elegant">
                                    <li>Aproximadamente el 65-75 % de la energía necesaria para calefacción y/o refrigeración y agua caliente sanitaria es proporcionada de forma gratuita por el terreno o el agua freática.</li>
                                    <li>La parte restante procede de la energía eléctrica necesaria para el accionamiento del compresor.</li>
                                </ul>
                            </div>         
                            </div>                        
                        </div>
                        <div>
                            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                                <div className="font-elegant font-semibold sm:text-3xl lg:text-2xl pt-5">
                                    En Eco Point ofrecemos también asesoramiento completo ofreciendo entre otros los siguientes servicios
                                </div>
                                <div>
                                    <ul className="list-disc  pt-2 text-xl  font-elegant">
                                        <li>Cálculo y dimensionamiento del sistema.</li>
                                        <li>Replanteo y diseño de la instalación</li>
                                        <li>Estudio energético con cálculo del periodo de amortización</li>
                                        <li>Servicio puesta en marcha</li>
                                        <li>Atención post-venta a través de nuestros servicios técnicos</li>
                                        <li>Red de instaladores autorizados que le garantizan una perfecta instalación del sistema cumpliendo con altos estándares de calidad Eco Point.</li>
                                    </ul>
                                </div>                          
                            </div>                        
                        </div>
                </div>
            </div>
            <div className='bg-greenEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10'>
                        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                            <div className="flex justify-center text-4xl font-bold font-elegant">¿Cómo funciona la energía geotérmica?</div>
                            <div className="font-elegant sm:text-xl pt-5">
                                Mediante la bomba de calor geotérmica se puede extraer la energía calorífica (en forma de temperatura) de la tierra o el agua.
                            </div>
                            <div className="font-elegant font-semibold sm:text-xl pt-5">
                                La energía se extrae a baja temperatura y mediante un proceso de compresión realizado en un circuito frigorífico por medio de un compresor (alimentado por energía eléctrica).
                            </div>
                            <div className="font-elegant  sm:text-xl pt-5">
                                Cuando alcanza una temperatura elevada, podemos utilizar esa energía calórica tanto para calefacción, como para el agua caliente y con la inversión del ciclo frigorífico para producir frío.
                             </div>
                             <div className="font-elegant  sm:text-xl pt-5">
                                La sencilla estructura de una bomba de calor esta compuesta por unos pocos elementos: compresor, evaporador, condensador y dispositivo de expansión.
                             </div>
                             <div className="font-elegant  sm:text-xl pt-5">
                                En un circuito cerrado circula un líquido refrigerante, que capta el calor gratuito del terreno, el cual es distribuido, por medio del condensador, al circuito de calefacción y al sistema de obtención de agua caliente sanitaria (ACS).
                             </div>
                             <div className="font-elegant  sm:text-xl pt-5">
                                Podemos decir, que un frigorífico funciona según este mismo principio.
                             </div>            
                        </div>
                        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                            <div className="font-elegant sm:text-xl pt-5">
                                Todo esto se realiza en el interior del circuito cerrado de la bomba de calor geotérmica en el cual un compuesto adecuado (líquido refrigerante) se evapora constantemente, luego se comprime y nuevamente se condensa.
                            </div>
                            <div className="font-elegant sm:text-xl pt-5">
                                De este modo es posible llevar la energía calorífica de un nivel de temperatura más bajo a otro más alto o invirtiendo el ciclo justo lo contrario (generación de frío
                            </div>
                            <div className="font-elegant sm:text-xl pt-5">
                                La bomba de calor geotérmica además se beneficia por las características del subsuelo que se mantiene a una temperatura uniforme durante todo el año.
                            </div>
                            <div className="font-elegant sm:text-xl pt-5">
                                Por lo tanto, su funcionamiento no se ve perjudicado en función de la temperatura del aire como en el caso de una bomba de calor aire-agua, que disminuye mucho su rendimiento cuando las temperaturas del aire ambiente sufren grandes cambios, como ocurre en el invierno y en el verano.
                            </div>      
                        </div>
                </div>                               
            </div>
            <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10'>
                    <div>
                        <Image src={captacionVertical} alt="Picture of the author" className='rounded-xl'/>
                    </div>
                        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                            <div className="flex justify-center text-4xl font-bold font-elegant">Sistemas de captación</div>
                            <div className="flex justify-center text-2xl font-bold font-elegant  pt-3">Captación vertical cerrada</div>
                            <div className="font-elegant sm:text-xl pt-5">
                                A través de una perforación practicada en el terreno se introduce una sonda de captación geotérmica formada por una tubería de plástico de alta densidad, que permanece inalterable durante mas de 50 años.
                            </div>
                            <div className="font-elegant sm:text-xl pt-5">
                                Por medio de la recirculación del fluido caloportador (agua + anticongelante) por el interior de la tubería, se intercambia el calor con el terreno circundante.
                            </div>
                            <div className="font-elegant sm:text-xl pt-5">
                                Por ejemplo, para una potencia de bomba de calor de 10 kW (necesarios para una vivienda de 150-200 m2) es necesario por término medio de un sondeo de una profundidad de 135 m.
                            </div>      
                        </div>
                </div>                               
            </div>
            <div className='bg-greenEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10'>
                    <div>
                        <Image src={captacionHorizontal} alt="Picture of the author" className='rounded-xl'/>
                    </div>
                        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                            <div className="flex justify-center text-4xl font-bold font-elegant">Sistemas de captación</div>
                            <div className="flex justify-center text-2xl font-bold font-elegant  pt-3">Captación horizontal cerrada</div>
                            <div className="font-elegant sm:text-xl pt-5">
                                A una profundidad del terreno de entre 1-1.5 m, se sitúan los circuitos de captación geotérmicos formados por una red tuberías de plástico de alta densidad conectadas entre sí mediante un colector en circuito cerrado.
                            </div>
                            <div className="font-elegant sm:text-xl pt-5">
                                Gracias a la recirculación del fluido caloportador (agua + anticongelante) se intercambia calor en el terreno. Para unas necesidades de 10kW de potencia térmica son necesarios por término medio 400 m2 de terreno
                            </div> 
                        </div>
                </div>                               
            </div> 
            <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10'>
                    <div>
                        <Image src={captacionCircuito} alt="Picture of the author" className='rounded-xl'/>
                    </div>
                        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                            <div className="flex justify-center text-4xl font-bold font-elegant">Sistemas de captación</div>
                            <div className="flex justify-center text-2xl font-bold font-elegant  pt-3">Captación de circuito abierto</div>
                            <div className="font-elegant sm:text-xl pt-5">
                                El agua subterránea es extraída de un pozo gracias una bomba de extracción de agua, intercambiando su calor a través de la bomba de calor geotérmica. Una vez es aprovechada térmicamente, es devueltaal acuífero por medio de otro pozo.
                            </div>
                            <div className="font-elegant sm:text-xl pt-5">
                                El agua subterránea es la fuente ideal de calor, ya que prácticamente se mantiene a la misma temperatura todo el año. Para unas necesidades de 10 Kw. son necesarios de media 3.000 l/h de agua subterránea.
                            </div> 
                        </div>
                        <BotonContacto href="/Estudio/EnergeticoIndustrial" text="Quiero mi estudio personalizado"/>
                </div>                               
            </div>
            <Footer/>                                       
        </>
    )
}

export default Geotermia
