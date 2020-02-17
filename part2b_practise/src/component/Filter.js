import React from 'react'
import Input from './Input'

const Filter = ({ value, onChange }) => {
  return (
    <>
      filter shown with <input value = {value} onChange = {onChange}/>
    </>
  )
}

export default Filter