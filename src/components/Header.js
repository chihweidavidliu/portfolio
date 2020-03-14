import React from 'react'

import SocialMediaLinks from './SocialMediaLinks'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <div className="image avatar">
            <img
              src="https://avatars3.githubusercontent.com/u/40054735?s=460&u=bc4a2fdebed23da2de159078dec770b5ea99ad3c&v=4"
              alt=""
            />
          </div>
          <h1>
            <strong>Hi, I'm David</strong>, <br /> a Full-Stack Web Developer
          </h1>
          <SocialMediaLinks />
        </div>
      </header>
    )
  }
}

export default Header
