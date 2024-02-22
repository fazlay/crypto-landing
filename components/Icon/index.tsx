import React from "react"

interface ReactIconProps {
  children: React.ReactNode
}

const ReactIcon: React.FC<ReactIconProps> = ({ children }) => {
  return (
    <div className="flex h-[48px] w-[48px] flex-row items-center justify-center rounded-full bg-[#290064] text-[20px] text-white">
      {children}
    </div>
  )
}

export default ReactIcon
