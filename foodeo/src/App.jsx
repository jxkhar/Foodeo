import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cardarea from './components/Cardarea'
import Footer from './components/Footer'

function App() {
  const [projects, setProjects] = useState({})

  useEffect(() => {
    fetch('http://127.0.0.1:8000/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <div><Navbar /></div>
      <div><Hero /></div>
      <div><Cardarea projects={projects} /></div>
      <div><Footer /></div>
    </div>
  )
}

export default App