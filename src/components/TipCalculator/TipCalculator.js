import React from 'react';

import ResultsSection from '../ResultsSection/ResultsSection';
import TipForm from '../TipForm/TipForm';


export default function TipCalculator() {
  return (
    <div class="card split tip-calculator">
      <TipForm />
      <ResultsSection />
    </div>
  );
}
