import React from 'react'

export default function ResultsDisplay(props) {
  return (
    <div className="results-display split">
        <div className="resutls-display__lbl-container">
            <p className="results-display__lbl">{props.label}</p>
            <p className="results-display__sublbl">{props.sublabel}</p>
        </div>

        <div className="results-display__ammount">{`$${props.amount}`}</div>
    </div>
  )
}
