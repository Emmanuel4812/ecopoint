import React from 'react';
import Navbar from '../components/Navbar';
import Aerotermia from './Aerotermia';
import CalentadoresSolares from './CalentadoresSolares';
import ColectoresSolares from './ColectoresSolares';
import Geotermia from './Geotermia';
import PanelSolar from './PanelSolar';
import SueloRadiante from './SueloRadiante';
import Portada from './Portada';
import Footer from './Footer';



export default function Home() {
  return (
      <div>
        <Navbar/>
        <PanelSolar/>
        <CalentadoresSolares/>
        <ColectoresSolares/>
        <Aerotermia/>
        <Geotermia/>
        <SueloRadiante/>
        <Footer/>
      </div>    
  )
}
