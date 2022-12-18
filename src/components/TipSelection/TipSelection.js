import React from 'react'

import Button from '../Button/Button';

export default function TipSelection() {

    const tipVals = [5, 10, 15, 20, 25, 50];

    return (
        <div className="tip-selection-container">
            <label className="Select Tip %">Tip</label>

            {tipVals.map(val => {
                return (
                    <Button 
                        val={val / 100} 
                        title={`${val}%`} 
                    />
                );
            })}


        </div>
    );
}
