import React from 'react'

export default function Hero() {
  return (
    <div className='h-screen w-full  rounded-md overflow-hidden bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600'>
      <div className=' flex flex-col h-full w-full gap-5 items-center justify-center rounded-lg text-blue-gray-200'>
        <h1 className=' text-7xl font-bold text-center font-extrabold'>A VIRTUAL SIMULATION LAB FOR EVERYONE</h1>
        <p className='font-bold'>Access realistic lab simulations, interactive experiments, and hands-on learning tools, right from your browser</p>
      </div>

    </div>
  )
}
