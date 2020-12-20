import React from 'react'
import styled, { css } from 'styled-components'
import Proptypes, { number } from 'prop-types'

const BranchWrapper = styled.div`
  position: absolute;
  width: 160px;
  height: 100%;
  overflow: visible;
  ${props => {
    switch (props.horizontalAlignment) {
      case 'left':
        return css`
          right: -160px;
        `
      case 'right':
        return css`
          left: -160px;
        `
      default:
        break
    }
  }};
`

const SVG = styled.svg`
  height: 100%;
  width: 100%;
  overflow: visible;
`

const Path = styled.path.attrs(() => ({
  strokeDasharray: '3, 3',
}))`
  stroke: ${props => props.theme.fgBold};
  fill: none;
  width: 1px;
  height: 100%;
  opacity: 0.2;
  transition: all 400ms ease-in;

  ${props =>
    props.isHovered &&
    css`
      opacity: 1;
      stroke: ${props.theme.accent1.bg};
    `}
`

// the offset at which the path will start curving inwards
const HEIGHT_OFFSET = 15

const Branch = ({
  horizontalAlignment,
  heights = { top: 50, bottom: 50 },
  isHovered,
}) => {
  const renderPaths = () => {
    if (horizontalAlignment === 'left') {
      return (
        <g fill="none" height="100%" width="100%">
          <Path
            isHovered={isHovered}
            d={`
        M 0,50
        Q 65,50, 65,35
        T 65, ${50 - heights.top + HEIGHT_OFFSET}
        Q 65,${50 - heights.top}, 80,${50 - heights.top}
      `}
          />

          <Path
            isHovered={isHovered}
            d={`
        M 0,50
        Q 65,50, 65,65
        T 65, ${50 + heights.bottom - HEIGHT_OFFSET}
        Q 65,${50 + heights.bottom}, 80,${50 + heights.bottom}
      `}
          />
        </g>
      )
    }

    // Right aligned
    return (
      <g fill="none" height="100%" width="100%">
        <Path
          isHovered={isHovered}
          d={`
      M 100,50
      Q 35,50, 35,35
      T 35, ${50 - heights.top + HEIGHT_OFFSET}
      Q 35,${50 - heights.top}, 20,${50 - heights.top}
    `}
        />

        <Path
          isHovered={isHovered}
          d={`
      M 100,50
      Q 35,50, 35,65
      T 35, ${50 + heights.bottom - HEIGHT_OFFSET}
      Q 35,${50 + heights.bottom}, 20,${50 + heights.bottom}
    `}
        />
      </g>
    )
  }

  return (
    <BranchWrapper horizontalAlignment={horizontalAlignment}>
      <SVG viewBox="0 0 100 100">{renderPaths(horizontalAlignment)}</SVG>
    </BranchWrapper>
  )
}

export const HEIGHTS = Proptypes.shape({
  top: number,
  bottom: number,
})

Branch.propTypes = {
  horizontalAlignment: Proptypes.oneOf(['left', 'right']).isRequired,
  heights: Proptypes.shape(HEIGHTS),
  isHovered: Proptypes.bool.isRequired,
}

export default Branch
