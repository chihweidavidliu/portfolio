import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

import ContactForm from '../components/HomePageSections/ContactForm'
import Portfolio from '../components/HomePageSections/Portfolio'
import Skills from '../components/HomePageSections/Skills'
import Introduction from '../components/HomePageSections/Introduction'

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

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'David Liu Web Development'
    const siteDescription = 'David Liu Web Development'

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>

          <div id="main">
            <Introduction />
            <Skills />
            <Portfolio />
            <ContactForm />
          </div>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default HomeIndex
