import React from 'react'
import './InputText.scss'

const InputText = ({ label, type, name, value, onChange }) => {
  return (
    <div className='inputText_wrapper'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputText