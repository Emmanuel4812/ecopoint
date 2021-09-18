import React from 'react';
import Link from 'next/link';


const NavItem = props => (

    <div className="flex justify-center mt-6 ">
        <a 
            href={props.href}
            className="text-white text-center font-elegant font-bold hover:text-greenEco text-4xl bg-blueEco rounded-full p-3"
            >
                {props.text}
        </a>

    </div>
        

);

const CalentadoresSolares = () => {
    return (
        <>
             <div className="background-calentadorSolar" id='CalentadoresSolares'>
                <div className="container m-auto">
                    <div className="pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Calentadores Solares
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant sm:text-xl lg:text-3xl">
                            Es aquella energía obtenida directamente del sol, y aprovechada a través de los
captadores solares térmicos, para la producción de agua caliente sanitaria y calefacción.
                            </div>
                        </div>
                        <Link href='/Informacion/CalentadoresSolares'>
                            <a className="text-3xl font-elegant font-extrabold text-white text-center flex items-end justify-center pt-3">Información</a>
                        </Link>
                        <div className="mt-2 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2">
                            <NavItem href="/CalentadoresSolares/Domestico" text="Doméstico"/>                           
                            <NavItem href="/CalentadoresSolares/Industria" text="Industria"/>                  
                         </div>  
                    </div>
                </div>                             
            </div>
        </>
    )
}

export default CalentadoresSolares
