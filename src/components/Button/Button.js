import React from 'react'

export default function Button(props) {
  return (
    <button className="btn" value={props.value}>{props.title}</button>
  )
}
