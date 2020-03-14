import React from 'react'
import styled from 'styled-components'

const IntroImageWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 1000px;
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

const Introduction = () => (
  <section id="one">
    <header className="major">
      <h2>Welcome</h2>
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
  </section>
)

export default Introduction
