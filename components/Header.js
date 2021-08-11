import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image'


function Header(){
    return(
      <div>
        {/* navbar goes here */}
        <nav className="bg-gray-300">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  <a><Image className="z-10 w-28 sm:w-40 lg:w-48"width={150} height={55}src='/logoEcopoint.png' alt="logo ecopoint"></Image></a>
                </div>
                <div className="hidden md:flex items-center space-x-3 font-elegant font-bold">
                  <a href="#">Calentador solar</a>
                  <a href="#">Panel solar</a>
                  <a href="#">Calentadores Solares para alberca</a>
                  <a href="#">Aerotermia</a>
                  <a href="#">Geotermia</a>
                  <a href="#">Suelo radiante</a>  
                 </div>
              </div>              
              <div className="hidden md:flex items-center font-elegant font-bold space-x-3">
                <a href="#" className="hover:text-blue-500">Menú</a>
                <a href="#" className="hover:text-blue-500">Empresa</a>
                <a href="#" className="hover:text-blue-500">Contacto</a>
                <a href="#" className="hover:text-blue-500">Blog</a>
              </div>
               {/*Mobile button goes here*/}
              <div className="md:hidden flex items-center">
                Mobile thing goes here
              </div>
            </div>
            <div>
              Mobile menu goes here
            </div>
                       
          </div>
        </nav>
        <div className="py-32 text-center">
          <h2 className="font-extrabold text-4x1">Navbars in Tailwind!</h2>
        </div>
      </div>
        
    )
}


export default Header;