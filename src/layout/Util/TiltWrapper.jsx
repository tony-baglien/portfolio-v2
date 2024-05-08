import React from 'react'
import Tilt from "react-parallax-tilt"
import MediaQuery from 'react-responsive'

const TiltWrapper = ({ className, children, xTilt, yTilt }) => {
  return (
    <>
      <Tilt className={`hidden md:block ${className}`} tiltMaxAngleX={xTilt} tiltMaxAngleY={yTilt}>
        {children}
      </Tilt>
      <Tilt className={`block md:hidden ${className}`} gyroscope={true} tiltMaxAngleX={xTilt} tiltMaxAngleY={yTilt}>

        {children}
      </Tilt>
    </>
  )
}

export default TiltWrapper
