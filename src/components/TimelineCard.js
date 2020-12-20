import React from 'react'
import format from 'date-fns/format'
import styled, { css } from 'styled-components'
import Proptypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Card } from './Card'

const TimelinCardWrapper = styled(Card)`
  position: absolute;
  width: 400px;
  height: initial;
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
`

export const HeaderWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 300;
  strong {
    color: ${props => props.theme.accent1.bg};
    opacity: 0.9;
  }
`

export const Date = styled.div`
  font-size: 13px;
  font-weight: 200;
  text-transform: uppercase;
`

const Description = styled.div`
  max-width: 100%;
  font-size: 14px;
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
}) => (
  <TimelinCardWrapper horizontalAlignment={horizontalAlignment} bottom={verticalOffset}>
    <HeaderWrapper>
      <Title>
        <strong>{organisation}</strong>, {location} - {title}
      </Title>
      <Date>
        {format(startDate, 'MMMM yyyy')} - {format(endDate, 'MMMM yyyy')}
      </Date>
    </HeaderWrapper>

    <Description>
      <ReactMarkdown plugins={[gfm]}>{description}</ReactMarkdown>
    </Description>
  </TimelinCardWrapper>
)

TimelineCard.propTypes = {
  horizontalAlignment: Proptypes.oneOf(['left', 'right']).isRequired,
  verticalOffset: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  organisation: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  startDate: Proptypes.instanceOf(Date),
  endDate: Proptypes.instanceOf(Date),
  description: Proptypes.string.isRequired,
}

export default TimelineCard
