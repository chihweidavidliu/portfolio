import React from 'react'
import {
  faDesktop,
  faDatabase,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'
import SkillCard from '../SkillCard'
import CardGrid from '../CardGrid'
import SectionHeader from '../typography/SectionHeader'

const frontEndCategories = [
  {
    name: 'Fundamentals',
    content: 'HTML, CSS, Javascript (+ Typescript)',
  },
  {
    name: 'Libraries/Frameworks',
    content: 'React, Redux, Nextjs, Apollo Client, GatsbyJS',
  },
]

const backendCategories = [
  {
    name: 'Servers',
    content: 'Node, Express',
  },
  {
    name: 'Databases',
    content: 'MongoDB, Mongoose, Postgres, SQL, Prisma',
  },
  {
    name: 'Authentication',
    content: 'Cookies, JWT, OAuth2',
  },
  {
    name: 'APIs',
    content: 'Rest, GraphQL',
  },
]
const otherCategories = [
  {
    name: 'Testing',
    content: 'Jest, Enzyme, Percy (Visual Regression)',
  },
  {
    name: 'Deployment',
    content:
      'AWS (S3, Elastic Beanstalk, Route53, CloudFront), Heroku, Netlify',
  },
  {
    name: 'CI/CD',
    content: 'CircleCi',
  },
]

const Skills = () => (
  <section>
    <header>
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
    </header>
  </section>
)

export default Skills
