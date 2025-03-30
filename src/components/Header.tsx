import Image from 'next/image'
import Logo from '../../public/Logo.png'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5' // Importing menu icon for mobile

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex flex-row w-full lg:[100vw] h-[72px] items-center shadow-sm justify-between lg:justify-evenly px-4 md:px-10 '>

      {/* Logo */}
      <div className='w-auto lg:w-[10%] h-full flex items-center '>
        <Image src={Logo} alt='logo' className='w-10 h-10 md:w-11 md:h-10' />
      </div>

      {/* Navigation (Desktop) */}
      <div className='hidden md:flex flex-row gap-12 text-sm w-auto lg:w-[60%] items-center lg:items-center'>
        <p className='text-[#5B6871] cursor-pointer hover:text-black'>Home</p>
        <p className='text-[#5B6871] cursor-pointer hover:text-black'>My Tests</p>
        <p className='text-[#5B6871] cursor-pointer hover:text-black'>My Sessions</p>
        <p className='text-[#5B6871] cursor-pointer hover:text-black'>Career Library</p>
        <p className='text-black font-semibold cursor-pointer'>Your Report</p>
      </div>

      {/* Icons & Mobile Menu */}
      <div className='flex items-center gap-4 w-auto lg:w-[10%] ml-0 lg:ml-8 justify-center lg:justify-end'>
        <Image src="/bell_icon.png" width={28} height={28} alt='bell' className='cursor-pointer' />
        <Image src='/account_icon.png' width={40} height={28} alt='acc' className='cursor-pointer' />
        
        {/* Mobile Menu Icon */}
        <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          <IoMenu size={28} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className='absolute top-[72px] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 md:hidden'>
          <p className='text-[#5B6871] cursor-pointer hover:text-black'>Home</p>
          <p className='text-[#5B6871] cursor-pointer hover:text-black'>My Tests</p>
          <p className='text-[#5B6871] cursor-pointer hover:text-black'>My Sessions</p>
          <p className='text-[#5B6871] cursor-pointer hover:text-black'>Career Library</p>
          <p className='text-black font-semibold cursor-pointer'>Your Report</p>
        </div>
      )}
    </div>
  )
}

export default Header
