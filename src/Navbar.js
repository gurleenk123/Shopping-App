import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}
