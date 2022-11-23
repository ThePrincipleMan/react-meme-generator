import React from 'react'
import trollface from '../images/Troll Face.png'
import './styles.css'

const Navbar = () => {
  return (
    <nav>
        <img src={trollface} />
        <h1>MemeGenerator</h1>
        <div>React Course - Project 3</div>
    </nav>
  )
}

export default Navbar