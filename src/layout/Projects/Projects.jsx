import React from 'react'
import ProjectsItem from './ProjectsItem'
import Tilt from 'react-parallax-tilt'

const projObj = [
  {
    'title': 'Hack Type',
    'content': `Have you ever wanted to be a Hollywood hacker? Now you can! Just type anything on your keyboard and you will look like a l33t h@x0r. Inspired by hackertyper.net, I utilized javascript for the “auto typing” and CSS styles to give it a retro CRTV look. Happy Hacking!`,
    'url': 'https://hack-type.onrender.com'
  },
  {
    'title': 'React Meals',
    'content': `If there is one thing I love more than coding, it's food. Using the React framework, I created a food ordering application, that let's you select your favorite meals and add them to your cart. The downside? You can't actually order any of it.`,
    'url': 'https://react-eats-hsuf.onrender.com'
  },
  {
    'title': 'Keyworks',
    'content': `This project was designed for me to get a better handle on MongoDB storage and filtering, in conjunction with React for Design and Next.js for routing. The content was selected because I love mechanical keyboards and making fun names for products.!`,
    'url': 'https://keyworks.onrender.com'

  }
]
const Projects = () => {
  return (
    <div className="flex justify-between gap-4 lg:gap-2 lg:w-full overflow-x-scroll lg:overflow-x-visible mb-8">
      {projObj.map(data => {
        return (
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <ProjectsItem project={data} />
          </Tilt>
        )
      })}
    </div >
  )
}

export default Projects
