
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faInfo, faFileText } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <div className='w-full h-8 flex sticky top-6 z-50 items-center justify-center my-6 '>
      <ul className=" glass flex flex-row h-auto w-4/6 items-center justify-between rounded-xl ml-10 py-0 px-8">
        <li className="pb-0" >
          <FontAwesomeIcon className='w-8 h-8 md:w-10 md:h-10 text-accent  hover:animate-wiggle hover:cursor-pointer' icon={faUser} />
        </li>
        <li className="pb-0">
          <FontAwesomeIcon className='w-8 h-8 md:w-10 md:h-10  text-accent  hover:animate-wiggle hover:cursor-pointer' icon={faCode} />
        </li>
        <li>
          <span className="
        block
        w-full
        text-h3
        md:text-h2
        font-rubix
        text-accent
        text-center
        rounded-4xl">Toni Baglien</span>
        </li >
        <li className="pb-0">
          <FontAwesomeIcon className='w-8 h-8 md:w-10 md:h-10 text-accent hover:animate-wiggle hover:cursor-pointer' icon={faInfo} />
        </li>
        <li className="pb-0">
          <FontAwesomeIcon className='w-8 h-8 md:w-10 md:h-10 text-accent hover:animate-wiggle hover:cursor-pointer' icon={faFileText} />
        </li>
      </ul >
    </div >
  )
}

