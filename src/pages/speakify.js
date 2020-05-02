import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Speakify from '../components/hostedProjects/Speakify'

const SpeakifyPage = () => {
  const siteTitle = 'David Liu Web Development'
  const siteDescription = 'David Liu Web Development'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <Speakify />
    </Layout>
  )
}

export default SpeakifyPage
