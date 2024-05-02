import React from 'react'
import Container from '../Util/Container'
import GithubIcon from '../../images/GithubIcon'
import LinkedInIcon from '../../images/LinkedInIcon'
const Footer = () => {
  return (
    <Container className="flex flex-col items-center justify-center font-rubix text-text ">
      <h5 className="text-h5">Toni Baglien</h5>
      <h5 className="text-h5">tonibaglien@gmail.com</h5>
      <div className="iconWrapper flex mt-4">
        <GithubIcon width="50px" height="50px" fillColor="#E44F6A" />
        <LinkedInIcon width="50px" height="50px" fillColor="#E44f6A" />
      </div>
    </Container>
  )
}

export default Footer
