import React from 'react'
import LembreteEntrada from './LembreteEntrada'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <div className="container border">
        <div className="row justify-content-center border p-2">
          <div className="col-8 p-4">
            <LembreteEntrada />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
