import React,{ Component } from 'react';
import LembreteEntrada from './LembreteEntrada'
import 'bootstrap/dist/css/bootstrap.min.css'
import LembreteLista from './LembreteLista'

export default class App extends Component {
  
  state = {
    listaLembretes: [
      'Preparar aula de programação',
      'Fazer feira',
      'Preparar marmitas'
    ]
  }

  render() {
    return (
      <div>
        <div className="container border mt-2 py-5">
            <div className="col-12 border py-5">
              <LembreteLista lista={this.state.listaLembretes} />
            </div>
            <div className="col-12 border mt-2 p-4">
              <LembreteEntrada />
            </div>
          </div>
        </div>
    )
  }
}
