import Header from '../components/Header';
import Footer from '../components/Footer';

const misionVision = () => {

    return(
        <div>
            <Header/>
            <div className="absolute z-10 w-full grid grid-cols-2 mt-60 ">
                <div>
                    <div className="flex justify-center font-bold text-white text-6xl text-white">
                        Misión
                    </div>
                    <pre className="text-center font-semibold text-4xl text-white font-sans mt-10 text-white">
                        {`Transformar la manera en 
la que nuestros clientes
ven el mundo mientras
invierten en energías
renovables en sus hogares
negocios e industrias.`}
                    </pre>
                </div>

                <div>
                    <div className="flex justify-center font-bold text-white text-6xl text-white">
                        Visión
                    </div>
                    <pre className="text-center font-semibold text-4xl text-white font-sans mt-10 text-white">
                            {`Ser altamente competente
en el sector energético
implementando las energías
renovables mientras apoyamos
en le economia de los mexicanos.`}
                    </pre>      
                </div>                
                         
            </div>            
            <img className="relative z-0 bg-auto " src='misionVisionImage.jpg'></img>
            <Footer/>
        </div>
    );
}

export default misionVision;