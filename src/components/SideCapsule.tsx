import React from 'react'

interface HeadingProps {
  heading: string
  subHeading: string
  textColor: string
  imageUrl: string
  openImageUrl: string
  isOpen: boolean
  onClick: () => void
  onLinkClick: (text: string) => void
  activeLink: string
  links: Array<{ url: string, text: string }>
}

const SideCapsule: React.FC<HeadingProps> = ({ 
  heading, 
  subHeading, 
  imageUrl, 
  openImageUrl,
  textColor, 
  isOpen, 
  onClick,
  onLinkClick,
  activeLink,
  links = [],
}) => {
  return (
    <div className="w-full md:w-[259px] ml-0 md:ml-6 flex flex-col transition-all">
      <div 
        className={`h-16 md:h-20 flex flex-row p-2 items-center cursor-pointer transition-all gap-3
          ${isOpen 
            ? 'border-l-[1px] border-b-[1px] rounded-lg shadow-md' 
            : 'border-b-[1px]'
          }`}
        onClick={onClick}
        style={{
          borderColor: isOpen ? 'rgba(107, 114, 128, 0.2)' : '#E5E7EB',
          borderRightColor: isOpen ? textColor : 'transparent',
          borderRightWidth: isOpen ? '4px' : '0'
        }}
      >
        <div className="w-8 md:w-10 flex justify-center">
          <img 
            src={isOpen ? openImageUrl : imageUrl} 
            width={28} 
            height={28} 
            alt="icon"
            className="object-cover" 
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-[12px] md:text-[14px] text-[#666B72] font-light leading-tight">
            {heading}
          </h1>
          <p 
            className="font-semibold text-[14px] md:text-[16px] truncate"
            style={{ color: textColor }}
          >
            {subHeading}
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col px-4 py-2 transition-all duration-300">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(link.text);
              }}
              className={`py-1 transition-all ${
                activeLink === link.text ? 'font-bold text-black' : 'text-[#666B72]'
              }`}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default SideCapsule
