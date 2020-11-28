import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: ${props => props.theme.fgBold};
  font-size: 17px;
  display: grid;
  grid-gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgrey;
  &:last-of-type {
    border-bottom: none;
  }
`

const Subheading = styled.strong`
  color: ${props => props.theme.accent1.bg};
`
const ValueWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr;
  font-size: 16px;
`

const InformationRow = ({ title, values }) => (
  <Wrapper>
    <Subheading>{title}</Subheading>
    <ValueWrapper>
      {values.map(value => (
        <div key={value}>{value}</div>
      ))}
    </ValueWrapper>
  </Wrapper>
)

InformationRow.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.array,
}

export default InformationRow
