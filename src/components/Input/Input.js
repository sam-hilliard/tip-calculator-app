import React from 'react'
import { useTipParamsContext } from '../../contexts/TipParamsContext';

export default function Input(props) {

    const [tipParams, setTipParams] = useTipParamsContext();

    const handleChange = (e) => { 
        const name = e.target.name;
        const value = Number(e.target.value);


        setTipParams(prevVal => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
    };

    return (
        <div className="input-container">
            <div className="input__lbl-container">
                <label className="lbl input__lbl">{props.label}</label>
                {props.name === 'numPeople' && tipParams.numPeople === 0 && <label className="lbl input__lbl lbl--error">Can't be zero</label>}
            </div>
            <input 
                className="input"
                type="number"
                min={0}
                name={props.name}
                onChange={handleChange} 
                value={tipParams[props.name]}
            />
            <img className="input__icon" src={props.icon} alt={props.iconAlt} />
        </div>
    );
}