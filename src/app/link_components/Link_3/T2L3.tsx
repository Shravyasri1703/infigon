import Image from 'next/image'
import React from 'react'

const T2L3 = () => {
  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
      <h1 className='text-[28px] font-bold'>Your <span className='text-[28px] text-[#309759]'>Result</span></h1>
      <div className='w-full h-[68px] flex flex-row items-center justify-start gap-4'>
        <Image src='/screw.png' alt='ear' width={30} height={48} />
        <h1 className='text-[#FF504F] text-2xl font-bold'>Realistic (R)</h1>
      </div>
      <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-wrap gap-3 md:flex-nowrap md:gap-5'>
          <div className='flex text-[#FF504F] border-[1px] border-[#FF504F] rounded-4xl px-4 py-2 text-[14px] items-center justify-center font-extralight min-w-[200px]'>Practical and Hands-On</div>
          <div className='flex text-[#FF504F] border-[1px] border-[#FF504F] rounded-4xl px-4 py-2 text-[14px] items-center justify-center font-extralight min-w-[200px] md:w-[346px]'>Problem-solvers who prefer tangible results</div>
          <div className='flex text-[#FF504F] border-[1px] border-[#FF504F] rounded-4xl px-4 py-2 text-[14px] items-center justify-center font-extralight min-w-[200px] md:w-[316px]'>Enjoying work with tools and machinery</div>
        </div>
        <div className='flex flex-wrap gap-3 md:gap-5'>
          <div className='flex text-[#FF504F] border-[1px] border-[#FF504F] rounded-4xl px-4 py-2 text-[14px] items-center justify-center font-extralight min-w-[200px] md:w-[346px]'>Value efficiency and effectiveness in tasks</div>
        </div>
      </div>
      <p className='text-[16px] text-[#5B6871]'>
        Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.
      </p>
    </div>
  )
}

export default T2L3