import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';





const panelesSolarDomestico = () => {

    return(
        <div>
            <Header/>
            <div className="absolute z-10 flex justify-center w-full grid grid-rows-3 mt-80">
                <div className="text-5xl font-bold text-white text-center flex items-end justify-center">
                    Comercio
                </div>
                <div className="flex space-x-8 justify-center h-10 mt-10 ">
                   <pre className="text-3xl font-regular text-white font-sans text-center">{`Paneles solares para uso negocio y empresas.
Aumenta tus ganancias de una manera ecológica implementando energías renovables`}</pre>                  
                </div>
                <div className="flex justify-center">
                    <button className="bg-green-500 hover:bg-green-700 mt-10 w-60 text-white">Estudio personalizado</button>
                </div>                            
            </div>        
            
           
            <img className="relative z-0 bg-auto " src='panelComercioImage.jpg'></img>
            <Footer/>      
        </div>
    );
}

export default panelesSolarDomestico;