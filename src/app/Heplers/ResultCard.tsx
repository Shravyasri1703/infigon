import React from 'react';

interface ResultCardProps {
  number: number;
  title: string;
  score: string;
  scoreColor: string;
  description: string;
  pros: string;
  cons: string;
  borderColor: string;
  color: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
  number, 
  title, 
  score, 
  scoreColor, 
  description, 
  pros, 
  cons, 
  borderColor,
  color 
}) => {
  return (
    <div className='flex flex-col w-full max-w-[500px] h-auto gap-2 p-3 md:p-0'>
      {/* Top Section */}
      <div className='w-full flex flex-row items-center justify-between'>
        <div className={`w-[35px] h-[35px] rounded-full border flex items-center justify-center font-semibold text-sm ${borderColor} text-black`}>
          {number}
        </div>
        <h1 className={`text-sm md:text-[16px] font-bold text-center text-[${color}] flex-1 mx-2`}>{title}</h1>
        <div className={`flex flex-row h-8 md:h-10 ${color} items-center rounded-4xl justify-evenly min-w-[60px] lg:w-[105px]`}>
          <h1 className='text-xs md:text-sm font-semibold text-white'>{score}</h1>
          <div className='w-[24px] md:w-[30px] h-[24px] md:h-[30px] bg-red-500 border border-white rounded-full'></div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`w-full max-w-[500px] border rounded-xl p-3 md:p-4 ${borderColor}`}>
        <p className='text-sm md:text-[15px] text-[#696969]'>{description}</p>
        <h1 className='text-sm md:text-[15px] font-semibold mt-2'>Pros</h1>
        <p className='text-sm md:text-[15px] text-[#696969] px-3 md:px-5'>{pros}</p>
        <h1 className='text-sm md:text-[15px] font-semibold mt-2'>Cons</h1>
        <p className='text-sm md:text-[15px] text-[#696969] px-3 md:px-5'>{cons}</p>
      </div>
    </div>
  );
};

export default ResultCard;
