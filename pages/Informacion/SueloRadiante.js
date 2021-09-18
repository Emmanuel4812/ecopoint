import React from 'react';
import BotonContacto from '../../components/BotonContacto';
import NavbarInner from '../../components/NavbarInner';
import Footer from '../Footer';

const SueloRadiante = () => {
    return (
        <>
            <NavbarInner/>
            <div className='bg-greenEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10 pt-16'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Suelo Radiante</div>
                        <div className="pt-2 text-2xl font-semibold">Es el sistema mas eficiente y económico para dar calefacción y refrescar tu hogar.</div>
                        <div className="font-elegant sm:text-xl pt-2">
                        Está constituido por una red de tuberías distribuidas uniformemente
bajo el pavimento, por las cuales circula agua, consiguiéndose en el
ambiente una temperatura altamente homogénea y confortable tanto
en invierno, como en verano.

                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow font-elegant sm:text-xl">
                        <div className="flex justify-center text-4xl font-bold font-elegant">¿Dónde se puede instalar el suelo radiante?</div>
                        <ul className="list-disc  pt-10 text-xl  font-elegant">
                            <li>En viviendas: individuales y colectivas.</li>
                            <li>En edificios como hospitales, oficinas, fábricas, colegios, guarderías infantiles, residencias de ancianos, iglesias, naves industriales, hangares, etc.</li>
                            <li>Complejos deportivos: polideportivos, pistas de tenis gimnasios, cubiertas, piscinas, etc.</li>
                            <li>Al aire libre: como anti-hielo en parkings, zonas peatonales, rampas de acceso escaleras, etc</li>
                        </ul>
                    </div>               
                </div>
            </div>
            <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="flex justify-center text-4xl font-bold font-elegant">Ventajas de este tipo de calefacción</div>
                        <div className="pt-2 text-2xl font-semibold">Económico</div>
                        <div className="font-elegant sm:text-xl pt-2">
                            Es una de sus ventajas más evidentes, consiguiendo ahorros de entre el 25 y el 30% sobre otros sistemas tradicionales en viviendas, oficinas, etc. En grandes locales, como naves industriales, hangares,
los ahorros pueden llegar hasta el 50-60%, llegando hasta el 75-
80%, cuando lo combinamos con energías renovables como
geotermia, solar térmica, o biomasa.

                        </div>
                        <div className="pt-2 text-2xl font-semibold">Saludable</div>
                        <div className="font-elegant sm:text-xl pt-2">
                        Debido a su funcionamiento a baja temperatura no se generan
corrientes de aire caliente que resequen el ambiente ni las mucosas
nasales, evitando también el movimiento de polvo y los
microorganismos (ácaros) en el ambiente. Por eso está
especialmente indicado en hospitales, guarderías, centros de
mayores, etc. Es además el único sistema recomendado por la
Organización Mundial de la Salud (OMS).

                        </div>
                        <div className="pt-2 text-2xl font-semibold">Seguro y limpio</div>
                        <div className="font-elegant sm:text-xl pt-2">
                        Elimina los riesgos de quemaduras a niños por altas temperaturas
en elementos accesibles (radiadores), características de otros
sistemas, y el ensuciamiento de paredes en la parte superior de los
radiadores y en partes inaccesibles de los mismos.
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow font-elegant sm:text-xl">
                        <div className="pt-2 text-2xl font-semibold">Confortable</div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Son los que más se ajustan al perfil óptimo de temperaturas del
cuerpo humano, proporcionado el máximo confort tanto en periodo
de calefacción como de refrescamiento. Siendo además el más
favorable para elementos ornamentales naturales como plantas,
flores, etc.
                            </div>
                            <div className="pt-2 text-2xl font-semibold">Integrable</div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Con cualquier tipo de revestimiento de suelo (madera, mármol,
cerámico, moqueta, etc.)
                            </div>
                            <div className="pt-2 text-2xl font-semibold">Temperatura uniforme</div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Debido a que toda la superficie del suelo irradia de manera
uniforme el calor en el periodo de calefacción y lo absorbe en
periodo de refrescamiento, evita las zonas frías y calientes
características de otros sistemas convencionales
                            </div>
                    </div>              
                </div>
            </div>
            <div className='bg-greenEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="pt-2 text-2xl font-semibold">Invisible</div>
                        <div className="font-elegant sm:text-xl pt-2">
                        No se ve, solamente se siente su confort. No necesita
elementos invasivos en el ambiente como radiadores,
convectores, etc. Así no condicionamos la decoración y
dejamos más espacio libre para tus muebles.
                        </div>
                        <div className="pt-2 text-2xl font-semibold">Fiable</div>
                        <div className="font-elegant sm:text-xl pt-2">
                        Debido a la alta calidad de los materiales empleados en
el aislamiento y las tuberías y a la ausencia de
empalmes el riesgo de averías es prácticamente nulo.

                        </div>
                        <div className="pt-2 text-2xl font-semibold">Aislamiento adicional</div>
                        <div className="font-elegant sm:text-xl pt-2">
                        Su instalación aporta un aislamiento adicional,
mejorando el aislamiento térmico y acústico de la
vivienda.
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow font-elegant sm:text-xl">
                        <div className="pt-2 text-2xl font-semibold">Sistemas de suelo radiante de Eco Point</div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Nuestros sistemas de suelo radiante y refrescante cumplen con
la norma UNE-EN 1264 y están constituidos por materiales de la
más alta calidad.
                            </div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Estos sistemas han sido especialmente diseñados y estudiados
para conseguir el máximo aprovechamiento eficiente de las
fuentes de energía renovables, proporcionando en mayor confort
y la más alta eficiencia energética.
                            </div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Gracias a las múltiples opciones de regulación y control nos
adaptamos a cualquier necesidad, garantizándole el máximo
bienestar.
                            </div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Además con nuestro sistema global confort (sistema de
climatización integral) no solo se emite calor en periodo de
calefacción, sino que se absorbe durante el verano,
consiguiendo un agradable refrescamiento del ambiente de su
hogar.
                            </div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Desde 
Eco Point ofrecemos también asesoramiento completo
ofreciendo entre otros los siguientes servicios:
                            </div>
                            <ul className="list-disc  pt-10 text-xl  font-elegant">
                            <li>Cálculo y dimensionamiento del sistema</li>
                            <li>Atención post-venta a través de nuestros servicios técnicos</li>
                            <li>Red de instaladores autorizados que le garantizan una
perfecta instalación del sistema cumpliendo con altos
estándares de calidad Eco Point.</li>
                            
                        </ul>
                    </div>              
                </div>
            </div>
            <div className='bg-blueEco flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10'>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <div className="pt-2 text-4xl font-semibold">¿Cómo funciona el suelo radiante?</div>
                        <div className="pt-2 text-2xl font-semibold">En invierno</div>
                        <div className="font-elegant sm:text-xl pt-2">
                        El agua caliente a baja temperatura (35-40ºC) fluye a través de
los circuitos de tuberías, situados bajo el pavimento y esto
calienta tu vivienda.
                        </div>
                        
                        <div className="font-elegant sm:text-xl pt-2">
                        Al distribuirse el calor desde el suelo, se consigue un gradiente
de temperaturas ideal para el confort humano, manteniendo los
pies calientes y la cabeza fresca.
                        </div>
                        
                        <div className="font-elegant sm:text-xl pt-2">
                        Este gradiente de temperaturas favorece, además, el ahorro
energético; ya que con los sistemas de calefacción
convencionales el aire caliente tiende a situarse cerca del
techo, cuando las mayores necesidades térmicas se sitúan en
la parte inferior de las estancias.

                        </div>
                        <div className="font-elegant sm:text-xl pt-2">
                        Así pues, calentando desde la superficie del suelo se cubren
estas necesidades sin tener que calentar el aire situado en la
parte superior de forma innecesaria y ahorrando energía.

                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow font-elegant sm:text-xl">
                        <div className="pt-2 text-2xl font-semibold">En verano</div>
                            <div className="font-elegant sm:text-xl pt-2">
                            La misma instalación de suelo radiante para calefacción puede
emplearse para refrescar el ambiente en las estaciones más
cálidas.
                            </div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Pasamos agua a través de los circuitos de tuberías a una
temperatura en torno a los 17ºC, que absorberá el exceso de
calor de la estancia aportando una agradable sensación de
frescor.

                            </div>
                            <div className="font-elegant sm:text-xl pt-2">
                            Para llevar a cabo la climatización por el suelo es necesario que
el sistema se base en una bomba de calor geotérmica, bomba
de calor convencional o en un sistema de caldera y enfriadora,
ya que éstas aportarán calor en las épocas más frías y frío en
las épocas más cálidas.
                            </div>
                    </div>
                    <BotonContacto href="/Estudio/EnergeticoIndustrial" text="Quiero mi estudio personalizado" className="bg-blueEco"/>              
                </div>
               
            </div>
            <Footer/>
            
        </>
    )
}

export default SueloRadiante
