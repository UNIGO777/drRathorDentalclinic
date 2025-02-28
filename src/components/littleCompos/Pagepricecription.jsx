import React from 'react'

const Pagepricecription = ({pageName}) => {
  return (
    <div className="relative w-full h-[50vh] bg-gradient-to-r from-[#2c2c69] to-[#0b0b37]">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-[4em] font-bold mb-2">{pageName}</h1>
        <div className="flex items-center gap-2 text-sm">
          <span>Home</span>
          <span>/</span>
          <span>{pageName}</span>
        </div>
      </div>
    </div>
  )
}

export default Pagepricecription
