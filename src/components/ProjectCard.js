import React from 'react'
import Proptypes from 'prop-types'

const ProjectCard = ({ project, toggleLightbox }) => {
  const mainImage = project.images[0]

  return (
    <article>
      <a
        className="image fit thumb"
        href={mainImage.source}
        onClick={e => {
          e.preventDefault()
          toggleLightbox(project)
        }}
      >
        <img src={mainImage.source} alt={mainImage.description} />
      </a>

      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  project: Proptypes.objectOf({
    id: Proptypes.string.isRequired,
    images: Proptypes.array.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
  }),
  toggleLightbox: Proptypes.func,
}
