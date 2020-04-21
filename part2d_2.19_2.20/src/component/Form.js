import React from 'react'


const Form = ({ onSubmit, value1, value2, onChange1, onChange2 }) => {
  return (
    <form onSubmit={onSubmit}>
                <div>
                    name: <input value = {value1} onChange = {onChange1}/>
                </div>
                <div>
                    number: <input value = {value2} onChange = {onChange2} />
                </div>
                <div>
                    <button type = "submit">add</button>
                </div>
            </form>
  )
}

export default Form