import Introduction from '@/app/Heplers/Introduction'
import LinkCard from '@/app/Heplers/LinkCard'
import Para1 from '@/app/Heplers/Para1'
import Image from 'next/image';
import React from 'react'

const linkData = [
  { title: "Self Awareness", description: "Understanding oneself is key to growth and decision-making." },
  { title: "Career Growth", description: "Knowing your personality helps in career advancement." },
  { title: "Teamwork", description: "Understanding others fosters better collaboration in teams." },
  { title: "Leadership", description: "Great leaders understand their own and their team’s strengths." },
  { title: "Emotional Intelligence", description: "Being aware of emotions leads to better relationships." },
  { title: "Decision Making", description: "Personality insights improve decision-making skills." },
  { title: "Problem Solving", description: "Different perspectives help in solving problems effectively." },
  { title: "Productivity", description: "Knowing strengths leads to efficient work habits." },
  { title: "Personal Development", description: "Growth starts with self-awareness and personality insights." }
];

const Tl1 = () => {
  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
      <h1 className='text-[28px] font-bold'>
        Understanding <span className='text-[28px] text-[#0047AB]'>Personality Explorer</span>
      </h1>
      <Introduction />
      <Para1 />
      <h1 className='text-lg font-semibold text-[#0047AB] mt-7'>THE FOUR DICHOTOMIES</h1>
      <Image src='/Dichotomies.png' width={1021} height={408} alt='dico' className='mb-7'/>
      <h1 className='text-lg text-[#0047AB] font-semibold'>
        Purpose, Application, and Benefits of MBTI in Career Development
      </h1>

      {/* 3x3 Grid Layout for Link Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {linkData.map((item, index) => (
          <LinkCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Tl1;
