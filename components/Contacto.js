import Link from 'next/link';



function Contacto(){
    return(
        <div>
            <Link href="https://api.whatsapp.com/message/KTLO5B4HWCIHM1">
                <a className="flex justify-center">
                    <button className="bg-green-500 hover:bg-green-700 w-60 text-white py-2 mt-4 rounded-sm">Whatsapp</button>
                </a>
            </Link>          
            <div className="text-xl font-elegant  text-white text-center">contacto@ecopoint.mx</div>
        </div>
    )
}


export default Contacto;