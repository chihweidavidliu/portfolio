import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import ContactForm from '../components/HomePageSections/ContactForm'
import Portfolio from '../components/HomePageSections/Portfolio'
import Skills from '../components/HomePageSections/Skills'
import Introduction from '../components/HomePageSections/Introduction'
import About from '../components/HomePageSections/About'

const theme = {
  bg: '#fff',
  fg: '#a2a2a2',
  fgBold: '#787878',
  fgLight: '#b2b2b2',
  border: '#efefef',
  borderBg: '#f7f7f7',
  border2: '#dfdfdf',
  border2Bg: '	#e7e7e7',
  accent1: {
    bg: '#3a8e75',
    fgBold: '#ffffff',
    border: 'rgba(255, 255, 255, 0.25)',
    borderBg: 'rgba(255, 255, 255, 0.075)',
    border2: 'rgba(255, 255, 255, 0.5)',
    border2Bg: 'rgba(255, 255, 255, 0.2)',
  },
  accent2: {
    bg: '#1f1815',
    fg: 'rgba(255,255,255,0.5)',
    fgBold: '#ffffff',
    fgLight: 'rgba(255, 255, 255, 0.4)',
    border: 'rgba(255, 255, 255, 0.25)',
    borderBg: 'rgba(255, 255, 255, 0.075)',
    border2: 'rgba(255, 255, 255, 0.5)',
    border2Bg: 'rgba(255, 255, 255, 0.2)',
  },
}

const AppWrapper = styled.div`
  width: 100vw;
  display: grid;
  justify-items: center;

  section {
    /* border-top: solid 2px lightgray; */
    width: 100%;
    max-width: 1200px;
    padding: 30px;
    text-align: center;

    &:first-child {
      border-top: 0;
      margin-top: 0;
      padding-top: 0;
    }
  }
`

const Divider = styled.div`
  height: 1px;
  width: 80%;
  background-color: lightgrey;
`

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'David Liu Web Development'
    const siteDescription = 'David Liu Web Development'

    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <AppWrapper>
          <Introduction />
          <About />
          <Divider />
          <Skills />
          <Divider />
          <Portfolio />
          <Divider />
          <ContactForm />
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default HomeIndex
