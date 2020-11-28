import { v4 as uuidv4 } from 'uuid'

export const decisionMakerProject = {
  id: uuidv4(),
  title: 'Decision Maker',
  description: `Struggling with a tricky decision? Use this tool to set up a values-based decision tree to help decide!`,
  techStack: {
    frontEnd: ['React', 'Typescript', 'Styled Components', 'React Flow'],
  },
  githubLinks: [
    {
      url: 'https://github.com/chihweidavidliu/sourceful-test',
      label: 'Source Code',
    },
  ],
  liveSiteLink: 'https://sourceful-decision-maker.netlify.app/',
  images: [
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1606587655/Sourceful%20Decision%20Maker/decision-tool_dqehpd.png',
      caption: 'Choosing between cars',
    },
  ],
}
