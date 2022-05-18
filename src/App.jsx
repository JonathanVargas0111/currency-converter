import './App.css';
import React, { useState} from 'react';

export default function App() {

  /*
    variables
    results: the result of the currencies are assigned
    amount: the value that is entered is assigned
    changes: currency values against the euro

    -----------******-----------

    results: se asignan el resultado de las divisas 
    amount: se asigna el valor que se ingresa 
    changes: valores de las divisas contra el euro

    */
  const [results, setResults] = useState([0, 0, 0, 0, 0]);
  const [amount, setAmount] = useState(0);
  const changes = [
    {
      currency: "Euro",
      change: 1,
    }, {
      currency: "Peso argentino",
      change: 118.6,
    }, {
      currency: "Peso colombiano",
      change: 4543.5,
    }, {
      currency: "Peso mexicano",
      change: 23.2,
    }, {
      currency: "Dólar",
      change: 1.14
    }
  ]

  /*
    Make the currency exchange and update the status    
    -----------*********----------
    Realiza el cambio de las divisas y actualiza el estado
  */
  const modify = (e) => {
    const amountToCovert = e.target.value;
    setAmount(amountToCovert);
    setResults([
      amountToCovert * changes[0].change,
      amountToCovert * changes[1].change,
      amountToCovert * changes[2].change,
      amountToCovert * changes[3].change,
      amountToCovert * changes[4].change
    ])
  };

  /*
    view in jsx
    u0: insert amount
    u1, u2, u3, u4: mapping of converted data
  ------------***********-----------
    vista en jsx
    u0:  insertar cantidad
    u1, u2, u3, u4: asignacion de datos convertidos
  */
  return (
    <div>

      <h1>Convertidor de divisas</h1>

      <label htmlFor="u0">{changes[0].currency}</label>
      <input id="u0" type="number" value={amount} onChange={modify} />

      <label htmlFor="u1">{changes[1].currency}</label>
      <input id="u1" type="number" value={results[1]} readOnly></input>

      <label htmlFor="u2">{changes[2].currency}</label>
      <input id="u2" type="number" value={results[2]} readOnly></input>

      <label htmlFor="u3">{changes[3].currency}</label>
      <input id="u3" type="number" value={results[3]} readOnly></input>

      <label htmlFor="u4">{changes[4].currency}</label>
      <input id="u4" type="number" value={results[4]} readOnly></input>

    </div>
  )
}
