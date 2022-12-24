import React from 'react'
import { useTipParamsContext } from '../../contexts/TipParamsContext';

export default function Input(props) {

    const [tipParams, setTipParams] = useTipParamsContext();

    const handleChange = (e) => {      
        setTipParams(prevVal => {
            return {
                ...prevVal,
                [e.target.name]: Number(e.target.value)
            };
        });

    };

    return (
        <div className="input-container">
            <label className="lbl input__lbl">{props.label}</label>
            <input 
                className="input"
                name={props.name}
                onChange={handleChange} 
                value={tipParams[props.name]}
            />
            <img className="input__icon" src={props.icon} alt={props.iconAlt} />
        </div>
    )
}
