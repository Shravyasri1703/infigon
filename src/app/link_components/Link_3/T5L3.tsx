import Image from 'next/image'
import React from 'react'

const T5L3 = () => {
  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
    <h1 className='text-[28px] font-bold'>Your <span className='text-[28px] text-[#DE5AFF]'>Result</span></h1>
     <div className='w-full h-[68px] flex flex-row items-center justify-start gap-4'>
      <Image src='/ear.png' alt='ear' width={36} height={67} />
      <h1 className='text-[#FF504F] text-2xl font-bold'>Kinesthetic</h1>
     </div>
     <p className='text-[16px] text-[#5B6871]'>Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.</p>
   </div>
  )
}

export default T5L3