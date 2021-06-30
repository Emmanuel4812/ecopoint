import React, {useState,useEffect} from 'react';
import Link from 'next/link'



function Options(){
    return(
        <div className="bg-white rounded-lg py-2 shadow-xl absolute right-48 top-20">
            <Link  href="/quienesSomos">
                <a className="block px-4 py-2 hover:bg-green-500">Quienes somos</a>
            </Link>
            <Link href="/misionVision">
                <a className="block px-4 py-2 hover:bg-green-500">Misión/Visión</a>
            </Link>
            <Link href="/valores">
                <a className="block px-4 py-2 hover:bg-green-500" href="#">Valores</a>
            </Link>           
            <Link href="/panelesSolares">
                <a className="block px-4 py-2 hover:bg-green-500" href="#">Paneles solares</a>
            </Link>
            <Link href="/calentadoresSolares">
                <a className="block px-4 py-2 hover:bg-green-500" href="#">Calentadores Solares</a>
            </Link>
            <Link href="/colectoresSolares">
                <a className="block px-4 py-2 hover:bg-green-500" href="#">Colectores solares para alberca</a>
            </Link>      
        </div>
    );
    
}


function Menu(){
    const [visible, setVisible] = useState(false)

    return (

        <div>
            <button className="text-xl text-white font-elegant hover:text-green-600" onClick={() => setVisible(!visible)}>Menu</button>
            {visible && <Options/>}
        </div>
        
             
    );
}

export default Menu;