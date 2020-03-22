import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SocialMediaLinks from '../SocialMediaLinks'
import SectionHeader from '../typography/SectionHeader'

const Welcome = styled(SectionHeader)`
  font-size: 50px;
  color: white;
  margin: 0;
  margin-bottom: 20px;
`

const IntroductionSectionWrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  strong {
    font-weight: 800;
    font-size: 24px;
  }
`

const IntroImageWrapper = styled.div`
  width: 80%;
  padding: 2vw 0px;
  margin: 20px 0px;
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

const StyledLink = styled.a`
  cursor: default;
  text-decoration: none;
  &:hover {
    border-bottom: dotted 1px transparent;
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
  & {
    margin: 40px;
    animation: MoveUpDown 1s linear infinite;
    position: relative;
    left: 0;
    bottom: 0;
    &:hover {
      border-bottom: dotted 1px transparent;
    }
  }
`

const Introduction = () => (
  <IntroductionSectionWrapper>
    <header>
      <Welcome>Hi, I'm David,</Welcome>
    </header>

    <P>a full-stack web developer based in London</P>

    <IntroImageWrapper>
      <StyledLink href="#TaskMaster">
        <StyledImage
          src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202957/portfolio/taskmaster/taskmaster-thumbnail_vamjxs.png"
          alt="dashboard"
        />
      </StyledLink>

      <StyledLink href="#MyInternship">
        <StyledImage
          src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202941/portfolio/myinternship/myinternship-thumbnail_nvtgiz.png"
          alt="dashboard"
        />
      </StyledLink>

      <StyledLink href="#Lingualink">
        <StyledImage
          src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-student-detail_mzbai1.png"
          alt="dashboard"
        />
      </StyledLink>
    </IntroImageWrapper>

    <LinksWrapper>
      <SocialMediaLinks iconColor="#a2a2a2" fontSize="20px" />
    </LinksWrapper>

    <ChevronLink href="#about">
      <FontAwesomeIcon icon={faChevronDown} size="2x" />
    </ChevronLink>
  </IntroductionSectionWrapper>
)

export default Introduction
