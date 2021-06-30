import Menu from './Menu';
import Link from 'next/link';



function Header(){
    return(
        <div className="absolute z-20 w-full">
            <div className="flex justify-between items-center px-10 py-2">
                <Link href="/">
                    <a>
                        <img className="z-10 w-60"src='logoEcopoint.png'></img>
                    </a>                     
                </Link>                      
                
                <div className="flex space-x-4">
                    <Menu/>
                    <div className="text-xl text-white font-elegant hover:text-green-600">Contacto</div>
                    <div className="text-xl text-white font-elegant hover:text-green-600">Blog</div>
                </div>     
            </div>
        </div>
    )
}


export default Header;