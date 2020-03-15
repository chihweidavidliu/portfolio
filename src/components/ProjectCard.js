import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import InformationRow from './InfromationRow'

const Wrapper = styled.section``
const ProjectDetails = styled.div`
  display: flex;
  min-width: 200px;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const Card = styled.div`
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 10px;
`

const DetailBorder = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
  padding: 30px;
`

const Spacer = styled.div`
  width: 1px;
  height: 90px;
  background-color: lightgrey;
  align-self: center;
  @media (max-width: 600px) {
    width: 90px;
    height: 1px;
    justify-content: center;
  }
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
    <Wrapper>
      <h3>{project.title}</h3>
      <Card>
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

          <Spacer />

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
      </Card>
    </Wrapper>
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
