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
            <TimelinePoint date="Present">
              <TimelineCard
                horizontalAlignment="right"
                verticalOffset="-170px"
                branchHeights={{ top: 70, bottom: 75 }}
                {...timelineContents.sourceful}
              />
            </TimelinePoint>
            <LineSection height="200px" />
            <TimelinePoint date="2021"></TimelinePoint>
            <LineSection />
            <TimelinePoint date="2020">
              <TimelineCard
                horizontalAlignment="left"
                verticalOffset="134px"
                branchHeights={{ top: 74, bottom: 76 }}
                {...timelineContents.satoshi}
              />
            </TimelinePoint>
            <LineSection />
            <TimelinePoint date="2019">
              <TimelineCard
                horizontalAlignment="right"
                verticalOffset="220px"
                branchHeights={{ top: 118, bottom: 115 }}
                {...timelineContents.defty}
              />
              <TimelineCard
                horizontalAlignment="left"
                verticalOffset="23px"
                branchHeights={{ top: 80, bottom: 65 }}
                {...timelineContents.bearjs}
              />
            </TimelinePoint>
            <LineSection />
            <TimelinePoint date="2018">
              <TimelineCard
                horizontalAlignment="right"
                verticalOffset="25px"
                branchHeights={{ top: 80, bottom: 55 }}
                {...timelineContents.freelance}
              />
            </TimelinePoint>
            <LineSection />
            <TimelinePoint date="2017">
              <TimelineCard
                horizontalAlignment="left"
                verticalOffset="530px"
                branchHeights={{ top: 364, bottom: 210 }}
                {...timelineContents.ens}
              />
            </TimelinePoint>
            <LineSection height="70px" />
            <TimelinePoint date="2016">
              <TimelineCard
                horizontalAlignment="right"
                verticalOffset="75px"
                branchHeights={{ top: 103, bottom: 103 }}
                {...timelineContents.mcs}
              />
            </TimelinePoint>
            <LineSection height="70px" />
            <TimelinePoint date="2015">
              <TimelineCard
                horizontalAlignment="left"
                verticalOffset="70px"
                branchHeights={{ top: 40, bottom: 43 }}
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
                verticalOffset="210px"
                branchHeights={{ top: 165, bottom: 165 }}
                {...timelineContents.ba}
              />
            </TimelinePoint>
          </>
        ) : (
          <>
            {Object.keys(timelineContents).map((field, index) => {
              const props = timelineContents[field]
              return (
                <TimelineCard
                  key={index}
                  horizontalAlignment="right"
                  {...props}
                />
              )
            })}
          </>
        )}
      </TimelineWrapper>
    </Section>
  )
}

export default Timeline
