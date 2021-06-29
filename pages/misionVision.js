import Header from '../components/Header';
import Footer from '../components/Footer';

const misionVision = () => {

    return(
        <div>
            <Header/>
            <div className="absolute z-10 container mx-auto grid grid-cols-2 mt-20">
                <div>
                    hola
                </div>
                <div>
                    hola
                </div>                
            </div>            
            <img className="relative z-0 bg-auto " src='quienesSomosImage.jpg'></img>
            <Footer/>
        </div>
    );
}

export default misionVision;