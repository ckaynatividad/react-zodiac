import React from 'react'
import './Zodiac.css'

export default function Zodiac({ name, dates }) {
  return (
    <div className="zodiac" style={{ name, dates }}>
      <img alt={name} src={`../assets/${name}.jpg`} />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
    </div>
  )
}
