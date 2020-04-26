import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../typography/SectionHeader'
import Section from '../Section'
import SocialMediaLinks from '../SocialMediaLinks'

const ContactFormWrapper = styled(Section)`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`

const LinksWrapper = styled.div`
  margin: 20px 0px;
`

const ContactForm = () => (
  <ContactFormWrapper id="three">
    <InnerWrapper>
      <SectionHeader>Contact</SectionHeader>
      <p>Interested in my work? Get in touch on Linkedin!</p>
      <LinksWrapper>
        <SocialMediaLinks display={['linkedin']} />
      </LinksWrapper>
    </InnerWrapper>
  </ContactFormWrapper>
)

export default ContactForm
