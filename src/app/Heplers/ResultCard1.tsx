import React from 'react';

interface ResultCardProps {
  number: number;
  title: string;
  score: string;
  description: string;
  strategy: string;
  borderColor: string;
  color: string;
}

const ResultCard1: React.FC<ResultCardProps> = ({ 
  number, 
  title, 
  score, 
  description, 
  strategy, 
  borderColor,
  color 
}) => {
  return (
    <div className='flex flex-col w-full max-w-[500px] h-auto gap-2 p-3 md:p-4'>
      {/* Top Section */}
      <div className='w-full flex flex-row items-center justify-between'>
        <div className={`w-[35px] h-[35px] rounded-full border flex items-center justify-center font-semibold text-[14px] ${borderColor} text-black`}>
          {number}
        </div>
        <h1 className={`text-[16px] font-bold text-center flex-1 px-2 text-${color}`}>
          {title}
        </h1>
        <div className={`flex flex-row h-10 ${color} items-center rounded-4xl justify-evenly w-[20%]`}>
          <h1 className='text-sm font-semibold text-white ml-1'>{score}</h1>
          <div className='w-[30px] h-[30px] bg-red-500 border border-white rounded-full'></div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`w-full border rounded-xl p-3 md:p-4 ${borderColor}`}>
        <p className='text-[15px] text-[#696969]'>{description}</p>
        <h1 className='text-[15px] font-semibold mt-2'>Strategy</h1>
        <p className='text-[15px] text-[#696969] px-2 md:px-5 mt-4'>{strategy}</p>
      </div>
    </div>
  );
};

export default ResultCard1;
