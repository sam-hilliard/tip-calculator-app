import React from 'react'

import Button from '../Button/Button';

export default function TipSelection() {

    const tipVals = [5, 10, 15, 25, 50];

    return (
        <div className="tip-selection-container">
            <label className="tip-selection__lbl lbl">Select Tip %</label>

            <div className="tip-selection__btn-container">
                {tipVals.map(val => {
                    return (
                        <Button 
                            val={val / 100} 
                            title={`${val}%`} 
                        />
                    );
                })}
            </div>


        </div>
    );
}
