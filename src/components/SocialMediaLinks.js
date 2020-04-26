import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LinksWrapper = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: center;
  > * {
    margin: 10px;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.accent1.bg};
  }
  transition: all 0.2s;
`

const SocialMediaLinks = ({ iconColor, display, justifyContent }) => (
  <LinksWrapper justifyContent={justifyContent}>
    {display.includes('github') && (
      <a href="https://github.com/chihweidavidliu">
        <StyledIcon icon={faGithub} size="2x" color={iconColor || 'grey'} />
      </a>
    )}

    {display.includes('linkedin') && (
      <a href="https://www.linkedin.com/in/david-liu-a6415663/">
        <StyledIcon icon={faLinkedin} size="2x" color={iconColor || 'grey'} />
      </a>
    )}
  </LinksWrapper>
)

SocialMediaLinks.propTypes = {
  iconColor: PropTypes.string,
  display: PropTypes.arrayOf(PropTypes.string).isRequired,
  justifyContent: PropTypes.string,
}

export default SocialMediaLinks
