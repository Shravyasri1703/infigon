import React from 'react'
import Introduction from '../Heplers/Introduction'
import Para1 from '../Heplers/Para1'

const T4L1 = () => {
  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
    <h1 className='text-[28px] font-bold'>Understanding <span className='text-[28px] text-[#398BFF]'>Emotional Intelligence</span></h1>
    <Introduction />
    <Para1 />
   </div>
  )
}

export default T4L1