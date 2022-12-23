import React from 'react';
import { useState } from 'react';

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
            </div>


        </div>
    );
}
