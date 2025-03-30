import LinkCard from '@/app/Heplers/LinkCard'
import LinkCard4 from '@/app/Heplers/LinkCard4'
import Image from 'next/image'
import React from 'react'

const TwL2 = () => {

    const linkData = [
        { title: "Self Awareness", description: "Understanding oneself is key to growth and decision-making." },
        { title: "Career Growth", description: "Knowing your personality helps in career advancement." },
        { title: "Teamwork", description: "Understanding others fosters better collaboration in teams." },
    ]

    const linkData1 = [
        { title: "Self Awareness", description: "Understanding oneself is key to growth and decision-making." },
        { title: "Career Growth", description: "Knowing your personality helps in career advancement." },
    ]

    return (
        <div className='flex flex-col w-full min-h-screen p-3 gap-4 '>
            <h1 className='font-bold text-[18px] text-[#0047AB] mb-5'>Themes of RIASEC</h1>
            
            <Image src="/circle.png" alt="cir" width={1021} height={450} />

            <h1 className='text-lg text-[#0047AB] font-semibold mt-7'>
                Purpose and Application RIASEC in Career Development
            </h1>

            {/* 3x3 Grid Layout for Link Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {linkData.map((item, index) => (
                    <LinkCard key={index} title={item.title} description={item.description} />
                ))}
            </div>

            <h1 className='text-lg text-[#0047AB] font-semibold mt-7'>
                Benefits of Understanding Intrest Using RIASEC for Career Planning
            </h1>

            {/* 3x3 Grid Layout for Link Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {linkData.map((item, index) => (
                    <LinkCard key={index} title={item.title} description={item.description} />
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4  mb-20'>
        {linkData1.map((item, index) => (
          <LinkCard4 key={index} title={item.title} description={item.description} />
        ))}
      </div>

        </div>
    )
}

export default TwL2