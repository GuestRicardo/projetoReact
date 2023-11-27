
import { Component } from 'react';
import './style.css';

export class Home extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState(
      (estadoAnterior, propsAnterior) => {
        console.log('Estado anterior',estadoAnterior.counter)
        return {counter: estadoAnterior.counter + 1}
      },
      () => {
        console.log('Estado atual',this.state.counter );
      }
    );

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