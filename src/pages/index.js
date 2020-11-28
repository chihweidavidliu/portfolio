import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import ContactForm from '../components/HomePageSections/ContactForm'
import Portfolio from '../components/HomePageSections/Portfolio'
import Skills from '../components/HomePageSections/Skills'
import Introduction from '../components/HomePageSections/Introduction'
import About from '../components/HomePageSections/About'
import Layout from '../components/layout'

const AppWrapper = styled.main`
  width: 100vw;
  max-width: 100vw;
  display: grid;
  justify-items: center;
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
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <html lang="en" />
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
      </Layout>
    )
  }
}

export default HomeIndex
