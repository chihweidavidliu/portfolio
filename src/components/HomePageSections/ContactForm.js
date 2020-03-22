import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../typography/SectionHeader'

const ContactFormWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
`

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
`

const ContactForm = () => (
  <ContactFormWrapper id="three">
    <InnerWrapper>
      <SectionHeader>Contact</SectionHeader>
      <p>Interested in my work? Get in touch here!</p>

      <StyledForm method="post" action="#">
        <TopRow>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
        </TopRow>

        <textarea name="message" id="message" placeholder="Message" rows="4" />
      </StyledForm>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" />
        </li>
      </ul>
    </InnerWrapper>
  </ContactFormWrapper>
)

export default ContactForm
