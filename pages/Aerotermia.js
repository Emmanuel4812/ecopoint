import React from 'react';
import Link from 'next/link';

const Aerotermia = () => {
    return (
        <>
            <div className="background-aerotermia" id='Aerotermia'>
                <div className="container m-auto">
                        <div className="pt-60">
                            <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                                Aerotermia
                            </div>
                            <div className="flex justify-center pt-3">
                                <div className="w-3/4 text-center text-white font-elegant sm:text-xl lg:text-3xl">
                               Una manera más autosuficiente y renovable de tener aire caliente y frio en tu hogar, edificio, nave industrial, etc.
                                </div>
                            </div>
                            <Link href='/Informacion/Aerotermia'>
                            <a className="text-3xl font-elegant font-extrabold text-white text-center flex items-end justify-center pt-3">Información</a>
                            </Link>
                        </div>
                    </div>              
            </div>
            
        </>
    )
}

export default Aerotermia
