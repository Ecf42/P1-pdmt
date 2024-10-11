import React, { Component } from 'react'
import LembreteEntrada from './LembreteEntrada'
import 'bootstrap/dist/css/bootstrap.min.css'
import LembreteLista from './LembreteLista'

export default class App extends Component {
  state = {
    listaLembretes: []
  }

  adicionarLembrete = lembrete => {
    const listaLembretesAtualizada = [...this.state.listaLembretes]
    listaLembretesAtualizada.push(lembrete)
    this.setState({ listaLembretes: listaLembretesAtualizada })
  }

  render() {
    return (
      <div>
        <div className="container border border-warning mt-2 py-5">
          <div className="d-flex justify-content-center">
            <h1>Lembretes</h1>
          </div>
          <div className="col-12 border border-success mt-2 p-4">
            <LembreteEntrada adicionarLembrete={this.adicionarLembrete} />
          </div>
          <div className="col-12 border border-info mt-2 p-4">
            <LembreteLista lista={this.state.listaLembretes} />
          </div>
        </div>
      </div>
    )
  }
}
