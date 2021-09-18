import React from 'react'
import Link from 'next/link';


const NavItem = props => (

    <div className="flex justify-center mt-6 ">
        <a
            href={props.href}
            className="text-white text-center font-elegant font-bold hover:text-greenEco text-4xl bg-blueEco rounded-full p-3 "
            >
                {props.text}
        </a>
    </div>
                    

);

const PanelSolar = () => {
    return (
        <>
          <div className='background-panelesSolares'  id='PanelSolar' >
              <div className="container m-auto">
              <div className="pt-40 sm:pt-80 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Paneles Solares
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant sm:text-xl lg:text-3xl">
                            La energía solar fotovoltaica es aquella energía obtenida directamente del sol, y aprovechada
a través de los captadores solares fotovoltaicos, para la producción de electricidad.
                            </div>
                        </div>
                        <Link href='/Informacion/EnergiaSolar'>
                            <a className="text-3xl font-elegant font-extrabold text-white text-center flex items-end justify-center pt-3">Información</a>
                        </Link>
                        
                        <div className="mt-2 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4">
                            <NavItem href="/PanelSolar/Domestico" text="Doméstico"/>
                            <NavItem href="/PanelSolar/Comercio" text="Comercio"/>
                            <NavItem href="/PanelSolar/Industria" text="Industria"/>
                            <NavItem href="/PanelSolar/Carport" text="Carport"/>                  
                         </div>  
                    </div>
              </div>            
        </div>  
        </>
    )
}

export default PanelSolar
