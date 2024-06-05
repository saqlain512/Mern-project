import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='bg-slate-300 '>
        <div className='flex justify-between max-w-6xl  mx-auto items-center'>
        <h1>Auth App</h1>
        <ul className='flex gap-4 py-5'>
        <li>
            <Link to='/'>Home</Link>
        </li>
      
        <li>
            <Link to='/signin'>Signin</Link>
        </li>
       
        <li>
            <Link to='/about'>About</Link>
        </li>
    </ul>

        </div>
      
    </div>
  
    
    </>
  )
}

export default Header
