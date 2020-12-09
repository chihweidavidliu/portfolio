import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView } from 'react-intersection-observer'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SocialMediaLinks from '../SocialMediaLinks'
import SectionHeader from '../typography/SectionHeader'

const Welcome = styled(SectionHeader)`
  font-size: 50px;
  color: white;
  margin: 0;
  margin-bottom: 20px;
  text-shadow: 2px 2px 30px #001827;
`

const IntroductionSectionWrapper = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #001827;
  background-image: url('https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-position: center;
  background-size: cover;
  color: white;
  padding: 50px;
  text-align: center;
`

const P = styled.p`
  margin: 0;
  font-size: 22px;
  text-shadow: 2px 2px 20px #001827;
  strong {
    font-weight: 800;
    font-size: 24px;
  }
`

const IntroImageWrapper = styled.div`
  width: 80%;
  padding: 2vw 0px;
  margin: 20px 0px;
  height: 20vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

  a:first-child {
    position: relative;
    left: 50px;
  }
  a:nth-child(2) {
    position: relative;
    top: 50px;

    z-index: 1;
  }
  a:nth-child(3) {
    position: relative;
    right: 50px;
  }
  @media (max-width: 676px) {
    display: none;
  }
`

const StyledImage = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 9px 10px 59px -19px rgba(0, 0, 0, 0.61);
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s;
  &:hover {
    transform: scale(1.03);
  }
`

const getPosition = (fly, intersectionRatio) => {
  const weighting = 1 - intersectionRatio

  switch (fly) {
    case 'left':
      return {
        transform: `translateX(-${weighting * 100}%) rotate(${weighting *
          40}deg) scale(${intersectionRatio})`,
        opacity: intersectionRatio,
      }
    case 'right':
      return {
        transform: `translateX(${weighting * 100}%) rotate(-${weighting *
          40}deg) scale(${intersectionRatio})`,
        opacity: intersectionRatio,
      }
    case 'top':
      return {
        transform: `translateY(-${weighting *
          100}%) scale(${intersectionRatio})`,
        opacity: intersectionRatio,
      }
    default:
      return {}
  }
}

const StyledLink = styled.a.attrs(({ fly, intersectionRatio }) => ({
  style: getPosition(fly, intersectionRatio),
}))`
  cursor: default;
  text-decoration: none;
  &:hover {
    border-bottom: dotted 1px transparent;
  }

  transition: opacity 300ms, transform 300ms;

  animation: fadeIn ${props => props.duration || 0.7}s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

const LinksWrapper = styled.div`
  margin: 20px 0px;
`

const ChevronLink = styled.a`
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 20px;
    }
  }

  margin: 40px;
  animation: MoveUpDown 2s linear infinite;
  position: relative;
  left: 0;
  bottom: 0;
  &:hover {
    border-bottom: dotted 1px transparent;
  }
`

const THRESHOLD = [
  0.1,
  0.15,
  0.2,
  0.25,
  0.3,
  0.35,
  0.4,
  0.45,
  0.5,
  0.55,
  0.6,
  0.65,
  0.7,
  0.75,
  0.8,
  0.85,
  0.9,
  0.95,
  1,
] // Store multiple thresholds in a constant

const Introduction = () => {
  const { ref, entry } = useInView({ threshold: THRESHOLD })

  const intersectionRatio = entry ? entry.intersectionRatio : 1

  return (
    <IntroductionSectionWrapper ref={ref}>
      <div>
        <Welcome>Hi, I'm David,</Welcome>
      </div>

      <P>a full-stack web developer based in London</P>

      <IntroImageWrapper>
        <StyledLink
          href="#TaskMaster"
          fly="left"
          intersectionRatio={intersectionRatio}
        >
          <StyledImage
            src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202957/portfolio/taskmaster/taskmaster-thumbnail_vamjxs.png"
            alt="Taskmaster App Dashboard"
          />
        </StyledLink>

        <StyledLink
          href="#MyInternship"
          fly="top"
          intersectionRatio={intersectionRatio}
        >
          <StyledImage
            src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202941/portfolio/myinternship/myinternship-thumbnail_nvtgiz.png"
            alt="MyInternship App Dashboard"
          />
        </StyledLink>

        <StyledLink
          href="#Lingualink"
          fly="right"
          intersectionRatio={intersectionRatio}
        >
          <StyledImage
            src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-student-detail_mzbai1.png"
            alt="Lingualink App Dashboard"
          />
        </StyledLink>
      </IntroImageWrapper>

      <LinksWrapper>
        <SocialMediaLinks
          iconColor="#a2a2a2"
          fontSize="20px"
          display={['github', 'linkedin']}
        />
      </LinksWrapper>

      <ChevronLink href="#about" aria-label="navigate-to-next-section">
        <FontAwesomeIcon icon={faChevronDown} size="2x" color="grey" />
      </ChevronLink>
    </IntroductionSectionWrapper>
  )
}

export default Introduction
