import dedent from 'dedent'

export const timelineContents = {
  satoshi: {
    title: 'Full Stack Engineer',
    organisation: 'Satoshi Systems Ltd',
    location: 'London',
    startDate: new Date(2020, 6, 1),
    endDate: new Date(2020, 12, 28),
    description: dedent`Lead developer on several Progressive Web App projects  
  
        * Designing and implementing micro-service architectures hosted in Azure Kubernetes clusters
        * Implementing CI/CD workflows in Azure Devops
        * Front-end development with React/Typescript
        * End to end testing with Cypress
        
        *Key technologies used: React, Typescript, Nodejs , Docker, Kubernetes*`,
  },
  defty: {
    title: 'Full Stack Engineer',
    organisation: 'Defty',
    location: 'London',
    startDate: new Date(2019, 7, 1),
    endDate: new Date(2020, 6, 1),
    description: dedent`Worked on a range of microservices for the company’s flagship website builder:
    * Contributed extensively to the shared components library
    * Created a custom form builder + form microservice
    * Architected and built the core features of the internal admin dashboard (creating marketing campaigns, notifications system, domain price setting, creation and application of discounts)
    * API implementation and testing with Express + data modelling with Postgres
    * Gained experience with CI/CD workflows using Circleci + visual regression testing with Percy
    
    *Key technologies used: Typescript, React, styled-components, Nodejs, PostgreSQL, AWS*`,
  },
  bearjs: {
    title: 'Web Developer (Intern)',
    organisation: 'BearJs',
    location: 'Remote',
    startDate: new Date(2019, 1, 1),
    endDate: new Date(2019, 6, 1),
    description: dedent`Developed a frontend UI for interacting with spreadsheets in Bridging Software for HMRC’s Making Tax Digital API

    *Key technologies used: React, Nextjs, Nodejs, GraphQl*`,
  },
  ens: {
    title: 'English Lecturer/Freelance Web Developer',
    organisation: 'École Normale Supérieure',
    location: 'Lyon',
    startDate: new Date(2017, 9, 1),
    endDate: new Date(2019, 6, 1),
    description: dedent`Lectured undergraduate and postgraduate students in English language and culture.
    
    Created several tools for the Department of Languages including:
    * A web app to manage student course selections and identify aberrant choices
    * A tool to automatically synthesize and download pronunciations for vocabulary lists to assist with teaching. 
    
    *Key technologies used: React, Redux, JQuery*
    
    Worked on projects for other clients during this time, such as **Jinwen University, Taipei, Taiwan**
    * Created a full-stack internship platform allowing university staff to publish internship opportunities, upload interview outcomes and calculate final internship placements
    * Wrote a sorting algorithm to match student preferences to company shortlists
    
    *Key technologies used: React, Redux, Nodejs, Mongoose, MongoDb*`,
  },
}
