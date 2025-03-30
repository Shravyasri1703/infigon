import Introduction from '@/app/Heplers/Introduction'
import Para1 from '@/app/Heplers/Para1'
import React from 'react'

const T3L1 = () => {
  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
    <h1 className='text-[28px] font-bold'>Understanding <span className='text-[28px] text-[#FF9706]'>Career Motivators</span></h1>
    <Introduction />
    <Para1 />
   </div>
  )
}

export default T3L1