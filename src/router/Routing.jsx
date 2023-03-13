import React from 'react'
import {Routes, Route,  BrowserRouter, Link} from 'react-router-dom';

export const Routing = () => {
  return (
    <BrowserRouter>
      
          <Routes>
              <Route path='*' element={
                <>
                  <p>
                    <h1>Error 404</h1>
                    <Link to="/">Volver al inicio</Link>
                  </p>
                </>
              }/>
          </Routes>
        
    </BrowserRouter>
  )
}
