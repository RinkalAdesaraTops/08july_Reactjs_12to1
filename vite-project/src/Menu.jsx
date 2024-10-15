import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/home">Home</Link>
            <ul>
                <li><a href="h1">Home1</a></li>
                <li><a href="h2">Home2</a></li>
            </ul>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
            {/* <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}
      </ul>
    </div>
  )
}

export default Menu
