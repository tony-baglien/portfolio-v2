import React, { useRef } from 'react'

const Container = ({ className, children }) => {
  let containerRef = useRef()

  return (
    <div ref={containerRef} className={`p-8 my-10 glass rounded-xl ${className} `} > {children}</div >
  )
}
export default Container 
