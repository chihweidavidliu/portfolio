import React from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'

const PointWrapper = styled.div`
  position: relative;
`

const OuterPoint = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.accent1.bg};
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
  cursor: default;
  transition: transform 0.1s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`

const InnerPoint = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.theme.accent1.bg};
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
`

const DateLabel = styled.div`
  color: ${props => props.theme.fgBold};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  left: 35px;
`

const TimelinePoint = ({ date, children }) => (
  <PointWrapper>
    <OuterPoint>
      <InnerPoint />
      <DateLabel>{date}</DateLabel>
    </OuterPoint>
    {children}
  </PointWrapper>
)

TimelinePoint.propTypes = {
  date: Proptypes.string.isRequired,
  children: Proptypes.any,
}

export default TimelinePoint
