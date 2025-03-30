import React from 'react'

const Header_1 = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-auto md:h-[126px] items-center shadow-sm justify-evenly p-4 md:p-0'>
      <div className='flex flex-col items-center md:items-start w-full md:w-[60%] h-full justify-center text-center md:text-left'>
        <h1 className='text-[20px] md:text-[28px] font-semibold'>Your Career Analysis Report</h1>
        <p className='text-[14px] md:text-[16px] text-[#5B6871]'>
          Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit.
        </p>
      </div>
      <div className='w-full max-w-[484px] h-auto md:h-[71px] border-2 border-gray-300 rounded-md flex flex-col md:flex-row items-center justify-center p-3 md:p-0'>
        <div className='w-full md:w-[454px] h-auto md:h-[43px] flex flex-col md:flex-row items-center md:items-start gap-2'>
          <div className='flex flex-col w-full md:w-[366px] h-full gap-1 text-center md:text-left'>
            <p className='text-sm md:text-[14px] text-[#252A31] font-semibold'>Want To Speak To An Expert Career Counsellor?</p>
            <p className='text-[12px] md:text-[12px] text-[#5B6871] font-extralight'>
              Explore a list of 1000+ Expert Career Counsellors near you!
            </p>
          </div>
          <div className='mt-2 md:mt-0'>
            <button className='w-full md:w-[74px] h-9 bg-[#EBEBEB] font-semibold text-sm'>
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header_1
