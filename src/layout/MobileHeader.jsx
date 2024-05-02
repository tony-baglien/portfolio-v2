
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faInfo, faFileText } from '@fortawesome/free-solid-svg-icons'

export const MobileHeader = () => {
  return (
    <div className=' fixed left-3 top-4 z-50 w-fit h-auto flex justify items-center justify-center  '>
      <ul className={` flex flex-col h-auto  items-center justify-between px-4  bg-white/20 backdrop-blur-md rounded-full  py-8`}>
        <li className={`pb-4`}>
          <span className="text-h3 font-rubix text-accent">
            TB</span>
        </li>
        <li className={`pb-4`} >
          <FontAwesomeIcon className='w-10 h-10 text-accent  hover:animate-wiggle hover:cursor-pointer' icon={faUser} />
        </li>
        <li className={`pb-4`}>
          <FontAwesomeIcon className='w-10 h-10 text-accent  hover:animate-wiggle hover:cursor-pointer' icon={faCode} />
        </li>
        <li className={`pb-4`}>
          <FontAwesomeIcon className='w-10 h-10 text-accent hover:animate-wiggle hover:cursor-pointer' icon={faInfo} />
        </li>
        <li className={`pb-4`}>
          <FontAwesomeIcon className='w-10 h-10 text-accent hover:animate-wiggle hover:cursor-pointer' icon={faFileText} />
        </li>
      </ul >
    </div >
  )
}

export default MobileHeader

