import React from 'react'
import Introduction from '../Heplers/Introduction'
import Para1 from '../Heplers/Para1'
import LinkCard2 from '../Heplers/LinkCard2'
import LinkCard3 from '../Heplers/LinkCard3'
import Image from 'next/image'

const T5L1 = () => {

  const linkData = [
    { title: "Self Awareness", description: "Understanding oneself is key to growth and decision-making." },
    { title: "Career Growth", description: "Knowing your personality helps in career advancement." },
    { title: "Teamwork", description: "Understanding others fosters better collaboration in teams." },
    { title: "Leadership", description: "Great leaders understand their own and their team’s strengths." },
  ]

  const link2Data = [
    { title: "Self Awareness", description: "Understanding oneself is key to growth and decision-making." },
    { title: "Career Growth", description: "Knowing your personality helps in career advancement." },
    { title: "Teamwork", description: "Understanding others fosters better collaboration in teams." },
  ]
  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
      <h1 className='text-[28px] font-bold'>Understanding <span className='text-[28px] text-[#DE5AFF]'>Learning Styles</span></h1>
      <Introduction />
      <Image src='/Elements.png' alt='ele' width={1021} height={140} />
      <h1 className='text-lg text-[#0047AB] font-semibold'>
        The purposes and applications of learning styles in career development include
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
        {linkData.map((item, index) => (
          <LinkCard2 key={index} title={item.title} description={item.description} />
        ))}
      </div>
      <h1 className='text-lg text-[#0047AB] font-semibold mt-7'>
        The purposes and applications of learning styles in career development include
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {link2Data.map((item, index) => (
          <LinkCard3 key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  )
}

export default T5L1