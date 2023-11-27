
import { Component } from 'react';
import './style.css';

export class Home extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 },
      () => {
        console.log(this.state.counter);
      }
    );
    /**
     * Oq esta sendo manipulado acima, 
     * nao é o DOM do navegador,
     * na verdade é o virtual DOM é do proprio React
     * ou seja é uma copia do DOM real,
     * o setState ele compara os 2 DOMS e procura onde esta a diferença
     * é assim q o react funciona, ai por essa comparação ele pega todos os elementos
     * da pagina e comparar e joga o dom mudado e é setado no DOM real, isso é um codigo assicrono
     * codigo assicrono é quando ele esta na espera, equnto o outros codigos estao em simultaneo, ai ele começa com
     * um estado e é preciso usar o setState q vai sicronizar com um Callback
     * n o exemplo acima esta sendo mostrado como funciona, this.setState esta sendo assicrono com a função q esta sendo carregado o console.log
     * entao, handleClick esta passando para o react, execultar a função q esta sendo contadora e depois q ela terminar
     * entao entrará o console.log
     * 
     */
  }

  render() {
    return (
      <div className='container'>
        <h1>Testes</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClick}>Incremente</button>
      </div>
    );
  }
}