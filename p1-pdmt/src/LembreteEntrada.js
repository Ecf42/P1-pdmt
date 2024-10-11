import React, { Component } from 'react'

export default class LembreteEntrada extends Component {
  render() {
    return (
      <div className="container">
        <div className="row d-flex align-items-center">
					<input
            type="text"
            className="col-12 text-center form-control mt-2"
            placeholder="Digite seu lembrete"
          />
          <button className="btn btn-outline-primary w-100 mt-2">Cadastrar</button>
        </div>
      </div>
    )
  }
}
