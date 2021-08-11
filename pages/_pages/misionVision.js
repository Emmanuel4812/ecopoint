import Header from '../components/Header';
import Footer from '../components/Footer';

const misionVision = () => {

    return(
        <div>
            <Header/>
            <div className="background-misionVision">
                <div className="container m-auto">
                    <div className="pt-20 sm:pt-40 lg:pt-60">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Misión
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-xl sm:text-3xl">
                                Transformar la manera en la que nuestros clientes ven el mundo mientras invierten en energías renovables en sus hogares negocios e industrias.
                            </div>
                        </div>                    
                    </div>
                    <div className="pt-10">
                        <div className="text-5xl font-elegant font-extrabold text-white text-center flex items-end justify-center">
                            Visión
                        </div>
                        <div className="flex justify-center pt-3">
                            <div className="w-3/4 text-center text-white font-elegant text-xl sm:text-3xl">
                                Ser altamente competente en el sector energético implementando las energías renovables mientras apoyamos en le economia de los mexicanos.
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default misionVision;