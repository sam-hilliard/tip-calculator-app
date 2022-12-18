import React from 'react'

import { useState } from 'react';

export default function Input(props) {

    const [inputVal, setInputVal] = useState('');

    const handleChange = (e) => {
        setInputVal(e.target.value);
    };

    return (
        <div className="input-container">
            <label className="lbl input__lbl">{props.label}</label>
            <input className="input" 
                onChange={handleChange} 
                value={inputVal}
            />
            <img className="input__icon" src={props.icon} alt={props.iconAlt} />
        </div>
    )
}
