import React from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'
import SectionHeader from '../typography/SectionHeader'
import Section from '../Section'

const PointWrapper = styled.div`
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
  /* text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1); */
`

const DateLineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LineSectionWrapper = styled.div`
  width: 4px;
  height: ${props => props.height || '200px'};
  background: ${props => props.theme.accent1.bg};
  margin: 5px 0px;
  border-radius: 2px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
`

const LineSection = ({ height }) => (
  <LineSectionWrapper height={height}></LineSectionWrapper>
)

LineSection.propTypes = {
  height: Proptypes.string,
}

const Point = ({ date }) => (
  <PointWrapper>
    <InnerPoint />
    <DateLabel>{date}</DateLabel>
  </PointWrapper>
)

Point.propTypes = {
  date: Proptypes.string.isRequired,
}

const DateLine = () => (
  <DateLineWrapper>
    <Point date="2020" />
    <LineSection />
    <Point date="2019" />
    <LineSection />
    <Point date="2018" />
    <LineSection />
    <Point date="2017" />
  </DateLineWrapper>
)

const Timeline = () => (
  <Section>
    <SectionHeader>Timeline</SectionHeader>
    <DateLine />
  </Section>
)

export default Timeline
