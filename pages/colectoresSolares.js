import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';




const NavItem = props => (

                <div className="flex justify-center mt-6 ">
                    <a 
                        href={props.href}
                        className="text-white text-center font-elegant font-bold hover:text-green-500 text-4xl border border-white rounded-md w-52"
                        >
                            {props.text}
                    </a>

                </div>
                    

);



const colectoresSolares = () => {

    return(
        <div>
            <Header/>
            <div className="background-colectoresSolares">
                <div className="container m-auto">
                    <div className="pt-40 sm:pt-80 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Colectores Solares
                        </div>
                        <div className="mt-2 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3">
                            <NavItem href="/colectorSolarCasa" text="Casa"/>
                            <NavItem href="/colectorSolarHotel" text="Hotel"/>
                            <NavItem href="/colectorSolarOlimpico" text="Olimpica"/>                  
                         </div>  
                    </div>
                </div>                
            </div>
            <Footer/>      
        </div>
    );
}

export default colectoresSolares;