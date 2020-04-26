import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
  scroll-behavior: smooth;
}
  body {
    font-family: "Source Sans Pro", "sans-serif"; 
    padding: 0;
    margin: 0;
    background: ${props => props.theme.bg}
  }
`

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

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.array,
}
