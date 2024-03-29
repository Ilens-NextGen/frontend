import React from 'react'
import { Link } from 'react-router-dom'
// import Home from './Home'

const Landing = () => {
  return (
    <div className="bg-[#1219D2] text-white w-full p-5 h-full">
    <header className="flex justify-between items-center">
      <svg width={29} height={32} viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 7.66417C0 3.43136 3.43136 0 7.66417 0H21.6114C24.9966 0 27.8693 2.1948 28.8839 5.23905H18.3976C16.2812 5.23905 14.5656 6.95474 14.5656 9.07114V11.726H12.6991C12.5244 11.726 12.355 11.7857 12.2188 11.8952L0 21.7215V7.66417ZM18.3976 26.7624H28.8834C27.8683 29.8059 24.9961 32 21.6114 32H7.66417C3.43137 32 0 28.5686 0 24.3358V23.1928C5.14982 20.216 10.9325 17.3276 14.5656 16.4367V22.9304C14.5656 25.0468 16.2812 26.7624 18.3976 26.7624ZM17.3895 16.861C16.7898 16.861 16.3037 16.3749 16.3037 15.7752V12.099C16.3037 11.4993 16.7898 11.0132 17.3895 11.0132H19.3677V16.861H17.3895Z" fill="#FCFCFF" />
      </svg>
    </header>
    <main className='flex flex-col justify-center items-center h-[70%]'>
        <h1 className='font-bold text-2xl'>Welcome to iLENS</h1>
        <p className='text-lg mb-10'>Empowering vision beyond sight</p>
        <Link to="/home"
        className='w-[80%] sm:w-60 mx-auto'
        >
        <button 
        className='border w-full p-2 bg-white text-[#1219D2] rounded-md active:bg-[#1219D2] active:text-white'>Get Started</button>
        </Link>
    </main>

  </div>
  )
}

export default Landing