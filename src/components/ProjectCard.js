import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import InformationRow from './InfromationRow'

const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(0px, 1fr);
  grid-gap: 25px;
`

const DetailBorder = styled.div`
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 25px;
`

const Header = styled.div`
  margin-bottom: 10px;
`

const ImageLinkWrapper = styled.a`
  height: 400px;
`

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 9px 10px 59px -19px rgba(0, 0, 0, 0.41);
`

const P = styled.p`
  margin: 0;
  font-size: 18px;
`

const LinksWrapper = styled.div`
  margin-top: 20px;
  display: grid;
`

const Link = styled.a`
  font-size: 16px;
  align-self: center;
  text-decoration: none;
`

const ProjectCard = ({ project, toggleLightbox }) => {
  const mainImage = project.images[0]

  return (
    <article>
      <h3>{project.title}</h3>
      <ImageLinkWrapper
        className="image fit thumb"
        href={mainImage.source}
        onClick={e => {
          e.preventDefault()
          toggleLightbox(project)
        }}
      >
        <StyledImage src={mainImage.source} alt={mainImage.description} />
      </ImageLinkWrapper>

      <ProjectDetails>
        <DetailBorder>
          <Header>About</Header>
          <P>{project.description}</P>
        </DetailBorder>

        <DetailBorder>
          <Header>Tech Stack</Header>
          <InformationRow
            title="Front End"
            value={project.techStack.frontEnd}
          />
          {project.techStack.backEnd && (
            <InformationRow
              title="Back End"
              value={project.techStack.backEnd}
            />
          )}
          <LinksWrapper>
            {project.githubLinks.map(link => (
              <Link href={link.url}>{link.label}</Link>
            ))}
            {project.liveSiteLink && (
              <Link href={project.liveSiteLink}>Live Site</Link>
            )}
          </LinksWrapper>
        </DetailBorder>
      </ProjectDetails>
    </article>
  )
}

export default ProjectCard

// Prop types

const techStack = Proptypes.objectOf({
  frontEnd: Proptypes.string,
  backEnd: Proptypes.string,
})

const githubLink = Proptypes.objectOf({
  url: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
})

const project = {
  id: Proptypes.string.isRequired,
  images: Proptypes.array.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  techStack: Proptypes.objectOf(techStack).isRequired,
  githubLinks: Proptypes.arrayOf(githubLink).isRequired,
  liveSiteLink: Proptypes.string,
}

ProjectCard.propTypes = {
  project: Proptypes.objectOf(project),
  toggleLightbox: Proptypes.func,
}
