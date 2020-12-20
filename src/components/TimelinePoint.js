import React from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'

const PointWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const OuterPoint = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: none;
  border: 2px solid ${props => props.theme.accent1.bg};
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  margin-top: 3px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const InnerPoint = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.theme.accent1.bg};
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
`

const DateLabel = styled.div`
  color: ${props => props.theme.fgBold};
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
`

const TimelinePoint = ({ date, children }) => (
  <PointWrapper>
    <DateLabel>{date}</DateLabel>
    <OuterPoint>
      <InnerPoint />
    </OuterPoint>

    {children}
  </PointWrapper>
)

TimelinePoint.propTypes = {
  date: Proptypes.string.isRequired,
  children: Proptypes.any,
}

export default TimelinePoint
