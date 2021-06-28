
import Link from 'next/link'
import Image from 'next/image'
import instagramLogo from '../public/instagramLogo.png'
import facebookLogo from '../public/facebookLogo.png'
import youtubeLogo from '../public/youtubeLogo.png'



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
            <div className="mt-4">
                <div>
                    <Link href="https://www.instagram.com/ecopointmx/">
                        <a>
                            <Image src={instagramLogo} width={30} height={30}alt="instagramLogo"/>
                        </a>                        
                    </Link>                    
                </div>
                <div className="mt-2">
                    <Link href="https://www.facebook.com/search/top?q=eco%20point">
                        <a>
                            <Image src={facebookLogo} width={30} height={30}alt="facebookLogo"/>
                        </a>
                    </Link>                    
                </div>
                <div className="mt-2">
                    <Image src={youtubeLogo} width={150} height={30}alt="facebookLogo"/>
                </div>              
            </div>
        </div>
    );
    
}


export default Footer;