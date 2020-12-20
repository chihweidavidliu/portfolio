import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import SectionHeader from '../typography/SectionHeader'
import Section from '../Section'
import TimelineCard from '../TimelineCard'
import { timelineContents } from '../../timeline'
import TimelinePoint from '../TimelinePoint'

const TimelineWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px;

  @media (min-width: 1120px) {
    grid-gap: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
`

const LineSection = styled.div`
  position: relative;
  width: 4px;
  height: ${props => props.height || '400px'};
  background: ${props => props.theme.accent1.bg};
  margin: 5px 0px;
  border-radius: 2px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
`

const Timeline = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1120px)',
  })

  return (
    <Section>
      <SectionHeader>Work and Education</SectionHeader>
      <TimelineWrapper>
        {isDesktop ? (
          <>
            <TimelinePoint date="2021"></TimelinePoint>
            <LineSection />
            <TimelinePoint date="2020">
              <TimelineCard
                horizontalAlignment="left"
                verticalOffset="50px"
                {...timelineContents.satoshi}
              />
            </TimelinePoint>
            <LineSection />
            <TimelinePoint date="2019">
              <TimelineCard
                horizontalAlignment="right"
                verticalOffset="180px"
                {...timelineContents.defty}
              />
              <TimelineCard
                horizontalAlignment="left"
                verticalOffset="0px"
                {...timelineContents.bearjs}
              />
            </TimelinePoint>
            <LineSection />
            <TimelinePoint date="2018">
              <TimelineCard
                horizontalAlignment="right"
                verticalOffset="-80px"
                {...timelineContents.freelance}
              />
            </TimelinePoint>
            <LineSection />
            <TimelinePoint date="2017">
              <TimelineCard
                horizontalAlignment="left"
                verticalOffset="250px"
                {...timelineContents.ens}
              />
            </TimelinePoint>
            <LineSection />
            <TimelinePoint date="2016">
              <TimelineCard
                horizontalAlignment="right"
                verticalOffset="250px"
                {...timelineContents.mcs}
              />
            </TimelinePoint>
            <LineSection height="70px" />
            <TimelinePoint date="2015">
              <TimelineCard
                horizontalAlignment="left"
                verticalOffset="50px"
                {...timelineContents.mst}
              />
            </TimelinePoint>
            <LineSection height="70px" />
            <TimelinePoint date="2014" />
            <LineSection height="70px" />
            <TimelinePoint date="2013" />
            <LineSection height="70px" />
            <TimelinePoint date="2012" />
            <LineSection height="70px" />
            <TimelinePoint date="2011">
              <TimelineCard
                horizontalAlignment="right"
                verticalOffset="110px"
                {...timelineContents.ba}
              />
            </TimelinePoint>
          </>
        ) : (
          <>
            {Object.keys(timelineContents).map(field => {
              const props = timelineContents[field]
              return <TimelineCard horizontalAlignment="right" {...props} />
            })}
          </>
        )}
      </TimelineWrapper>
    </Section>
  )
}

export default Timeline
