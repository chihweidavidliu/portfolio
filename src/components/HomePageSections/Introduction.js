import React from 'react'
import styled from 'styled-components'
import SocialMediaLinks from '../SocialMediaLinks'
import SectionHeader from '../typography/SectionHeader'

const IntroImageWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 800px;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  margin-bottom: 100px;
  img:first-child {
    position: relative;
    left: 50px;
  }
  img:nth-child(2) {
    position: relative;
    top: 50px;

    z-index: 1;
  }
  img:nth-child(3) {
    position: relative;
    right: 50px;
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

const LinksWrapper = styled.div`
  margin-bottom: 40px;
`

const Introduction = () => (
  <section id="one">
    <header className="major">
      <SectionHeader>Welcome</SectionHeader>
    </header>

    <p>
      I’m a self-taught full-stack web developer who creates beautiful, powerful
      web apps.
    </p>

    <IntroImageWrapper>
      <StyledImage
        src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202957/portfolio/taskmaster/taskmaster-thumbnail_vamjxs.png"
        alt="dashboard"
      />
      <StyledImage
        src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202941/portfolio/myinternship/myinternship-thumbnail_nvtgiz.png"
        alt="dashboard"
      />
      <StyledImage
        src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-student-detail_mzbai1.png"
        alt="dashboard"
      />
    </IntroImageWrapper>

    <LinksWrapper>
      <SocialMediaLinks iconColor="#a2a2a2" fontSize="30px" />
    </LinksWrapper>
  </section>
)

export default Introduction
