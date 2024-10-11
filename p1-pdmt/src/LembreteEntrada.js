import React, { Component } from 'react'

export default class LembreteEntrada extends Component {
  state = {
    lembrete: ''
  }

  onTermoAlterado = event => {
    console.log(event.target.value)
    this.setState({ lembrete: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault()
    if(this.state.lembrete !== '') {
      this.props.adicionarLembrete(this.state.lembrete)
      this.setState({ lembrete: '' })
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <input
              type="text"
              className="col-12 text-center form-control mt-2"
              placeholder="Digite seu lembrete"
              onChange={this.onTermoAlterado}
              value={this.state.lembrete}
            />
            <button className="btn btn-outline-primary w-100 mt-2">
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    )
  }
}
