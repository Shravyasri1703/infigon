import Label from '@/app/Heplers/Label'
import LinkCard from '@/app/Heplers/LinkCard'
import React from 'react'

const T3L2 = () => {

    const labelData = [
        { text: "Leadership", borderColor: "#1999A1" },
        { text: "Creativity", borderColor: "#A15A19" },
        { text: "Teamwork", borderColor: "#55DCDC" },
        { text: "Problem-Solving", borderColor: "#F6C61A" },
        { text: "Work-Life Balance", borderColor: "#9140F8" },
        { text: "Innovation", borderColor: "#00A3FF" },
        { text: "Growth Mindset", borderColor: "#194CA1" },
        { text: "Financial Stability", borderColor: "#EE82FF" },
        { text: "Recognition", borderColor: "#B97979" },
        { text: "Autonomy", borderColor: "#FA9B56" },
    ];

    const leftColumn = labelData.slice(0, 5);
    const rightColumn = labelData.slice(5, 10);

    const linkData = [
        { title: "Self Awareness", description: "Understanding oneself is key to growth and decision-making." },
        { title: "Career Growth", description: "Knowing your personality helps in career advancement." },
        { title: "Teamwork", description: "Understanding others fosters better collaboration in teams." },
    ]

    return (
        <div className='flex flex-col w-full min-h-screen p-3 gap-4'>
            <h1 className='font-bold text-[18px] text-[#0047AB]'>Top 10 Career Motivators</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {/* Left Column (Labels 1-5) */}
                <div className='flex flex-col gap-4'>
                    {leftColumn.map((item, index) => (
                        <Label key={index} number={index + 1} text={item.text} borderColor={item.borderColor} />
                    ))}
                </div>

                {/* Right Column (Labels 6-10) */}
                <div className='flex flex-col gap-4'>
                    {rightColumn.map((item, index) => (
                        <Label key={index + 5} number={index + 6} text={item.text} borderColor={item.borderColor} />
                    ))}
                </div>
            </div>

            <h1 className='text-lg text-[#0047AB] font-semibold mt-7'>
                Purpose, Application, and Benefits of MBTI in Career Development
            </h1>

            {/* 3x3 Grid Layout for Link Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {linkData.map((item, index) => (
                    <LinkCard key={index} title={item.title} description={item.description} />
                ))}
            </div>

            <h1 className='text-lg text-[#0047AB] font-semibold mt-7'>
                Purpose, Application, and Benefits of MBTI in Career Development
            </h1>

            {/* 3x3 Grid Layout for Link Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {linkData.map((item, index) => (
                    <LinkCard key={index} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    )
}

export default T3L2