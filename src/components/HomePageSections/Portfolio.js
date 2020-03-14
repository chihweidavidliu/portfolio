import React from 'react'
import PortfolioGallery from '../PortfolioGallery'

import thumb01 from '../../assets/images/thumbs/01.jpg'
import thumb03 from '../../assets/images/thumbs/03.jpg'
import thumb04 from '../../assets/images/thumbs/04.jpg'

import full01 from '../../assets/images/fulls/01.jpg'
import full03 from '../../assets/images/fulls/03.jpg'
import full04 from '../../assets/images/fulls/04.jpg'

const PROJECTS = [
  {
    id: '1',

    images: [
      {
        source:
          'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-StudentDashboard-min-1-1024x590_reypbb.png',
        caption: 'Student Dashboard',
      },
      {
        source:
          'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-TeacherDashboard-min_wi3zg8.png',
        caption: 'Teacher Dashboard',
      },
      {
        source:
          'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-CreateExercise-min-1024x472_htkhzs.png',
        caption: 'Exercise Creation',
      },
      {
        source:
          'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-SessionStats-min_ojbpgb.png',
        caption: 'Session Feedback',
      },
    ],
    title: 'Lingualink',
    description:
      'A digital classroom connecting language teachers and students. Key features include class and homework creation, detailed student progress monitoring, and analysis of areas for improvement. Includes premium subscription option.',
  },
  {
    id: '2',
    images: [
      { source: full01, thumbnail: thumb01, caption: '', description: '' },
    ],
    title: 'TaskMaster',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    images: [
      { source: full03, thumbnail: thumb03, caption: '', description: '' },
    ],
    title: 'MyInternship',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    images: [
      { source: full04, thumbnail: thumb04, caption: '', description: '' },
    ],
    title: 'Speakify',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

const Portfolio = () => (
  <section id="two">
    <h2>Portfolio</h2>
    <PortfolioGallery projects={PROJECTS} />
  </section>
)

export default Portfolio
