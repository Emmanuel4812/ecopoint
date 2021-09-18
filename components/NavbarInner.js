import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const NavbarInner = () => {
    return (
        <>
            <nav className='flex items-center flex-wrap bg-blueEco p-3 fixed left-0 right-0 justify-center shadow-xl z-10'>
                <Link href='/'>
                    <a className='inline-flex items-center justify-center p-2 mr-4 '>
                        <Image
                            src="/logoEcopoint.png"
                            alt="Picture of the author"
                            width={170}
                            height={26}
                        />
                    </a>
                </Link>
                  
            </nav>  
        </>
    )
}

export default NavbarInner
