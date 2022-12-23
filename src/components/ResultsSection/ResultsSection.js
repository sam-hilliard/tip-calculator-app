import React from 'react';
import { useState, useEffect } from 'react';

import ResultDisplay from '../ResultDisplay/ResultDisplay';
import { useTipParamsContext } from '../../contexts/TipParamsContext';

export default function ResultsSection() {

  const [tipParams, setTipParams] = useTipParamsContext();

  const [tip, setTip] = useState(0.0);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    
    const tip = tipParams.bill * tipParams.tipPercent;
    const total = tipParams.bill + tip;

    setTip(tip);
    setTotal(total);

    
  }, [tipParams]);


  function handleResetClick() {
    setTipParams({
        bill: 0,
        tipPercent: 0,
        numPeople: 1,
    });
  }
  

  return (
    <div class="card card--accent result-display-container">

        <div className="result-display-container__calc-result-container">
          <ResultDisplay 
            label="Tip Amount"
            sublabel="/ person"
            amount={tip}
          />
          <ResultDisplay
            label="Total"
            sublabel="/ person"
            amount={total}
          />
        </div>

        <button onClick={handleResetClick} className="btn btn--light reset-btn">RESET</button>
      </div>
  )
}
