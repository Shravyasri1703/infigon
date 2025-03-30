'use client'
import Header from '@/components/Header'
import Header_1 from '@/components/Header_1'
import Header_2 from '@/components/Header_2'
import SideBar from '@/components/SideBar'
import React, { useState } from 'react'

const Page1 = () => {
  const [content, setContent] = useState<React.ReactNode>(null)
  const [activeLink, setActiveLink] = useState<string>("")

  return (
    <div>
      <Header />
      <Header_1 />
      <Header_2 />
      <div className='flex flex-row w-screen min-h-screen'>
        <div className='flex w-[20%] p-5'>
          <SideBar 
            onContentChange={setContent} 
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
        <div className='w-[1px] bg-[#CACACA] h-screen m-5'></div>
        <div className='w-[75%] p-3'>
          {content ? (
            <div className='bg-white w-full h-full'>
              {content}
            </div>
          ) : (
            <div className='flex items-center justify-center h-full text-gray-400'>
              <p>Select a topic from the sidebar to view content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page1
