import React from 'react'
import Container from '../Util/Container'
import GithubIcon from '../../images/GithubIcon'
import LinkedInIcon from '../../images/LinkedInIcon'
import TiltWrapper from '../Util/TiltWrapper'
const Footer = () => {
  return (
    <TiltWrapper xTilt={2} yTilt={2}>
      <Container className="text-accentLight flex flex-col sm:flex-row items-center justify-around font-rubix py-0 ">
        <h5 className="text-h5 colorScroll">Toni Baglien</h5>
        <a className="text-h5 colorScroll" href="mailto:tonibaglien@gmail.com">tonibaglien@gmail.com</a>
        <div className="iconWrapper flex gap-2">
          <a href=" https://github.com/tony-baglien" target="_blank">
            <GithubIcon width="50px" height="50px" fillColor='#ffdae8' />
          </a>
          <a href="https://www.linkedin.com/in/tonybaglien/" target="_blank">
            <LinkedInIcon width="50px" height="50px" fillColor="#ffdae8" />
          </a>
        </div>
      </Container>
    </TiltWrapper>
  )
}

export default Footer
