import React from 'react'
import './Main.css'

import { zodiac } from '../data'

import Zodiac from '../Zodiac/Zodiac'

import background from '../background.jpg'

export default function Main() {
  const styles = { backgroundImage: `url(${background})` }
  return (
    <main style={styles}>
      {zodiac.map((zodiac) => (
        <Zodiac key={zodiac.key} name={zodiac.name} dates={zodiac.dates} />
      ))}
    </main>
  )
}
