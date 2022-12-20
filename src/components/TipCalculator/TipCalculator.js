import React from 'react';

import Input from '../Input/Input';
import TipSelection from '../TipSelection/TipSelection';
import ResultDisplay from '../ResultDisplay/ResultDisplay';

// icons
import dollarIcon from '../../assets/images/icon-dollar.svg';
import personIcon from '../../assets/images/icon-person.svg';


export default function TipCalculator() {
  return (
    <div class="card split tip-calculator">
      <div class="tip-form-container">
        <Input label="Bill" icon={dollarIcon} />
        <TipSelection />
        <Input label="Number of People" icon={personIcon} />
      </div>
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
    </div>
  );
}
