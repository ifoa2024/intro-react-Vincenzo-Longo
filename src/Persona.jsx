import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Persona() {
  const persona = {
    name: 'vincenzo',
    surname: 'longo',
    age: 19,
  }
  

  const {name, surname} = persona;
  return(
    <div>
        <h1>Nome: {name}</h1>
        <h2>Cognome: {surname}</h2>
    </div>
  )
}

export default Persona;
