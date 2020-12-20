import dedent from 'dedent'

export const timelineContents = {
  satoshi: {
    title: 'Full Stack Engineer',
    logoUrl:
      'https://media-exp1.licdn.com/dms/image/C4D0BAQF4cfzHGE73Aw/company-logo_100_100/0/1551103827538?e=1616630400&v=beta&t=WMOX1cJlRHfMRiNMmoS__dMJCtxWza1Mn-jl_MSGTUY',
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
    logoUrl:
      'https://media-exp1.licdn.com/dms/image/C4D0BAQEk7-xydwYw0Q/company-logo_100_100/0/1542731176683?e=1616630400&v=beta&t=q2g2ApktzztynQrk5Etl57cAT5ov7N948IBFxujmncM',
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
    endDate: new Date(2019, 5, 1),
    description: dedent`Developed a frontend UI for interacting with spreadsheets in Bridging Software for HMRC’s Making Tax Digital API

    *Key technologies used: React, Nextjs, Nodejs, GraphQl*`,
  },
  freelance: {
    title: 'Freelance Web Developer',
    organisation: '',
    location: 'Lyon',
    startDate: new Date(2018, 8, 1),
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
    logoUrl:
      'https://media-exp1.licdn.com/dms/image/C560BAQERXPYjiI_hIg/company-logo_100_100/0/1519856616115?e=1616630400&v=beta&t=5i9jjY6IUw07RWm-orVIELoJneESCWA8TgI0EhR1zuc',
    organisation: 'École Normale Supérieure',
    location: 'Lyon',
    startDate: new Date(2017, 8, 1),
    endDate: new Date(2019, 5, 1),
    description: dedent`Lectured undergraduate and postgraduate students in English language and culture.
    `,
  },
  mcs: {
    title: 'French Teacher',
    logoUrl:
      'https://media-exp1.licdn.com/dms/image/C560BAQFTeiul3SlxUg/company-logo_100_100/0/1519862853702?e=1616630400&v=beta&t=mh9Dwc7WNe18Dt17VDfe3p7PAyG71xKtFuN236pQy8U',
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
    logoUrl:
      'https://media-exp1.licdn.com/dms/image/C560BAQGwPZs3spXFqw/company-logo_100_100/0/1539693367639?e=1616630400&v=beta&t=8HMG1n0FvGGdKT7RKpYfFpajGejymJ87TDpmvAhg2q4',
    organisation: 'University of Oxford',
    location: 'Oxford',
    startDate: new Date(2015, 8, 1),
    endDate: new Date(2016, 7, 30),
    description: dedent`Grade: Distinction`,
  },
  ba: {
    title: 'BA Modern Languages',
    logoUrl:
      'https://media-exp1.licdn.com/dms/image/C560BAQGwPZs3spXFqw/company-logo_100_100/0/1539693367639?e=1616630400&v=beta&t=8HMG1n0FvGGdKT7RKpYfFpajGejymJ87TDpmvAhg2q4',
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
