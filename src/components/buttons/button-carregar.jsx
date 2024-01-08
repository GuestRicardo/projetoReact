/* eslint-disable react/react-in-jsx-scope */
import P from 'prop-types'
import { Component } from 'react';
import './style.css';

export class ButtonCarregar extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { text, onClick, disabled = false } = this.props;

    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div className='buttonCenter'>
        <button className='buttonC' onClick={onClick} disabled={disabled}>{text} </button>
      </div>
    )
  }
}
ButtonCarregar.defaultProps = {
  disabled: false
};

ButtonCarregar.propTypes = {
  text: P.string.isRequired,
  onclick: P.func.isRequired,
  disabled: P.boll,
}
