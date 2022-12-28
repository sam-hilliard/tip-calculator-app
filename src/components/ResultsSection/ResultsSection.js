import React from 'react';
import { useState, useEffect } from 'react';

import ResultDisplay from '../ResultDisplay/ResultDisplay';
import { useTipParamsContext, defaultVals } from '../../contexts/TipParamsContext';

export default function ResultsSection() {

  const [tipParams, setTipParams] = useTipParamsContext();
  const [tip, total] = useCalcTipTotal(tipParams);

  function handleResetClick() {
    setTipParams(defaultVals);
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

function useCalcTipTotal(tipParams) {
  const [tip, setTip] = useState(0.0);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    
    const tip = tipParams.bill * tipParams.tipPercent / tipParams.numPeople;
    const total = tipParams.bill / tipParams.numPeople + tip;

    setTip(tip.toFixed(2));
    setTotal(total.toFixed(2));

    
  }, [tipParams]);


  return [tip, total]
}