import React from 'react'
import Container from '../Util/Container'
const ProjectsItem = (props) => {
  return (
    <a className={"block h-full pb-4"} href={props.project.url} target="_blank">
      <Container className="  cursor-pointer transition-shadow duration-700 lg:hover:shadow-glow">
        <div className="flex flex-col font-rubix py-6">
          <h3 className="text-h3 text-accent mb-4">{props.project.title}</h3>
          <p className="text-h5 text-text">{props.project.content}</p>
          <div>
          </div>
        </div>
      </Container >
    </a >)
}

export default ProjectsItem
