import React from 'react'

const LembreteLista = ({ lista }) => {
  return (
    <div className="container">
      <div className="row text-center rounded p-4">
        {lista.map((lembrete, index) => (
          <div className="col-12 border border-primary mt-2 py-4 rounded " key={index} style={{ wordBreak: 'break-word', width: '100%' }}>
            {lembrete}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LembreteLista
