import React from 'react'
import Container from '../Util/Container'
const ProjectsItem = (props) => {
  return (
    <Container className="lg:flex-shrink flex-shrink-0">
      <div className="flex flex-col font-rubix py-6">
        <h3 className="text-h3 text-accent mb-4">{props.project.title}</h3>
        <p className="text-h5 text-text">{props.project.content}</p>
        <div>
        </div>
      </div>
    </Container >)
}

export default ProjectsItem
