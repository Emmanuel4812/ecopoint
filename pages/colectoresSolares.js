import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



const NavItem = props => (

                <div>
                    <a 
                        href={props.href}
                        className="text-white font-semibold hover:text-green-500 text-4xl"
                        >
                            {props.text}
                    </a>

                </div>
                    

);



const colectoresSolares = () => {

    return(
        <div>
            <Header/>
            <div className="absolute z-10 flex justify-center w-full grid grid-rows-2">
                <div className="text-5xl font-bold text-white text-center flex items-end justify-center mt-80">
                    Colectores Solares
                </div>
                <div className="flex space-x-8 justify-center h-10 mt-10">
                    <NavItem href="/colectorSolarCasa" text="Casa"/>
                    <NavItem href="/" text="Hotel"/>
                    <NavItem href="/colectorSolarOlimpico" text="Olimpica"/>                
                </div>
            </div>           
            
           
            <img className="relative z-0 bg-auto " src='albercaImage.jpg'></img>
            <Footer/>      
        </div>
    );
}

export default colectoresSolares;