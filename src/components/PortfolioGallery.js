import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Carousel, { Modal, ModalGateway } from 'react-images'
import CardGrid from './CardGrid'
import ProjectCard from './ProjectCard'

const StyledCardGrid = styled(CardGrid)`
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  grid-auto-rows: min-content;

  @media (max-width: 736px) {
    grid-template-columns: 1fr;
  }
`

const PortfolioGallery = ({ projects }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const toggleLightbox = selectedProject => {
    setIsLightboxOpen(!isLightboxOpen)
    setSelectedProject(selectedProject)
  }

  return (
    <div>
      <StyledCardGrid>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            toggleLightbox={toggleLightbox}
          />
        ))}
      </StyledCardGrid>

      <ModalGateway>
        {isLightboxOpen && selectedProject && (
          <Modal onClose={toggleLightbox}>
            <Carousel
              views={selectedProject.images}
              styles={{ footer: base => ({ ...base, height: '10vh' }) }}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

PortfolioGallery.displayName = 'Gallery'
PortfolioGallery.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default PortfolioGallery
