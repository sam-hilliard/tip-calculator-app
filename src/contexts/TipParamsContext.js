import React from 'react'
import { createContext, useState, useContext } from 'react';

const TipParamsContext = createContext();

export const defaultVals = {
    bill: 0,
    tipPercent: 0,
    numPeople: 1,
}

export function TipParamsContextProvider(props) {

    const [tipParams, setTipParams] = useState(defaultVals);


    return ( 
        <TipParamsContext.Provider value={[tipParams, setTipParams]}>{props.children}</TipParamsContext.Provider>
    );
}

export const useTipParamsContext = () => useContext(TipParamsContext);