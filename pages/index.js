import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Header/>    
      <img className="relative z-0 w-full"src='indexImage.jpg'></img>           
      <Footer/>           
    </div>
  )
}

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
