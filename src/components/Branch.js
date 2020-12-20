import React from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'

const BranchWrapper = styled.canvas`
  position: relative;
  background: 3px solid ${props => props.theme.accent1.bg};
`

const Branch = ({ horizontalAlignment }) => (
  <BranchWrapper horizontalAlignment={horizontalAlignment}>
    Branch
  </BranchWrapper>
)

Branch.propTypes = {
  horizontalAlignment: Proptypes.oneOf(['left', 'right']).isRequired,
}

export default Branch
