import React from 'react'

interface LabelProps {
  number: number;
  text: string;
  borderColor: string;
}

const Label: React.FC<LabelProps> = ({ number, text, borderColor }) => {
  return (
    <div className={`flex flex-row w-full lg:w-[502px] h-16 border-2 rounded-4xl items-center p-3`} style={{ borderColor }}>
      <div className='flex  h-[42px] w-[42px] rounded-full items-center justify-center font-semibold text-white' style={{ backgroundColor: borderColor }} 
       >
        {number}
      </div>
      <div className='flex items-center justify-center w-[460px]'>
        <h1 className='font-semibold text-black'>{text}</h1>
      </div>
    </div>
  )
}

export default Label;
