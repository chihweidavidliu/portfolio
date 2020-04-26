import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: ${props => props.theme.fgBold};
  font-size: 17px;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 20px;
`

const ValueWrapper = styled.span`
  text-align: right;
  justify-self: right;
`

const InformationRow = ({ title, value, children }) => (
  <Wrapper>
    <strong>{title}:</strong>
    <ValueWrapper>{value || children}</ValueWrapper>
  </Wrapper>
)

InformationRow.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.any,
}

export default InformationRow
