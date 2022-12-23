import React from 'react'

import Input from '../Input/Input';
import TipSelection from '../TipSelection/TipSelection';

// icons
import dollarIcon from '../../assets/images/icon-dollar.svg';
import personIcon from '../../assets/images/icon-person.svg';

export default function TipForm() {
  return (
    <div class="tip-form-container">
        <Input
          name="bill" 
          label="Bill" 
          icon={dollarIcon} 
        />
        <TipSelection />
        <Input
          name="numPeople"
          label="Number of People" 
          icon={personIcon} 
        />
    </div>
  )
}
