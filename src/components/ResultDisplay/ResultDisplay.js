import React from 'react'

export default function resultDisplay(props) {
  return (
    <div className="result-display split">
        <div className="resutls-display__lbl-container">
            <p className="result-display__lbl">{props.label}</p>
            <p className="result-display__sublbl">{props.sublabel}</p>
        </div>

        <div className="result-display__ammount">{`$${props.amount}`}</div>
    </div>
  )
}
