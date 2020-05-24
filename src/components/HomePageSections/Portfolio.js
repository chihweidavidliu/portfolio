import React from 'react'
import PortfolioGallery from '../PortfolioGallery'

import { lingualinkProject } from '../../projects/lingualink'
import { taskMasterProject } from '../../projects/taskMaster'
import { myInternshipProject } from '../../projects/myInternship'
import { speakifyProject } from '../../projects/speakify'
import SectionHeader from '../typography/SectionHeader'
import Section from '../Section'
import { snakeProject } from '../../projects/snake'

const PROJECTS = [
  lingualinkProject,
  taskMasterProject,
  myInternshipProject,
  speakifyProject,
  snakeProject,
]

const Portfolio = () => (
  <Section id="two">
    <SectionHeader>Portfolio</SectionHeader>
    <PortfolioGallery projects={PROJECTS} />
  </Section>
)

export default Portfolio
