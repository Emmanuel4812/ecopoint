import Menu from './Menu';
import Link from 'next/link';



function Header(){
    return(
        <div className="absolute z-20 w-full">
            <Link href="/">
                <a>
                    <img className="absolute z-10 w-60"src='logoEcopoint.png'></img> 
                </a>
            </Link>            
            <div className="h-20 flex items-center justify-end">
                <div className="grid grid-cols-3">
                <Menu/>
                <div className="text-xl text-white font-sans font-semibold flex justify-center">Contacto</div>
                <div className="text-xl text-white font-sans font-semibold flex justify-center">Blog</div>
                </div>
            </div>
        </div>      
    );
    
}


export default Header;