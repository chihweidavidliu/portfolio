import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <div className="image avatar">
            <img src={avatar} alt="" />
          </div>
          <h1>
            <strong>Hi, I'm David</strong>, <br /> a Full-Stack Web Developer
          </h1>
          <Footer />
        </div>
      </header>
    )
  }
}

export default Header
