import dedent from 'dedent'

export const timelineContents = {
  sourceful: {
    title: 'Software Engineer',
    logoUrl: 'https://res.cloudinary.com/dhccfu1un/image/upload/v1617309220/portfolio/logos/sourceful_dxoy5h.jpg',
    organisation: 'Sourceful',
    location: 'London',
    startDate: new Date(2021, 0, 4),
    endDate: new Date(),
    description: dedent``,
  },
  satoshi: {
    title: 'Full Stack Engineer',
    logoUrl: 'https://res.cloudinary.com/dhccfu1un/image/upload/v1617309220/portfolio/logos/satoshi_kzbwdm.png',
    organisation: 'Satoshi Systems Ltd',
    location: 'London',
    startDate: new Date(2020, 5, 1),
    endDate: new Date(2020, 11, 31), // MONTH IS 0 INDEXED
    description: dedent`Lead developer on several Progressive Web App projects  
  
        * Designing and implementing micro-service architectures hosted in Azure Kubernetes clusters
        * Implementing CI/CD workflows in Azure Devops
        * Front-end development with React/Typescript
        * End to end testing with Cypress
        
        *Key technologies used: React, Typescript, Nodejs , Docker, Kubernetes*`,
  },
  defty: {
    title: 'Full Stack Engineer',
    logoUrl: 'https://res.cloudinary.com/dhccfu1un/image/upload/v1617309220/portfolio/logos/defty_anlttj.png',
    organisation: 'Defty',
    location: 'London',
    startDate: new Date(2019, 6, 1),
    endDate: new Date(2020, 5, 30),
    description: dedent`Worked on a range of microservices for the company’s flagship website builder:
    * Contributed extensively to the shared components library
    * Created a custom form builder + form microservice
    * Architected and built the core features of the internal admin dashboard (creating marketing campaigns, notifications system, domain price setting, creation and application of discounts)
    * API implementation and testing with Express + data modelling with Postgres
    * Gained experience with CI/CD workflows using Circleci + visual regression testing with Percy
    
    *Key technologies used: Typescript, React, styled-components, Nodejs, PostgreSQL, AWS*`,
  },
  bearjs: {
    title: 'Web Developer',
    organisation: 'BearJs',
    location: 'Remote',
    startDate: new Date(2019, 0, 1),
    endDate: new Date(2019, 6, 31),
    description: dedent`Developed a frontend UI for interacting with spreadsheets in Bridging Software for HMRC’s Making Tax Digital API

    *Key technologies used: React, Nextjs, Nodejs, GraphQl*`,
  },
  freelance: {
    title: 'Freelance Web Developer',
    organisation: '',
    location: 'Lyon',
    startDate: new Date(2018, 4, 1),
    endDate: new Date(2018, 11, 1),
    description: dedent`Worked on several freelance projects.
    
    **Ecole Normale Supérieure, Lyon, France**  
    * Created a web app to manage student course selections and identify aberrant choices
    * Created a tool to automatically synthesize and download pronunciations for vocabulary lists to assist with teaching. 
    
    *Key technologies used: React, Redux, JQuery*

    **Jinwen University, Taipei, Taiwan**  
    * Created a full-stack internship platform allowing university staff to publish internship opportunities, upload interview outcomes and calculate final internship placements
    * Wrote a sorting algorithm to match student preferences to company shortlists
    
    *Key technologies used: React, Redux, Nodejs, Mongoose, MongoDb*`,
  },
  ens: {
    title: 'English Lecturer',
    logoUrl: 'https://res.cloudinary.com/dhccfu1un/image/upload/v1617309220/portfolio/logos/ens_vbk3pc.png',
    organisation: 'École Normale Supérieure',
    location: 'Lyon',
    startDate: new Date(2017, 8, 1),
    endDate: new Date(2019, 6, 31),
    description: dedent`Lectured undergraduate and postgraduate students in English language and culture.
    `,
  },
  mcs: {
    title: 'French Teacher',
    logoUrl: 'https://res.cloudinary.com/dhccfu1un/image/upload/v1617309320/portfolio/logos/mcs_r85lgb.png',
    organisation: 'Magdalen College School',
    location: 'Oxford',
    startDate: new Date(2016, 8, 1),
    endDate: new Date(2017, 7, 31),
    description: dedent`Taught iGCSE and A level French at one of the UK's leading private schools.  
    * Taught extension classes on French Literature and Philosophy.  
    * Responsible for preparing MFL Oxbridge candidates for exams/interviews.  
    * Supervised 'Waynflete Projects' (L6th Extended essays).  
    * Supervised Outreach Literacy Scheme with Tyndale Primary School.`,
  },
  mst: {
    title: 'MSt French Literature',
    logoUrl: 'https://res.cloudinary.com/dhccfu1un/image/upload/v1617309220/portfolio/logos/oxford_wveieo.png',
    organisation: 'University of Oxford',
    location: 'Oxford',
    startDate: new Date(2015, 8, 1),
    endDate: new Date(2016, 7, 30),
    description: dedent`Grade: Distinction`,
  },
  ba: {
    title: 'BA Modern Languages',
    logoUrl: 'https://res.cloudinary.com/dhccfu1un/image/upload/v1617309220/portfolio/logos/oxford_wveieo.png',
    organisation: 'University of Oxford',
    location: 'Oxford',
    startDate: new Date(2011, 8, 1),
    endDate: new Date(2015, 7, 30),
    description: dedent`Grade: Congratulatory First Class Honours
    * Highest overall mark in the university for French
    * Distinction in Spoken French
    * Awarded the RA Knox Prize for Outstanding Firsts`,
  },
}
