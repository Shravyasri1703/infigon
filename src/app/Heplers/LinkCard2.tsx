import React from 'react'

interface CardProps{

    title: string
    description: string
}

const LinkCard2: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className='flex flex-col bg-[#CACACA33] w-full lg:w-[502px] h-[135px] p-3 rounded-2xl justify-center items-start'>
      <div className='flex w-full h-full flex-col p-1'>
        <h1 className='text-[16px] font-semibold text-black'>{title}</h1>
        <p className='text-[#5B6871] text-sm'>{description}</p>
      </div>  
    </div>
  )
}

export default LinkCard2;
