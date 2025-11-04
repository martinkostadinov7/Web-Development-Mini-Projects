import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'

function App() {
  return(
    <>
        <button id='generateButton' onClick={}>Generate</button>
        <Card
        imageUrl="https://placehold.co/200x100"
        title="My First Card"
        description="This is a simple card component."
      />
    </>
  )
}

export default App
