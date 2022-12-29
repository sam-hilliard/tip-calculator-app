import React from 'react'

export default function CustomInput() {
  return (
    <>
        <input 
            className="input custom-input"
            type="number"
            min="0"
            placeholder="Custom"
        />
    </>
  )
}
