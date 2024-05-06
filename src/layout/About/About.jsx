import Container from '../Util/Container.jsx'
import MediaQuery from 'react-responsive'

const About = () => {
  return (
    <div className="md:w-full md:flex md:justify-center">
      <Container yOffset={0} className="flex items-center justify-center w-full max-w-full" >
        <div className="pointer-events-none w-full flex justify-evenly gap-8 font-rubix text-text text-h4 md:text-h5">
          <MediaQuery minWidth={1024}>
            <img src="/images/portfolio.webp" className=" w-72 aspect-square rounded-full" />
          </MediaQuery>
          <div>
            <p>Hey There!</p>
            <p className="pt-4 md:pt-0 leading-snug">I'm Toni, a front-end developer, among other things.</p>
            <p className="pt-4 md:pt-0 leading-snug">I've been tinkering with</p>
            <ul className="py-6 md:py-4 md:flex md:gap-4">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <p className="pt-4 md:pt-0">for over four years and I'd say I fancy myself a bit of a web wizard.</p>
            <p className="pt-4 md:pt-0">I have a passion for music, and I love to utilize my musicality and creative curiosity into every project I do.</p>
          </div>
        </div>
      </Container>
    </div >
  )
}

export default About
