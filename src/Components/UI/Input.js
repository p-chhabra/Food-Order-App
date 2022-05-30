import React from 'react'
import './Input.css'

const Input = (props) => {
  return (
    <div className='input'>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input id={props.input.id}  {...props.input}/>
    </div>
  )
}

export default Input