import React, { useState } from 'react';
import './Cantidad.css';
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

function Cantidad() {
  const [cantidad, setCantidad] = useState(1);

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    setCantidad(cantidad > 0 ? cantidad - 1 : 0);
  };

  return (
    <div className='cantidad-container'>
      <button className='cantidad-button' onClick={decrementarCantidad}>
        <LuMinus />
      </button>
      <input className='cantidad-input' type='number' value={cantidad} readOnly />
      <button className='cantidad-button' onClick={incrementarCantidad}>
        <GoPlus />
      </button>
    </div>
  );
}

export default Cantidad;