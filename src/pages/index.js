import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

import ContactForm from '../components/HomePageSections/ContactForm'
import Portfolio from '../components/HomePageSections/Portfolio'
import Skills from '../components/HomePageSections/Skills'
import Introduction from '../components/HomePageSections/Introduction'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'David Liu Web Development'
    const siteDescription = 'David Liu Web Development'

    return (
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
    )
  }
}

export default HomeIndex
