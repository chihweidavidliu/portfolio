import React from 'react'
import styled from 'styled-components'
import Section from '../Section'
import SectionHeader from '../typography/SectionHeader'
import SocialMediaLinks from '../SocialMediaLinks'

const Grid = styled.div`
  display: grid;
  max-width: 800px;
  grid-gap: 30px;
  grid-template-columns: 1fr 200px;
  margin: 0 auto;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    text-align: center;
  }
`

const SocialLinksLabel = styled.div`
  font-size: 16px;
  margin-top: 10px;
`
const Avatar = styled.div`
  height: 200px;
  width: 200px;
  justify-self: center;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const About = () => (
  <Section id="about">
    <SectionHeader>About Me</SectionHeader>
    <Grid>
      <div>
        I’m a self-taught full-stack web developer who creates beautiful,
        powerful web apps using a range of modern technologies. <br />I am
        available for freelance work, with a special interest in creating rich
        web applications.
        <SocialLinksLabel>
          Follow my projects on Github and Linkedin:
          <SocialMediaLinks iconColor="#a2a2a2" fontSize="20px" />
        </SocialLinksLabel>
      </div>
      <Avatar>
        <img
          src="https://avatars3.githubusercontent.com/u/40054735?s=460&u=bc4a2fdebed23da2de159078dec770b5ea99ad3c&v=4"
          alt=""
        />
      </Avatar>
    </Grid>
  </Section>
)

export default About
