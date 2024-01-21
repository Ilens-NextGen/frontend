import React from 'react'
import { Link } from 'react-router-dom'

const Lost = () => {
  return (
    <div className='h-screen bg-[#060916] p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-green-400'>Looking for something?</h1>
        <p className='text-2xl text-[#98b5b2]'>Well! It's not here!!!</p>
        <p className='text-green-400'>Go back 
            <Link to="/home" className='font-bold text-blue-500'> home</Link>
        </p>
        
    </div>
  )
}

export default Lost