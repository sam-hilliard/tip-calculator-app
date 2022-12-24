import React from 'react'
import { useState } from 'react';
import { useTipParamsContext } from '../../contexts/TipParamsContext';

export default function Input(props) {

    const [tipParams, setTipParams] = useTipParamsContext();
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => { 
        const name = e.target.name;
        const value = Number(e.target.value);

        setTipParams(prevVal => {
            return {
                ...prevVal,
                [name]: value
            };
        });

    };

    return (
        <div className="input-container">
            <div className="input__lbl-container">
                <label className="lbl input__lbl">{props.label}</label>
                <label className="lbl lbl--error input__lbl">{errorMsg}</label>
            </div>
            <input 
                className="input"
                type="number"
                name={props.name}
                onChange={handleChange} 
                value={tipParams[props.name]}
            />
            <img className="input__icon" src={props.icon} alt={props.iconAlt} />
        </div>
    )
}
