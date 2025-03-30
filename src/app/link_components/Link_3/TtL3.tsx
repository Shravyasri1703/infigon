import ResultCard from '@/app/Heplers/ResultCard';
import React from 'react';

const resultData = [
  { number: 1, title: "Achivements and Results", score: "25/30", scoreColor: "bg-[#1999A1]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#1999A1]", color:"bg-[#1999A1]" },
  { number: 2, title: "Helping Others", score: "22/30", scoreColor: "bg-[#FF9706]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#A15A19]",color:"bg-[#A15A19]" },
  { number: 3, title: "Financial Rewards", score: "28/30", scoreColor: "bg-[#28A745]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#55DCDC]",color: "bg-[#55DCDC]"},
  { number: 4, title: "Creativity and Innovation", score: "24/30", scoreColor: "bg-[#DC3545]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#F6C61A]" ,color:"bg-[#F6C61A]"},
  { number: 5, title: "Security and Stability", score: "26/30", scoreColor: "bg-[#6610F2]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#9140F8]", color:"bg-[#9140F8]" },
  { number: 6, title: "Leadership and Influence", score: "27/30", scoreColor: "bg-[#20C997]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#F6C61A]",color:"bg-[#00A3FF]" },
  { number: 7, title: "Continous Learning", score: "21/30", scoreColor: "bg-[#E83E8C]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#194CA1]",color:"bg-[#194CA1]" },
  { number: 8, title: "Independence", score: "23/30", scoreColor: "bg-[#FD7E14]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#F6C61A]",color:"bg-[#EE82FF]" },
  { number: 9, title: "Secuirty and Stability", score: "29/30", scoreColor: "bg-[#17A2B8]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#FA9B56]", color:"bg-[#B97979]" },
  { number: 10, title: "Flexibility and worklife balance ", score: "30/30", scoreColor: "bg-[#6F42C1]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#FA9B56]", color:"bg-[#FA9B56]" },
];

const TtL3: React.FC = () => {
  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
      <h1 className='text-[28px] font-bold'>
        Your <span className='text-[28px] text-[#FF9706]'>Result</span>
      </h1>

      {/* Grid layout for 2 columns x 5 rows */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {resultData.map((result, index) => (
          <ResultCard key={index} {...result} />
        ))}
      </div>
    </div>
  );
};

export default TtL3;
