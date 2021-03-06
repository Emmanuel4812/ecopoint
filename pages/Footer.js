import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import instagramLogo from '../public/instagramLogo.png';
import facebookLogo from '../public/facebookLogo.png';
import youtubeLogo from '../public/youtubeLogo.png';
import linkdnLogo from '../public/linkdnLogo.png';

const Footer = () => {
    return (
        <>
                  <div className="bg-gradient-to-r from-greenEco to-blueEco px-10 py-6  flex justify-center  w-full relative z-0">
           
                    <div className="text-center">
                            <div className="text-xl font-elegant font-bold text-white">Contacto</div>
                            <div className="text-xl font-elegant font-bold text-white">+52 332 592 1050</div>
                            <div className="text-xl font-elegant  text-white">contacto@ecopoint.mx</div>
                            <div className="flex space-x-16 mt-5">
                                <Link href="https://www.instagram.com/ecopointmx/">
                                    <a>
                                        <Image src={linkdnLogo} width={25} height={25}alt="instagramLogo"/>
                                    </a>
                                </Link>  
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
        </>
    )
}

export default Footer
