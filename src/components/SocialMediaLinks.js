import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.a`
  color: ${props => (props.color ? `${props.color} !important` : 'inherit')};
`

class SocialMediaLinks extends React.Component {
  render() {
    const { iconColor } = this.props
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <StyledIcon
                color={iconColor}
                href="https://github.com/chihweidavidliu"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </StyledIcon>
            </li>
            <li>
              <StyledIcon
                color={iconColor}
                href="https://www.linkedin.com/in/david-liu-a6415663/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </StyledIcon>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SocialMediaLinks

SocialMediaLinks.propTypes = {
  iconColor: PropTypes.string,
}
