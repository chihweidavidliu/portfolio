import React from 'react'
import {
  faDesktop,
  faDatabase,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'
import SkillCard from '../SkillCard'
import CardGrid from '../CardGrid'
import SectionHeader from '../typography/SectionHeader'
import Section from '../Section'

const frontEndCategories = [
  {
    name: 'Fundamentals',
    content: ['HTML', 'CSS', 'Javacript', 'Typescript'],
  },
  {
    name: 'Libraries/Frameworks',
    content: [
      'React',
      'Redux',
      'Nextjs',
      'Apollo Client',
      'GatsbyJS',
      'Styled Components',
      'Enzyme',
    ],
  },
]

const backendCategories = [
  {
    name: 'Servers',
    content: ['Node', 'Express'],
  },
  {
    name: 'Databases',
    content: [
      'MongoDB',
      'Mongoose',
      'Postgres',
      'MySQL',
      'MS SQL Server',
      'SQL',
    ],
  },
  {
    name: 'Authentication',
    content: ['Cookies', 'JWT', 'OAuth2', 'OpenId Connect'],
  },
  {
    name: 'APIs',
    content: ['REST', 'GraphQL'],
  },
]
const otherCategories = [
  {
    name: 'Testing',
    content: ['Jest', 'Enzyme', 'Percy (Visual Regression)', 'Cypress (E2E)'],
  },
  {
    name: 'Cloud',
    content: ['AWS', 'Azure Cloud Services'],
  },
  {
    name: 'Containers',
    content: ['Docker', 'Kubernetes', 'Azure Container Registry'],
  },
  {
    name: 'CI/CD',
    content: ['CircleCi', 'GitHub Actions', 'Azure Devops'],
  },
]

const Skills = () => (
  <Section id="skills">
    <SectionHeader>Skills</SectionHeader>
    <CardGrid>
      <SkillCard
        title="Front End"
        icon={faDesktop}
        categories={frontEndCategories}
      />
      <SkillCard
        title="Back End"
        icon={faDatabase}
        categories={backendCategories}
      />
      <SkillCard
        title="Other"
        icon={faPlusCircle}
        categories={otherCategories}
      />
    </CardGrid>
  </Section>
)

export default Skills
