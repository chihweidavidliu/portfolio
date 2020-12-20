import React from 'react'
import format from 'date-fns/format'
import styled, { css } from 'styled-components'
import Proptypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'
import ReactMarkdown from 'react-markdown'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import gfm from 'remark-gfm'
import { useInView } from 'react-intersection-observer'
import { Card } from './Card'

const TimelinCardWrapper = styled(Card)`
  width: 100%;
  height: initial;
  opacity: 0;
  transition: opacity 400ms ease-in, transform 400ms ease-in;
  transform: translateY(50%);
  ${props =>
    props.inView &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  @media (min-width: 1120px) {
    position: absolute;
    width: 400px;
    bottom: ${props => props.bottom};
    ${props => {
      switch (props.horizontalAlignment) {
        case 'left':
          return css`
            right: 130px;
          `
        case 'right':
          return css`
            left: 160px;
          `
        default:
          break
      }
    }};

    transform: ${props => {
      switch (props.horizontalAlignment) {
        case 'left':
          return `translateX(-50%)`
        case 'right':
          return `translateX(50%)`
        default:
          break
      }
    }};

    ${props =>
      props.inView &&
      css`
        opacity: 1;
        transform: translateX(0);
      `}
  }
`

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-gap: 5px;
`

const HeaderInfo = styled.div`
  display: grid;
  grid-gap: 5px;
`

const Logo = styled.img`
  width: 40px;
`

export const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  padding: 0;
  font-size: 22px;
  color: ${props => props.theme.accent1.bg};
`

const Organisation = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: ${props => props.theme.fgBold};
`

export const Date = styled.div`
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
`

const Description = styled.div`
  max-width: 100%;
  font-size: 16px;
  strong {
    color: ${props => props.theme.accent1.bg};
  }
  ul {
    padding-left: 20px;
    margin: 5px 0px;
  }
`

const TimelineCard = ({
  title,
  organisation,
  location,
  startDate,
  endDate,
  description,
  horizontalAlignment,
  verticalOffset,
  logoUrl,
}) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1120px)',
  })

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: isDesktop ? 0.5 : 0,
    rootMargin: `0px 0px ${isDesktop ? 0 : 100}px 0px`,
  })

  const renderDuration = () => {
    const days = differenceInCalendarDays(endDate, startDate)
    const months = Math.round(days / 30.41)
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    let duration = ''
    if (years > 0) {
      duration += `${years} year${years === 1 ? '' : 's'}`
    }

    if (remainingMonths) {
      duration += ` ${years > 0 ? remainingMonths : months} months`
    }

    return duration.trim()
  }

  return (
    <TimelinCardWrapper
      horizontalAlignment={horizontalAlignment}
      bottom={verticalOffset}
      ref={ref}
      inView={inView}
    >
      <HeaderWrapper>
        <HeaderInfo>
          <Title>{title}</Title>
          <Organisation>
            {organisation ? `${organisation}, ` : ''} {location}
          </Organisation>
          <Date>
            {format(startDate, 'MMMM yyyy')} - {format(endDate, 'MMMM yyyy')} (
            {renderDuration()})
          </Date>
        </HeaderInfo>
        {logoUrl && <Logo src={logoUrl} alt={`${organisation}-logo`} />}
      </HeaderWrapper>

      <Description>
        <ReactMarkdown plugins={[gfm]}>{description}</ReactMarkdown>
      </Description>
    </TimelinCardWrapper>
  )
}

TimelineCard.propTypes = {
  horizontalAlignment: Proptypes.oneOf(['left', 'right']).isRequired,
  verticalOffset: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  organisation: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  startDate: Proptypes.instanceOf(Date),
  endDate: Proptypes.instanceOf(Date),
  description: Proptypes.string.isRequired,
  logoUrl: Proptypes.string,
}

export default TimelineCard
