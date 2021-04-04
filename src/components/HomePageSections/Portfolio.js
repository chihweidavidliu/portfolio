import React from 'react'
import PortfolioGallery from '../PortfolioGallery'

import { lingualinkProject } from '../../projects/lingualink'
import { taskMasterProject } from '../../projects/taskMaster'
import { myInternshipProject } from '../../projects/myInternship'
import SectionHeader from '../typography/SectionHeader'
import Section from '../Section'
import { snakeProject } from '../../projects/snake'
import { meteorsProject } from '../../projects/meteors'
import { decisionMakerProject } from '../../projects/decisionMaker'
import { notemateProject } from '../../projects/notemate'
import { speakifyProject } from '../../projects/speakify'

const PROJECTS = [
  notemateProject,
  decisionMakerProject,
  meteorsProject,
  lingualinkProject,
  taskMasterProject,
  myInternshipProject,
  snakeProject,
  speakifyProject,
]

const Portfolio = () => (
  <Section id="two">
    <SectionHeader>Portfolio</SectionHeader>
    <PortfolioGallery projects={PROJECTS} />
  </Section>
)

export default Portfolio
