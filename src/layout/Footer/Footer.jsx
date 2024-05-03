import React from 'react'
import Container from '../Util/Container'
import GithubIcon from '../../images/GithubIcon'
import LinkedInIcon from '../../images/LinkedInIcon'
const Footer = () => {
  return (
    <Container className="flex flex-col sm:flex-row items-center justify-around font-rubix text-accent py-0 ">
      <h5 className="text-h5">Toni Baglien</h5>
      <a className="text-h5" href="mailto:tonibaglien@gmail.com">tonibaglien@gmail.com</a>
      <div className="iconWrapper flex gap-2">
        <GithubIcon width="50px" height="50px" fillColor="#E44F6A" />
        <LinkedInIcon width="50px" height="50px" fillColor="#E44f6A" />
      </div>
    </Container>
  )
}

export default Footer
