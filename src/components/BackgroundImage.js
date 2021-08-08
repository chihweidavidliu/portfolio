import React from 'react'
import styled, { css } from 'styled-components'
import Proptypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'
import { useInView } from 'react-intersection-observer'

const StyledImg = styled.img`
  @media (max-width: 1120px) {
    display: none;
  }
  position: absolute;
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  width: ${props => props.width || 0};
  z-index: 0;

  opacity: 0;
  transition: all 400ms ease-in;
  ${props =>
    props.inView &&
    css`
      opacity: 1;
      /* transform: translateY(0); */
    `}
`

const BackgroundImage = ({ src, alt, top, left, width }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1120px)',
  })

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: isDesktop ? 0.7 : 0,
    rootMargin: `0px 0px ${isDesktop ? 0 : 100}px 0px`,
  })

  return (
    <StyledImg
      top={top}
      left={left}
      width={width || '400px'}
      ref={ref}
      inView={inView}
      src={src}
      alt={alt}
    />
  )
}

BackgroundImage.propTypes = {
  top: Proptypes.string.isRequired,
  left: Proptypes.string.isRequired,
  src: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired,
  width: Proptypes.string,
}

export default BackgroundImage
