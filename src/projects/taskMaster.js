import { v4 as uuidv4 } from 'uuid'

export const taskMasterProject = {
  id: uuidv4(),
  title: 'TaskMaster',
  description:
    'A fully-featured, full-stack todo app. Key features include:  Google OAuth login, custom projects, duedates, sortable and editable lists, pdf export functionality.',
  techStack: {
    frontEnd: 'React, Redux',
    backEnd: 'Node.js, Express, Oauth2, Mongodb (with Mongoose)',
  },
  githubLinks: [
    {
      url: 'https://github.com/chihweidavidliu/taskmaster-client',
      label: 'Source Code (Client)',
    },
    {
      url: 'https://github.com/chihweidavidliu/taskmaster-server',
      label: 'Source Code (Server)',
    },
  ],
  liveSiteLink: 'https://lingualink.uk/',
  images: [
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202956/portfolio/taskmaster/taskmaster-dashboard_dgd0do.png',
      caption: 'Dashboard',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202958/portfolio/taskmaster/taskmaster-homepage_vjlt81.png',
      caption: 'Homepage',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202956/portfolio/taskmaster/taskmaster-edit-todo_x04lpk.png',
      caption: 'Todo Editing Menu',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202956/portfolio/taskmaster/taskmaster-edit-text_fun9vp.png',
      caption: 'Text editing',
    },
  ],
}
