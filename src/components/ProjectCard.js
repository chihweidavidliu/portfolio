import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import InformationRow from './InfromationRow'
import overlay from '../assets/images/overlay.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`
const ProjectDetails = styled.div`
  margin-top: 30px;
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
  background-color: white;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 10px;
  height: 100%;
  @media (max-width: 1280px) {
    flex-grow: 0;
  }
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  transition: border 0.4s;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${props => props.theme.accent1.bg};
  }
`

const H2 = styled.h2`
  color: ${props => props.theme.fgBold};
  font-size: 20px;
`

const DetailBorder = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`

const Spacer = styled.div`
  margin: 30px;
  width: 1px;
  height: 150px;
  background-color: lightgrey;
  align-self: center;
  @media (max-width: 600px) {
    width: 150px;
    height: 1px;
    justify-content: center;
  }
`

const Header = styled.div`
  margin-bottom: 10px;
  color: #347c67;
  font-weight: 800;
`

const ImageLinkWrapper = styled.a`
  height: 300px;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  text-align: center;

  &:before {
    transition: opacity 0.2s ease-in-out;
    background: url(${overlay});
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 4px;
  }

  &:after {
    transition: opacity 0.2s ease-in-out;
    border: solid 3px rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    color: #fff;
    content: 'View Gallery';
    display: inline-block;
    font-size: 0.8em;
    font-weight: _font(weight-bold);
    left: 50%;
    line-height: 2.25em;
    margin: -1.25em 0 0 -3em;
    opacity: 0;
    padding: 0 1.5em;
    position: absolute;
    text-align: center;
    text-decoration: none;
    top: 50%;
    white-space: nowrap;
  }

  &:hover {
    &:after {
      opacity: 1;
    }

    &:before {
      background: url(${overlay}), url(${overlay});
      opacity: 1;
    }
  }
`

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 0 50;
  border-radius: 4px;
`

const P = styled.p`
  margin: 0;
  font-size: 17px;
  color: ${props => props.theme.fgBold};
`

const LinksWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
`

const Link = styled.a`
  font-size: 16px;
  align-self: center;
  text-decoration: none;
  color: ${props => props.theme.accent1.bg};
`

const ProjectCard = ({ project, toggleLightbox }) => {
  const mainImage = project.images[0]

  return (
    <Wrapper id={project.title}>
      <div>
        <H2>{project.title}</H2>
      </div>

      <Card>
        <ImageLinkWrapper
          className="image fit thumb"
          href={mainImage.source}
          aria-label={`${project.title}-project-gallery`}
          alt={mainImage.description}
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
          </DetailBorder>
        </ProjectDetails>
        <LinksWrapper>
          {project.githubLinks.map(link => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              aria-label={`${project.title}-Github-${link.label}`}
            >
              {link.label}
            </Link>
          ))}
          {project.liveSiteLink && (
            <Link
              href={project.liveSiteLink}
              target="_blank"
              aria-label={`${project.title}-live-site`}
            >
              Live Site
            </Link>
          )}
        </LinksWrapper>
      </Card>
    </Wrapper>
  )
}

export default ProjectCard

// Prop types

const techStack = Proptypes.shape({
  frontEnd: Proptypes.string,
  backEnd: Proptypes.string,
})

const githubLink = Proptypes.shape({
  url: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
})

const project = {
  id: Proptypes.string.isRequired,
  images: Proptypes.array.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  techStack: techStack.isRequired,
  githubLinks: Proptypes.arrayOf(githubLink).isRequired,
  liveSiteLink: Proptypes.string,
}

ProjectCard.propTypes = {
  project: Proptypes.shape(project),
  toggleLightbox: Proptypes.func,
}
