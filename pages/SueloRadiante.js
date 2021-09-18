import React from 'react';
import Link from 'next/link';

const SueloRadiante = () => {
    return (
        <>
            <div className='background-sueloRadiante' id='SueloRadiante'>
                <div className="container m-auto">
                    <div className="pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Suelo Radiante
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant sm:text-xl lg:text-3xl">
                                Una manera más autosuficiente y renovable de tener calefacción y refrescar tu hogar.
                            </div>
                        </div>
                        <Link href='/Informacion/SueloRadiante'>
                        <a className="text-3xl font-elegant font-extrabold text-white text-center flex items-end justify-center pt-3">Información</a>
                        </Link>
                    </div>
                </div>         
            </div>            
        </>
    )
}

export default SueloRadiante
