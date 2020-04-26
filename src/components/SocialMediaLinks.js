import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.a`
  color: ${props => (props.color ? `${props.color} !important` : 'inherit')};
  ${props => props.fontSize && `font-size: ${props.fontSize};`}
`

class SocialMediaLinks extends React.Component {
  static propTypes = {
    iconColor: PropTypes.string,
    fontSize: PropTypes.string,
    display: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  render() {
    const { iconColor, fontSize, display } = this.props

    return (
      <div>
        <div className="inner">
          <ul className="icons">
            {display && display.includes('github') && (
              <li>
                <StyledIcon
                  color={iconColor}
                  fontSize={fontSize}
                  href="https://github.com/chihweidavidliu"
                  className="icon fa-github"
                >
                  <span className="label">Github</span>
                </StyledIcon>
              </li>
            )}

            {display && display.includes('linkedin') && (
              <li>
                <StyledIcon
                  color={iconColor}
                  fontSize={fontSize}
                  href="https://www.linkedin.com/in/david-liu-a6415663/"
                  className="icon fa-linkedin"
                >
                  <span className="label">Linkedn</span>
                </StyledIcon>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default SocialMediaLinks
