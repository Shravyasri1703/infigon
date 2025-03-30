import Personality from '@/app/Heplers/Personality'
import React from 'react'

interface PersonalityData {
  name: string;
  type: string;
  description: string;
  imageSrc: string;
  bgColor: string;
}

const T1L2: React.FC = () => {
  const personalityData: PersonalityData[] = [
    { name: "Inspector", type: "ISTJ", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/old.png", bgColor: "bg-[#D9E9F0]" },
    { name: "Protector", type: "ISFJ", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/Protec.png", bgColor: "bg-[#D9E9F0]" },
    { name: "Artist", type: "INFJ", description: "Focuses on concrete, tangible information and present realities tangible information and present realities.", imageSrc: "/art.png", bgColor: "bg-[#D9E9F0]" },
    { name: "Consul", type: "INTJ", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/consul.png", bgColor: "bg-[#D9E9F0]" },
    { name: "Virtuoso", type: "ISTP", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/virt.png", bgColor: "bg-[#EFE2C9]" },
    { name: "Entrepreneur", type: "ISFP", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/entr.png", bgColor: "bg-[#EFE2C9]" },
    { name: "Entertainer", type: "INFP", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/ent.png", bgColor: "bg-[#EFE2C9]" },
    { name: "Executive", type: "INTP", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/exec.png", bgColor: "bg-[#EFE2C9]" },
    { name: "Advocate", type: "ESTP", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/adv.png", bgColor: "bg-[#D6ECE2]" },
    { name: "Mediator", type: "ESFP", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/med.png", bgColor: "bg-[#D6ECE2]" },
    { name: "Campaigner", type: "ENFP", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/camp.png", bgColor: "bg-[#D6ECE2]" },
    { name: "Protagonist", type: "ENTP", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/prot.png", bgColor: "bg-[#D6ECE2]" },
    { name: "Architect", type: "ESTJ", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/arch.png", bgColor: "bg-[#E7DFEA]" },
    { name: "Thinker", type: "ESFJ", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/thi.png", bgColor: "bg-[#E7DFEA]" },
    { name: "Debater", type: "ENFJ", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/deb.png", bgColor: "bg-[#E7DFEA]" },
    { name: "Commander", type: "ENTJ", description: "Focuses on concrete, tangible information and present realities tangible information and present realities", imageSrc: "/com.png", bgColor: "bg-[#E7DFEA]" },
  ];

  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
      <h1 className='font-bold text-[18px] text-[#0047AB]'>Personality Types</h1>

      {/* 4x4 Grid Layout for Personalities */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {personalityData.map((personality, index) => (
          <Personality key={index} {...personality} />
        ))}
      </div>
    </div>
  );
};

export default T1L2;
