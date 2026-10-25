import { PortfolioContent } from '../models/portfolio.model';

export const portfolioContent: PortfolioContent = {
  profile: {
    name: 'Ganesh Gathiya',
    title: 'Full Stack Java Developer',
    experience: '4.7 years at TCS',
    summary: 'I build reliable enterprise applications across backend modernization, batch processing, APIs, and cloud-native systems.',
    focusAreas: ['Java', 'Spring Boot', 'Spring Batch', 'REST APIs', 'Microservices', 'Angular'],
    cloudPlatforms: ['AWS', 'GCP'],
    linkedInUrl: 'https://www.linkedin.com/in/ganeshg05/',
  },
  highlights: [
    { metric: 'Java 8 → 21', title: 'Backend modernization', description: 'Led the modernization of a critical Spring Batch application, including a Spring Framework upgrade for a more scalable and maintainable foundation.' },
    { metric: '25%', title: 'Faster delivery workflow', description: 'Reduced build and deployment time by 25% through Jenkins, Docker, and build-workflow improvements with CI/CD and DevOps teams.' },
    { metric: '30%', title: 'Higher transaction throughput', description: 'Improved transaction throughput by 30% for Spring Boot microservices supporting high-volume monetary and non-monetary transactions on an AWS-hosted platform.' },
  ],
  experience: {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Full Stack Java Developer',
    dates: 'February 2022 – October 2026',
    tenure: '4.7 years at TCS',
    summary: 'Contributed to enterprise application modernization, high-volume transaction services, batch processing, and reliable production delivery.',
    responsibilities: [
      { title: 'Modernization', description: 'Upgraded a critical Spring Batch application from Java 8 to Java 21 alongside a Spring Framework upgrade.' },
      { title: 'Batch and API delivery', description: 'Built file-ingestion, transformation, validation, XML-generation, and e-invoicing API workflows with response persistence.' },
      { title: 'Cloud services and performance', description: 'Developed AWS-hosted transaction microservices and supported SQL and backend performance improvements.' },
      { title: 'Reliable delivery', description: 'Worked with CI/CD and DevOps teams, monitored ECS and CloudWatch, supported incident root-cause analysis, and contributed through Agile planning and code reviews.' },
    ],
  },
  initiatives: [
    {
      title: 'Java 8 to Java 21 modernization',
      context: 'A critical Spring Batch application required a modernized backend foundation.',
      contribution: 'Led the Java upgrade and Spring Framework upgrade, with performance benchmarking, regression testing, and compatibility validation.',
      technologies: ['Java 21', 'Spring Framework', 'Spring Batch'],
      outcome: 'Supported zero-downtime deployments and backward compatibility across production releases.',
    },
    {
      title: 'Spring Batch file-to-XML processing',
      context: 'Enterprise batch workflows required structured XML payloads from tilde-delimited input files.',
      contribution: 'Designed processing pipelines for file ingestion, business transformations, validation, mapping, and XML generation.',
      technologies: ['Java', 'Spring Batch', 'XML'],
    },
    {
      title: 'Avalara e-invoicing integration',
      context: 'Batch workflows required automated transmission to an external e-invoicing API.',
      contribution: 'Integrated invoice transmission, response handling, and persistence of transaction results for audit and compliance tracking.',
      technologies: ['Spring Batch', 'REST APIs', 'SQL'],
    },
    {
      title: 'Microservices performance and throughput',
      context: 'An AWS-hosted enterprise platform supported high-volume monetary and non-monetary transactions.',
      contribution: 'Developed Spring Boot microservices and contributed to backend performance improvements.',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
      outcome: 'Improved overall transaction throughput by 30%.',
    },
  ],
  skills: [
    { title: 'Backend', skills: ['Java', 'Spring Boot', 'Spring Framework', 'Spring Batch', 'Microservices', 'REST APIs'] },
    { title: 'Frontend', skills: ['Angular', 'HTML', 'CSS', 'REST integration'] },
    { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'SQL', 'SQL optimization'] },
    { title: 'Cloud & DevOps', skills: ['AWS ECS', 'AWS Batch', 'Amazon S3', 'CloudWatch', 'GCP Compute Engine', 'Cloud Storage', 'VPC', 'Jenkins', 'Docker', 'CI/CD'] },
    { title: 'Tools', skills: ['Git', 'Bitbucket', 'Postman', 'Visual Studio Code', 'Eclipse IDE', 'JIRA', 'ServiceNow (Basics)', 'Amazon Q'] },
  ],
  contact: {
    email: 'ganeshgathiya704@gmail.com',
    githubUrl: 'https://github.com/GaneshG704',
    instagramUrl: 'https://www.instagram.com/er_ganesh05/',
    phone: undefined,
  },
  enquiryForm: {
    enabled: true,
    heading: 'Start a professional conversation.',
    description: 'Use this form for career opportunities, client projects, collaborations, or other relevant enquiries.',
    submitLabel: 'Send enquiry',
    externalFormCtaLabel: 'Open enquiry form',
    enquiryTypes: [
      { value: 'career', label: 'Job / Career' },
      { value: 'freelance', label: 'Freelance / Client project' },
      { value: 'collaboration', label: 'Collaboration' },
      { value: 'other', label: 'Other' },
    ],
    privacyNotice: 'When you submit this form, the information you provide will be used to respond to your enquiry. Please avoid sharing sensitive personal information.',
    successMessage: 'Thank you. Your enquiry has been sent.',
    errorMessage: 'Your enquiry could not be sent. Please use an available contact channel instead.',
    integration: {
      provider: 'google-forms',
      formUrl: 'https://forms.gle/bNj3RrzQ47yjffPh7',
    },
  },
};
