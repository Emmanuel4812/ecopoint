
import Link from 'next/link'



function Footer(){
    return(
        <div className="w-fu
        ll h-60 grid grid-cols-3 bg-green-600">
            <div className="mt-4">
                <Link href="quienesSomos">
                    <a className="block font-normal text-1xl text-white px-4">Quienes somos</a>
                </Link>
                <Link href="#">
                    <a className="block font-normal text-1xl text-white px-4">Visión</a>
                </Link>
                <Link href="#">
                    <a className="block font-normal text-1xl text-white px-4">Misión</a>
                </Link>
                <Link href="#">
                    <a className="block font-normal text-1xl text-white px-4">Valores</a>
                </Link>
                <Link href="#">
                    <a className="block font-normal text-1xl text-white px-4">Paneles solares</a>
                </Link>
                <Link href="#">
                    <a className="block font-normal text-1xl text-white px-4">Calentadores solares</a>
                </Link>
                <Link href="#">
                    <a className="block font-normal text-1xl text-white px-4">Climatización</a>
                </Link>
                       
            </div>
            <div className="mt-2">
                <div className="w-full h-10 flex justify-center items-center font-bold text-2xl text-white">
                    <div>
                        Contacto
                    </div>   
                </div>
                <div className="w-full h-10 flex justify-center items-center font-semibold text-2xl text-white">
                    <div>
                        +52 332 592 1050
                    </div>   
                </div>
            </div>
            <div>Hola</div>
        </div>
    );
    
}


export default Footer;