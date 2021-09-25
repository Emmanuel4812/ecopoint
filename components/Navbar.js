import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Link as Links } from 'react-scroll';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    };



    return (
        <>
            <nav className='flex items-center flex-wrap bg-blueEco p-3 z-50 fixed left-0 right-0'>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <Image
                            src="/logoEcopoint.png"
                            alt="Picture of the author"
                            width={170}
                            height={26}
                        />
                    </a>
                </Link>
                <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                </button>
                <div className= {`${
                        active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Links to='PanelSolar' smooth={true}>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-greenEco hover:text-white '>
                            Panel solar
                        </a>
                        </Links>
                        <Links to='CalentadoresSolares' smooth={true}>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-greenEco hover:text-white'>
                            Calentador solar
                        </a>
                        </Links>
                        <Links to='ColectoresSolares' smooth={true}>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-greenEco hover:text-white'>
                            Colectores Solares Alberca
                        </a>
                        </Links>
                        <Links to='Aerotermia' smooth={true}>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-greenEco hover:text-white'>
                            Aerotermia
                        </a>
                        </Links>
                        <Links to='Geotermia' smooth={true}>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-greenEco hover:text-white'>
                            Geotermia
                        </a>
                        </Links>
                        <Links to='SueloRadiante' smooth={true}>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-greenEco hover:text-white'>
                            Suelo radiante
                        </a>
                        </Links>
                        <Link href='/Empresa'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-greenEco hover:text-white'>
                            Empresa
                        </a>
                        </Link>
                        <Link href='/ContactForm'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-greenEco hover:text-white'>
                            Contacto
                        </a>
                        </Link>
                    </div>
                </div>                
            </nav>  
        </>
    )
}

export default Navbar
