import Image from 'next/image'
import React from 'react'

interface PersonalityProps {
  name: string;
  type: string;
  description: string;
  imageSrc: string;
  bgColor: string;
}

const Personality: React.FC<PersonalityProps> = ({ name, type, description, imageSrc, bgColor }) => {
  return (
    <div className='flex flex-col w-[243px] h-[234px]'>
      <div className={`flex w-full h-[42%] ${bgColor} rounded-lg items-center justify-center`}>
        <Image src={imageSrc} width={67} height={70} alt={name} />
      </div>
      <div className='flex flex-col h-[48%] w-full'>
        <div className='flex flex-row items-center justify-between mt-2'>
          <h1 className='text-[14px] font-semibold text-black'>{name}</h1>
          <button className={`w-11 h-7 rounded-[15px] font-bold text-[#3D6272] text-[12px] ${bgColor}`}>
            {type}
          </button>
        </div>
        <div className='flex w-[95%] py-2'>
          <p className='text-sm text-[#5B6871]'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Personality;
