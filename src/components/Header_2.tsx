import React from 'react'

const Header_2 = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-auto md:h-20 items-center shadow-sm justify-center gap-4 p-4 md:p-0 text-center md:text-left'>
      
      <h1 className='text-[#CACACA] text-[18px] md:text-[20px]'>
        Your <span className='font-bold text-[#0047AB]'>TOP 3</span> Career Options
      </h1>

      <div className='flex flex-col md:flex-row h-auto md:h-full w-auto items-center justify-center gap-3'>
        {[1, 2, 3].map((num) => (
          <div key={num} className='w-28 md:w-32 h-10 rounded-3xl border-2 border-gray-300 flex items-center p-1'>
            <div className='h-8 w-8 bg-[#CACACA] rounded-2xl flex items-center justify-center'>
              <h1 className='text-white font-semibold text-[13px]'>{num}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className='hidden md:block w-[1px] h-[40px] bg-[#CACACA]'></div>

      <h1 className='font-bold text-[16px] md:text-[18px] md:ml-3'>Choose them right here!</h1>

      <button className='font-semibold text-sm text-white w-full md:w-[164px] h-[45px] bg-[#0047AB] rounded-md mt-3 md:mt-0'>
        Your Career Options
      </button>
      
    </div>
  )
}

export default Header_2
