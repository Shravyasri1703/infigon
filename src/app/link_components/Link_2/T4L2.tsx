import LinkCard from '@/app/Heplers/LinkCard'
import LinkCard4 from '@/app/Heplers/LinkCard4'
import Para1 from '@/app/Heplers/Para1'
import Image from 'next/image'
import React from 'react'

const T4L2 = () => {

    const linkData1 = [
        { title: "Self Awareness", description: "Understanding oneself is key to growth and decision-making." },
        { title: "Career Growth", description: "Knowing your personality helps in career advancement." },
    ]

    const linkData = [
        { title: "Self Awareness", description: "Understanding oneself is key to growth and decision-making." },
        { title: "Career Growth", description: "Knowing your personality helps in career advancement." },
        { title: "Teamwork", description: "Understanding others fosters better collaboration in teams." },
    ]

  return (
    <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
    <h1 className='font-bold text-[18px] text-[#0047AB]'>5 Emotional Elements</h1>
    <div className='flex flex-wrap w-full h-auto justify-center gap-3 mt-2'>
        <Image src='/orange.png' alt='or' width={170} height={170} className='w-full max-w-[170px] h-auto' />
        <Image src='/blue.png' alt='or' width={170} height={170} className='w-full max-w-[170px] h-auto' />
        <Image src='/pink.png' alt='or' width={170} height={170} className='w-full max-w-[170px] h-auto' />
        <Image src='/brown.png' alt='or' width={170} height={170} className='w-full max-w-[170px] h-auto' />
        <Image src='/green.png' alt='or' width={170} height={170} className='w-full max-w-[170px] h-auto' />
    </div>
    
    <h1 className='text-lg text-[#0047AB] font-semibold'>
        Applications of the Emotional Intelligence Test in career development include
    </h1>
    <Para1 />
    
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {linkData1.map((item, index) => (
            <LinkCard4 key={index} title={item.title} description={item.description} />
        ))}
    </div>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {linkData.map((item, index) => (
            <LinkCard key={index} title={item.title} description={item.description} />
        ))}
    </div>
    
    <h1 className='text-lg text-[#0047AB] font-semibold mt-7'>
        Applications of the Emotional Intelligence Test in career development include
    </h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {linkData1.map((item, index) => (
            <LinkCard4 key={index} title={item.title} description={item.description} />
        ))}
    </div>
</div>
  )
}

export default T4L2