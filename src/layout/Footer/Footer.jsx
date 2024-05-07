import React from 'react'
import Container from '../Util/Container'
import GithubIcon from '../../images/GithubIcon'
import LinkedInIcon from '../../images/LinkedInIcon'
import Tilt from "react-parallax-tilt"
const Footer = () => {
  return (
    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
      <Container className="text-accentLight flex flex-col sm:flex-row items-center justify-around font-rubix py-0 ">
        <h5 className="text-h5 colorScroll">Toni Baglien</h5>
        <a className="text-h5 colorScroll" href="mailto:tonibaglien@gmail.com">tonibaglien@gmail.com</a>
        <div className="iconWrapper flex gap-2">
          <GithubIcon width="50px" height="50px" fillColor='#ffdae8' />
          <LinkedInIcon width="50px" height="50px" fillColor="#ffdae8" />
        </div>
      </Container>
    </Tilt>
  )
}

export default Footer
