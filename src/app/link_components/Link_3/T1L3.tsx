import Image from 'next/image';
import React from 'react';

export const T1L3 = () => {
  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
      <h1 className='text-[28px] font-bold text-center md:text-left'>
        Your <span className='text-[28px] text-[#0047AB]'>Result</span>
      </h1>
      <div className='flex flex-col md:flex-row w-full h-auto md:h-[190px] items-center gap-4 md:gap-0'>
        <div className='w-[247px] h-auto'>
          <Image src='/Result.png' alt='pic' width={247} height={189} />
        </div>
        <div className='flex flex-col w-full md:w-[758px] h-full items-center md:items-start justify-between px-4 md:px-9'>
          <div className='flex flex-col md:flex-row w-full h-auto items-center md:items-center gap-2 md:gap-5'>
            <h1 className='text-black font-semibold text-2xl text-center md:text-left'>Architect</h1>
            <div className='hidden md:flex h-[30px] w-[1px] bg-[#CACACA]'></div>
            <h1 className='text-xl text-[#9361A6] font-bold text-center md:text-left'>INTJ Personality</h1>
          </div>
          <div className='flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-5 w-full'>
            <div className='w-[107px] h-[30px] flex rounded-4xl bg-[#E7DFEA] items-center justify-center text-[12px] text-[#9361A6] font-light'>
              <h1>STRATEGIC</h1>
            </div>
            <div className='w-[107px] h-[30px] flex rounded-4xl bg-[#E7DFEA] items-center justify-center text-[12px] text-[#9361A6] font-light'>
              <h1>STRATEGIC</h1>
            </div>
            <div className='w-[107px] h-[30px] flex rounded-4xl bg-[#E7DFEA] items-center justify-center text-[12px] text-[#9361A6] font-light'>
              <h1>STRATEGIC</h1>
            </div>
          </div>
          <div className='text-center md:text-left px-2 md:px-0'>
            <p className='text-[#5B6871]'>
              Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the
              significance of making informed decisions as you navigate your academic journey and future career. We are
              committed to empowering individuals with the tools and insights needed to confidently navigate the world of
              careers and education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};