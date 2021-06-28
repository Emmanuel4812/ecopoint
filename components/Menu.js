import React, {useState,useEffect} from 'react';
import Link from 'next/link'



function Options(){
    return(
        <div className="bg-white rounded-lg py-2 shadow-xl absolute right-48 top-14">
            <Link  href="/quienesSomos">
                <a className="block px-4 py-2 hover:bg-green-500">Quienes somos</a>
            </Link>
            <a className="block px-4 py-2 hover:bg-green-500" href="#">Misión</a>
            <a className="block px-4 py-2 hover:bg-green-500" href="#">Visión</a>
            <a className="block px-4 py-2 hover:bg-green-500" href="#">Valores</a>
            <a className="block px-4 py-2 hover:bg-green-500" href="#">Paneles solares</a>
            <a className="block px-4 py-2 hover:bg-green-500" href="#">Calentadores Solares</a>
            <a className="block px-4 py-2 hover:bg-green-500" href="#">Climatización</a>
        </div>
    );
    
}


function Menu(){
    const [visible, setVisible] = useState(false)

    return (

        <div>
            <button className="text-xl text-white font-sans font-semibold flex justify-center" onMouseOver={() => setVisible(!visible)}>Menu</button>
            {visible && <Options/>}
        </div>
        
             
    );
}

export default Menu;