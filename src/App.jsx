import React from 'react'
import Navabar from './navegacion/Navabar'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Inicio from './paginas/incio/Incio'
import Contactos from './paginas/contactos/Contactos'
import Crud from './paginas/crud/Crud'
import Rick from './paginas/rick/Rick'
import Usuario from './paginas/incio/Usuario'




const App = () => {
  return (
    <>
        <BrowserRouter>
            <Navabar />
              <Routes>
                <Route path="/" exact  element={<Inicio />} />
                 <Route path="/usuario/:id" exact element={<Usuario />} />
                <Route path="/rick" element={<Rick />} />
                <Route path="/crud" element={<Crud />} />
                <Route path="/contactos" element={<Contactos />} />
              </Routes>
        </BrowserRouter>

        
    </>
  )
}

export default App
