import { v4 as uuidv4 } from 'uuid'

export const speakifyProject = {
  id: uuidv4(),
  title: 'Speakify',
  description:
    'A personal text-to-speech project designed to help language educators with downloading pronunciations of words in a variety of languages.',
  techStack: {
    frontEnd: ['HTML', 'CSS3', 'React', 'papaParse', 'soundOfText API'],
  },
  githubLinks: [],
  liveSiteLink: '/speakify',
  images: [
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584228838/portfolio/Speakify/speakify_jpncux.png',
      caption: 'Homepage',
    },
  ],
}
