import React from 'react'

import ResultDisplay from '../ResultDisplay/ResultDisplay';

export default function ResultsSection() {
  return (
    <div class="card card--accent result-display-container">

        <div className="result-display-container__calc-result-container">
          <ResultDisplay 
            label="Tip Amount"
            sublabel="/ person"
            amount={4.27}
          />
          <ResultDisplay
            label="Total"
            sublabel="/ person"
            amount={32.79}
          />
        </div>

        <button className="btn btn--light reset-btn">RESET</button>
      </div>
  )
}
