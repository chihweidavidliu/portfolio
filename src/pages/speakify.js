import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { dummyText } from '../util/speakify/dummyText'
import { languageOptions } from '../util/speakify/languageOptions'

const AppWrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito', sans-serif;
  background-color: teal;
  overflow: hidden;
`

const Background = styled.div`
  text-align: justify !important;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
  font-size: 40px;
  font-family: 'Pacifico', cursive;
  color: #5d9e9d;
`

const Card = styled.div`
  z-index: 2;
  width: 700px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Header = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 60px;
  margin: 0;
`

const Description = styled.p`
  color: gray;
`

const Select = styled.select`
  margin: 15px;
`

const Speakify = () => {
  const siteTitle = 'David Liu Web Development'
  const siteDescription = 'David Liu Web Development'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <AppWrapper>
        <Background>{dummyText}</Background>
        <Card>
          <Header>Speakify</Header>
          <h3>CSV text to speech synthesizer</h3>
          <Description>
            Speakify uses the soundoftext API to access Google's speech
            synthesis capabilities and rapidly download pronunciations for
            wordlists.
          </Description>

          <label htmlFor="languages">Choose a language</label>
          <Select className="field__Select" name="languages" id="languages">
            {languageOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Card>
      </AppWrapper>
    </Layout>
  )
}

export default Speakify
