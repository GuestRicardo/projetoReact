
import { Component } from 'react';
import './style.css';

export class Home extends Component {
  state= {
    counter: 0
  } 

  render() {
    return (
      <div className='container'>
        <h1>Testes</h1>
        <h2>{this.state.counter}</h2>
      </div>
  );
  }
}