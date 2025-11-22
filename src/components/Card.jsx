import { useState } from 'react'

const Card = () => {
  return (
    <div className='max-w-xs bg-white rounded-xl p-5 flex flex-col justify-content items-center shadow-lg'>
      <div>
        <img src='./assets/image-qr-code.png' className='rounded-xl' />
      </div>

      <div className='px-2 py-5'>
        <h1 className='text-2xl font-display text-slate-900 font-bold text-center'>Improve your front-end skills by building projects</h1>
      </div>

      <div className='px-5 mb-5'>
        <p className='text-center text-[15px] font-display text-slate-500'>Scan the QR code to visit Frontend Mentor and take yout coding skills to the next level</p>
      </div>
    </div>
  )
}

export default Card

