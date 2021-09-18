import React from 'react';
import Link from 'next/link';

const Geotermia = () => {
    return (
        <>
            <div className="background-geotermia" id='Geotermia'>
                <div className="container m-auto">
                        <div className="pt-60">
                            <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                                Geotermia
                            </div>
                            <div className="flex justify-center pt-3">
                                <div className="w-3/4 text-center text-white font-elegant sm:text-xl lg:text-3xl">
La energía geotérmica es una de las energías renovables más eficiente, aprovechable en cualquier lugar del planeta, las 24 horas al día, los 365 días del año.
                                </div>
                            </div>
                            <Link href='/Informacion/Geotermia'>
                                <a className="text-3xl font-elegant font-extrabold text-white text-center flex items-end justify-center pt-3">Información</a>
                            </Link>
                        </div>
                    </div>              
            </div>
        </>
    )
}

export default Geotermia
