import React from 'react'
import './Cantidad.css'
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

function Cantidad() {
  return (
    <div className='cantidad-container'>
      <button className='cantidad-button'>
        <LuMinus />
      </button>
      <input className='cantidad-input' type='text' value='1' />
      <button className='cantidad-button'>
        <GoPlus />
      </button>

    </div>
  )
}

export default Cantidad