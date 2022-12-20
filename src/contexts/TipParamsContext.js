import React from 'react'
import { createContext, useState, useContext } from 'react';

const TipParamsContext = createContext();

export function TipParamsContextProvider(props) {

    const [tipParams, setTipParams] = useState({
        bill: 0.00,
        tip: 0.00,
        numPeople: 0,
    });


    return ( 
        <TipParamsContext.Provider value={[tipParams, setTipParams]}>{props.children}</TipParamsContext.Provider>
    );
}

export const useTipParamsContext = () => useContext(TipParamsContext);