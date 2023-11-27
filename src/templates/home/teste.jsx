
import { Component } from 'react';
import './style.css';

export class Home extends Component {
  state= {
    counter: 0
  } 

  handleClick = ()=>{
    this.setState({counter: this.state.counter + 1});
    console.log(this.state.counter);
    /**
     * Oq esta sendo manipulado acima, 
     * nao é o DOM do navegador,
     * na verdade é o virtual DOM
     * ou seja é uma copia do DOM real
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