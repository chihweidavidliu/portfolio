import { v4 as uuidv4 } from 'uuid'

export const meteorsProject = {
  id: uuidv4(),
  title: 'Meteors',
  description:
    'A game to help make learning more fun. Users input flash cards to be used as part of the game. Includes local storage saved lists and persisted learning stats',
  techStack: {
    frontEnd: ['React', 'Typescript', 'Styled Components'],
  },
  githubLinks: [
    {
      url: 'https://github.com/chihweidavidliu/meteors',
      label: 'Source Code',
    },
  ],
  liveSiteLink: 'https://meteors.netlify.app/',
  images: [
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1591204018/Meteors/Screenshot_2020-06-03_at_18.06.30_n5qgz4.png',
      caption: 'Home',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1591012741/Meteors/Screenshot_2020-06-01_at_12.40.31_tw8evj.png',
      caption: 'Starting Screen',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1591012741/Meteors/Screenshot_2020-06-01_at_12.40.45_wjdkeh.png',
      caption: 'Game in progress',
    },
  ],
}
