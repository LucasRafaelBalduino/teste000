import React, { Component } from 'react';
import { telefone, moeda, cnpj } from './mask'
import './styles.css'
export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      valor2: '',
      valor1: '',
      resultado: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, mask) {
    const { name, value } = event.target;
    const maskObj = {
      'telefone': telefone,
      'moeda': moeda,
      'cnpj': cnpj
    };

    const funcaoMascara = maskObj[mask];

    const novoValor = funcaoMascara(value);

    this.setState({
      ...this.state,
      [name]: novoValor,

    });
  }

  soma(valor1, valor2) {
    const valor1Inteiro = parseFloat(valor1);
    const valor2Inteiro = parseFloat(valor2);
    const resultado =  (valor1Inteiro + valor2Inteiro);
    const resultadoFinal = isNaN(resultado) ? null : resultado;
    return resultadoFinal;
  }

  render() {
    const { valor1, valor2 } = this.state;
    const resultado = this.soma(valor1, valor2);
    return (
      <div>
        <label>valor 1</label>
        <input
          maxLength="14"
          value={valor1}
          name='valor1'
          onChange={(e) => this.handleChange(e, 'moeda')}
        />

        <label>valor 2</label>
        <input
          value={valor2}
          name='valor2'
          onChange={(e) => this.handleChange(e, 'moeda')}
        />
        
        <label>Resultado</label>
        <input 
          className={resultado !== valor1 + valor2  ? "type-text"  :  "type-text-greeen"}
          placeholder={resultado} 
          onChange={(e) => this.handleChange(e, 'moeda')}
         />
      </div>
    )
  }
}