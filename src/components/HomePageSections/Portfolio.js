import React from 'react'
import PortfolioGallery from '../PortfolioGallery'

import { lingualinkProject } from '../../projects/lingualink'
import { taskMasterProject } from '../../projects/taskMaster'
import { myInternshipProject } from '../../projects/myInternship'
import { speakifyProject } from '../../projects/speakify'

const PROJECTS = [
  lingualinkProject,
  taskMasterProject,
  myInternshipProject,
  speakifyProject,
]

const Portfolio = () => (
  <section id="two">
    <h2>Portfolio</h2>
    <PortfolioGallery projects={PROJECTS} />
  </section>
)

export default Portfolio
