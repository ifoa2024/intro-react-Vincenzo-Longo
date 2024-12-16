import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Persona from './Persona'
import React from 'react'
import Bandiera from './Bandiera'
import Libro from './Libro'
import ProductInfo from './Prodotto'
import ArrayMerge from './Array'


const App = () => {
    return(
        <div className='App'>
            <Persona />
            {/* <Bandiera /> */}
            {/* <Libro /> */}
            {/* <ProductInfo /> */}
            {/* <ArrayMerge /> */}
        </div>
    )
}

export default App;