import { v4 as uuidv4 } from 'uuid'

export const lingualinkProject = {
  id: uuidv4(),
  title: 'Lingualink',
  description:
    'A digital classroom connecting language teachers and students. Key features include class and homework creation, detailed student progress monitoring, and analysis of areas for improvement. Includes premium subscription option.',
  techStack: {
    frontEnd: 'React, Next.js, GraphQL (Apollo Client), Stripe',
    backEnd: 'Node.js, Apollo-Server, Mongodb (with Mongoose)',
  },
  githubLinks: [],
  liveSiteLink: 'https://lingualink.uk/',
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
        'https://res.cloudinary.com/dhccfu1un/image/upload/c_scale,w_1300/v1590749183/Lingualink/Screenshot_2020-05-29_at_11.45.17_jrpshx.png',
      caption: 'Exercise in progress',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-SessionStats-min_ojbpgb.png',
      caption: 'Session Feedback',
    },
  ],
}
