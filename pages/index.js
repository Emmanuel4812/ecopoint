import React from 'react'
import Menu from '../components/Menu';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div className="absolute z-10 w-full">
      <img className="absolute z-10 w-60"src='logoEcopoint.png'></img> 
        <div className="h-20 flex items-center justify-end">
            <div className="grid grid-cols-3">
              <Menu/>
              <div className="text-xl text-white font-sans font-semibold flex justify-center">Contacto</div>
              <div className="text-xl text-white font-sans font-semibold flex justify-center">Blog</div>
            </div>
        </div>
      </div>      
      <img className="relative z-0 w-full"src='indexImage.jpg'></img>
      <Footer/>           
    </div>
  )
}

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
