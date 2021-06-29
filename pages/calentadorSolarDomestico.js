import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';





const calentadorSolarDomestico = () => {

    return(
        <div>
            <Header/>
            <div className="absolute z-10 flex justify-center w-full grid grid-rows-3 mt-80">
                <div className="text-5xl font-bold text-white text-center flex items-end justify-center">
                    Doméstico  
                </div>
                <div className="flex space-x-8 justify-center h-10 mt-10 ">
                   <pre className="text-3xl font-regular text-white font-sans text-center">{`Ahorra hasta un 80% de tu consumo de gas 
con calentadores solares`}</pre>                  
                </div>
                <div className="flex justify-center">
                    <button className="bg-green-500 hover:bg-green-700 mt-10 w-60 text-white">Estudio personalizado</button>
                </div>                            
            </div>        
            
           
            <img className="relative z-0 bg-auto " src='calentadorDomesticoImage.jpg'></img>
            <Footer/>      
        </div>
    );
}

export default calentadorSolarDomestico;