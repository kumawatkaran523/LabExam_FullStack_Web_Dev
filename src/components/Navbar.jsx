import React from 'react'
import Home from '../pages/Home'

function Navbar() {
  return (
    <>
    <ul className='flex justify-between'>
        <li><a href="/home">Home</a></li>
        <div className='flex'>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">SignUp</a></li>
        </div>
    </ul>
    </>
  )
}

export default Navbar