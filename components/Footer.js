
import Link from 'next/link'
import Image from 'next/image'
import instagramLogo from '../public/instagramLogo.png'
import facebookLogo from '../public/facebookLogo.png'
import youtubeLogo from '../public/youtubeLogo.png'



// function Footer(){
//     return(
//         <div className="w-full h-60 grid grid-cols-3 bg-green-600">
//             <div className="mt-4">
//                 <Link href="quienesSomos">
//                     <a className="block font-normal text-1xl text-white px-4">Quienes somos</a>
//                 </Link>
//                 <Link href="#">
//                     <a className="block font-normal text-1xl text-white px-4">Misión/Visión</a>
//                 </Link>
//                 <Link href="#">
//                     <a className="block font-normal text-1xl text-white px-4">Valores</a>
//                 </Link>
//                 <Link href="#">
//                     <a className="block font-normal text-1xl text-white px-4">Paneles solares</a>
//                 </Link>
//                 <Link href="#">
//                     <a className="block font-normal text-1xl text-white px-4">Calentadores solares</a>
//                 </Link>
//                 <Link href="#">
//                     <a className="block font-normal text-1xl text-white px-4">Colectores solares para alberca</a>
//                 </Link>
                       
//             </div>
//             <div className="mt-2">
//                 <div className="w-full h-10 flex justify-center items-center font-bold text-xl text-white">
//                     <div>
//                         Contacto
//                     </div>   
//                 </div>
//                 <div className="w-full h-10 flex justify-center items-center font-semibold text-xl text-white">
//                     <div>
//                         +52 332 592 1050
//                     </div>   
//                 </div>
//                 <div className="w-full h-10 flex justify-center items-center font-semibold text-xl text-white">
//                     <div>
//                         contacto@ecopoint.mx
//                     </div>   
//                 </div>
//             </div>
//             <div className="mt-4">
//                 <div>
//                     <Link href="https://www.instagram.com/ecopointmx/">
//                         <a>
//                             <Image src={instagramLogo} width={30} height={30}alt="instagramLogo"/>
//                         </a>                        
//                     </Link>                    
//                 </div>
//                 <div className="mt-2">
//                     <Link href="https://www.facebook.com/search/top?q=eco%20point">
//                         <a>
//                             <Image src={facebookLogo} width={30} height={30}alt="facebookLogo"/>
//                         </a>
//                     </Link>                    
//                 </div>
//                 <div className="mt-2">
//                     <Image src={youtubeLogo} width={150} height={30}alt="facebookLogo"/>
//                 </div>              
//             </div>
//         </div>
//     );
    
// }

const FooterItems = props => <div>
    <a href={props.href} className="text-white text-xl font-elegant hover:bg-green-700 px-3">
        {props.text}
    </a>
</div>;

function Footer(){
   return(
       <div className="bg-green-500 px-10 py-6  flex justify-center">
           
           <div className="text-center">
                <div className="text-xl font-elegant font-bold text-white">Contacto</div>
                <div className="text-xl font-elegant font-bold text-white">+52 332 592 1050</div>
                <div className="text-xl font-elegant  text-white">contacto@ecopoint.mx</div>
                <div className="flex space-x-16 mt-5">
                    <Link href="https://www.instagram.com/ecopointmx/">
                        <a>
                            <Image src={instagramLogo} width={25} height={25}alt="instagramLogo"/>
                        </a>
                    </Link>                    
                    <Link href="https://www.facebook.com/search/top?q=eco%20point">
                        <a>
                            <Image src={facebookLogo} width={25} height={25}alt="facebookLogo"/>
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCXdc9bKh4Y1glvV7rlV8pYg">
                        <a>
                            <Image src={youtubeLogo} width={35} height={25}alt="youtubeLogo"/>
                        </a>
                    </Link>
                </div>
           </div>
           
           
           
       </div>
   )
}


export default Footer;