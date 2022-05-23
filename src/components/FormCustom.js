import React from 'react'
import InputCustom from './InputCustom';

const FormCustom = ({usersList, ordersList}) => {
  return (
    <form id='form-orders'>
      <InputCustom optionsList={usersList} typeInput={"users"}/>
      <InputCustom optionsList={ordersList} typeInput={"orders"}/>
      <button> connect </button>
    </form>
  )
}

export default FormCustom