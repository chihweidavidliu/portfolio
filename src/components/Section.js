import styled from 'styled-components'

const Section = styled.div`
  padding: 100px;
  width: 100%;
  max-width: 1440px;
  @media (max-width: 767px) {
    padding: 50px 25px;
  }

  @media (max-width: 367px) {
    padding: 50px 10px;
  }
`

export default Section
