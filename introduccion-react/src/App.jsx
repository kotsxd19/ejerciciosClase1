import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton'
import Menudesplegable from './components/MenuDesplegable'
import Flush from './components/Acordion' 
import Acordion from './components/Alerta'
import Botones from './components/FilaBoton'
import Card from './components/Carta'
import Carusel from './components/Carusel'
import Lista from './components/list'
import Navbar from './components/Nav'
import Navbar2 from './components/Navs2'
import Spinner from './components/Spinner'
import Popovers from './components/Popovers'
import Pagination from './components/Pagination'
import Offcanva from './components/Offcanva'
import Alert from './components/Alert'
import Letras from './components/Letras'
import Pillbadget from './components/pillbadgets'
import BotonesColor  from './components/Buttons'
import DropdownsColor from './components/DropdownsColor'
import SpinnerColor from './components/SpinnerColors'
import GrowiSpinner from './components/GrowingSpinner'



function App() {

  return (
    <>
      <Boton 
      titulo="Boton 1"
      accion={() => {
        alert("Has hecho click en el boton 1")
      }}
      />
      <Boton 
      titulo="Boton 2"
      accion={() => {
        alert("Has hecho click en el boton 2")
      }}
      />
        <div className='espacio'><Menudesplegable/></div>
        <div className='espacio' ><Flush/></div>
        <div className='espacio'><Acordion/></div>
        <div className='espacio'><Botones/></div>
        <div className='espacio'><Card/></div>
        <div className='espacio'><Carusel/></div>
        <div className='espacio'><Lista/></div>
        <div className='espacio'><Navbar/></div>
        <div className='espacio'><Navbar2/></div>
        <div className='espacio'><Spinner/></div>
        <div className='espacio'><Popovers/></div>
        <div className='espacio'><Pagination/></div>
        <div className='espacio'><Offcanva/></div>
        <div className='espacio'><Alert/></div>
        <div className='espacio'><Letras/></div>
        <div className='espacio'><Pillbadget/></div>
        <div className='espacio'><BotonesColor/></div>
        <div className='espacio'><DropdownsColor/></div>
        <div className='espacio'><SpinnerColor/></div>
        <div className='espacio'><GrowiSpinner/></div>
      
      
      
      
      
      
      
      
      
      
      
      
    </>
  )
}

export default App
