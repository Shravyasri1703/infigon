import ResultCard1 from '@/app/Heplers/ResultCard1'
import React from 'react'

const T4L3 = () => {
  const resultData = [
    { number: 1, title: "Achivements and Results", score: "25/30", scoreColor: "bg-[#1999A1]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", strategy: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#1999A1]", color:"bg-[#1999A1]" },
    { number: 2, title: "Helping Others", score: "22/30", scoreColor: "bg-[#FF9706]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", strategy: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#A15A19]",color:"bg-[#A15A19]" },
    { number: 3, title: "Financial Rewards", score: "28/30", scoreColor: "bg-[#28A745]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", strategy: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#55DCDC]",color: "bg-[#55DCDC]"},
    { number: 4, title: "Creativity and Innovation", score: "24/30", scoreColor: "bg-[#DC3545]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", strategy: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles. They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#F6C61A]" ,color:"bg-[#F6C61A]"},
    { number: 5, title: "Security and Stability", score: "26/30", scoreColor: "bg-[#6610F2]", description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.", strategy: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles. They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.", borderColor: "border-[#9140F8]", color:"bg-[#9140F8]" },
]
  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
    <h1 className='text-[28px] font-bold'>Your <span className='text-[28px] text-[#398BFF]'>Result</span></h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {resultData.map((result, index) => (
          <ResultCard1 key={index} {...result} />
        ))}
      </div>
   </div>
  )
}

export default T4L3