'use client'
import React, { useState } from 'react'
import SideCapsule from './SideCapsule'
import Tl1 from '@/app/link_components/Test_1/Tl1'
import T2L1 from '@/app/link_components/T2L1'
import T3L1 from '@/app/link_components/T3L1'
import T4L1 from '@/app/link_components/T4L1'
import T5L1 from '@/app/link_components/T5L1'
import { T1L3 } from '@/app/link_components/Link_3/T1L3'
import T2L3 from '@/app/link_components/Link_3/T2L3'
import T4L3 from '@/app/link_components/Link_3/T4L3'
import TtL3 from '@/app/link_components/Link_3/TtL3'
import T5L3 from '@/app/link_components/Link_3/T5L3'
import T1L2 from '@/app/link_components/Link_2/T1L2'
import T4L2 from '@/app/link_components/Link_2/T4L2'
import T3L2 from '@/app/link_components/Link_2/T3L2'
import TwL2 from '@/app/link_components/Link_2/TwL2'
import { IoMenu } from 'react-icons/io5'

interface SideBarProps {
  onContentChange: (component: React.ReactNode) => void;
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const SideBar:  React.FC<SideBarProps> = ({ onContentChange, activeLink, setActiveLink }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleLinkClick = (link: string, Component: React.ReactNode) => {
    setActiveLink(link)
    onContentChange(Component)
    setIsMobileOpen(false) // Close sidebar on mobile when a link is clicked
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center p-2">
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-2xl">
          <IoMenu />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed md:relative top-0 left-0 w-[250px] md:w-[300px] h-screen bg-white transition-transform duration-300 ease-in-out z-50
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}> 
        <div className="flex flex-col h-full gap-3 p-4">
          {
            [
              { heading: "TEST 1", subHeading: "Personality Explorer", textColor: "#0047AB", imageUrl: "/test1.png", openImageUrl:"/test1_open.png", links: [{text:"Understanding Personality Explorer", url: "/personality/big-five", component: <Tl1 />}, {text: "Personality Types", url:"/#", component: <T1L2 />}, {text:"Your Result", url:"/#", component:<T1L3 />}] },
              { heading: "TEST 2", subHeading: "Interest Explorer", textColor: "#309759", imageUrl: "/test2.png", openImageUrl:"/test2_open.png", links: [{text:"Understanding Interest Explorer", url: "/#", component: <T2L1 />}, {text: "RIASEC Model", url:"/#", component: <TwL2 />}, {text:"Your Result", url:"/#", component: <T2L3 />}] },
              { heading: "TEST 3", subHeading: "Career Motivators", textColor: "#FF9706", imageUrl: "/test3.png", openImageUrl:"/test3_open.png", links: [{text:"Understanding Career Motivators", url: "/#", component: <T3L1 />}, {text: "10 Career Motivators", url:"/#", component:<T3L2 />}, {text:"Your Result", url:"/#", component: <TtL3 />}] },
              { heading: "TEST 4", subHeading: "Emotional Intelligence", textColor: "#398BFF", imageUrl: "/test4.png", openImageUrl:"/test4_open.png", links: [{text:"Understanding Emotional Intelligence", url: "/", component: <T4L1 />}, {text: "Daniel Goleman Emotional Intelligence Test", url:"/", component:<T4L2 />}, {text:"Your Result", url:"/", component: <T4L3 />}] },
              { heading: "TEST 5", subHeading: "Learning Styles", textColor: "#DE5AFF", imageUrl: "/test5.png", openImageUrl:"/test5_open.png", links: [{text:"Understanding Learning Styles", url: "/",component: <T5L1 />}, {text:"Your Result", url:"/", component: <T5L3 />}] },
            ].map((item, index) => (
              <SideCapsule
                key={index}
                heading={item.heading}
                subHeading={item.subHeading}
                textColor={item.textColor}
                imageUrl={item.imageUrl}
                openImageUrl={item.openImageUrl}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
                onLinkClick={(linkText) => {
                  const link = item.links.find(l => l.text === linkText)
                  if (link) {
                    handleLinkClick(linkText, link.component)
                  }
                }}
                activeLink={activeLink}
                links={item.links}
              />
            ))
          }
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 md:hidden" onClick={() => setIsMobileOpen(false)}></div>
      )}
    </>
  )
}

export default SideBar
