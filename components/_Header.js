import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image'


function Header(){
    return(
        <div className="absolute z-40 w-full">
            <div className="flex justify-between items-center px-10 py-2">
                <Link href="/">
                    <a>
                        <Image className="z-10 w-28 sm:w-40 lg:w-48"width={150} height={55}src='/logoEcopoint.png' alt="logo ecopoint"></Image>
                    </a>                     
                </Link>                      
                
                <div className="flex space-x-4">
                    <Menu/>
                    <Link href="/contacto">
                        <a className="text-xl text-white font-elegant hover:text-green-600">
                            Contacto    
                        </a>
                    </Link>
                    
                </div>
                    
            </div>
        </div>
    )
}


export default Header;