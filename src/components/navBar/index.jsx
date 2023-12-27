import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to={'/add'}>Contact</Link></li>   
    
  </div>
  )
}
