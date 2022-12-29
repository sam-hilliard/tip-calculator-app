import React from 'react';
import { useState } from 'react';
import { useTipParamsContext } from '../../contexts/TipParamsContext';

export default function TipSelection() {

    const [btns, setBtns] = useState([
        {
            val: 5,
            active: false
        },
        {
            val: 10,
            active: false
        },
        {
            val: 15,
            active: false
        },
        {
            val: 25,
            active: false
        },
        {
            val: 50,
            active: false
        }
    ]);

    const [customTip, setCustomTip] = useState('');

    const [, setTipParams] = useTipParamsContext();

    function handleClick(e) {
        const clickedVal = Number(e.target.value);
        let newBtns = btns.map(btn => {
            return (
                {
                    ...btn,
                    active: btn.val === clickedVal
                }
            );
        });

        setBtns(newBtns);
        setCustomTip('');
        setTipParams(prevVal => {
            return {...prevVal, tipPercent: clickedVal / 100};
        });
    }

    // reset all buttons to inactive state when custom input is focused
    function handleFocus() {
        let newBtns = btns.map(btn => {
            return (
                {
                    ...btn,
                    active: false
                }
            );
        });
        setBtns(newBtns);
    }

    function handleChange(e) {
        setCustomTip(e.target.value);
        const value = Number(e.target.value / 100);

        setTipParams(prevVal => {
            return {...prevVal, tipPercent: value};
        });
    }

    return (
        <div className="tip-selection-container">
            <label className="tip-selection__lbl lbl">Select Tip %</label>

            <div className="tip-selection__btn-container">
                {btns.map((btn, index) => {
                    return (
                        <button
                            key={index}
                            className={`btn ${btn.active ? 'btn--light' : ''}`} 
                            value={btn.val}
                            onClick={handleClick}
                        >
                            {`${btn.val}%`}
                        </button>
                    );
                })}
                <input 
                    className="input custom-input"
                    type="number"
                    min={0.01}
                    placeholder="Custom"
                    value={customTip}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
            </div>
        </div>
    );
}
