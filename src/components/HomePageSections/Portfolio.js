import React from 'react'
import PortfolioGallery from '../PortfolioGallery'

import { lingualinkProject } from '../../projects/lingualink'
import { taskMasterProject } from '../../projects/taskMaster'
import { myInternshipProject } from '../../projects/myInternship'
import { speakifyProject } from '../../projects/speakify'
import SectionHeader from '../typography/SectionHeader'

const PROJECTS = [
  lingualinkProject,
  taskMasterProject,
  myInternshipProject,
  speakifyProject,
]

const Portfolio = () => (
  <section id="two">
    <SectionHeader>Portfolio</SectionHeader>
    <PortfolioGallery projects={PROJECTS} />
  </section>
)

export default Portfolio
