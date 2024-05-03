import React, { useRef } from 'react'

const Container = ({ className, children }) => {
  let containerRef = useRef()

  return (
    <div ref={containerRef} className={`w-full p-8 my-2 glass rounded-xl ${className} `} > {children}</div >
  )
}
export default Container 
