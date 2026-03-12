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

      <Menudesplegable/>
      <Flush/>
      <Acordion/>
      <Botones/>
      <Card/>
      <Carusel/>
      <Lista/>
      <Navbar/>
      <Navbar2/>
    </>
  )
}

export default App
