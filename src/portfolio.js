const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Full Stack Developer',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'ARAVIND OSURI',
  role: 'Full Stack Engineer',
  description:
    "Professional Java Full Stack Developer with 3+ years of experience in designing, developing, and deploying scalable web applications. Proficient in backend technologies including Java, Spring Boot, and Hibernate, and skilled in frontend frameworks such as React.js and Angular. Experienced in implementing RESTful APIs and optimizing application performance for responsive user experiences in agile environments.",
  resume: 'https://drive.google.com/file/d/10E1gMLcypfGZjzVhacl1W2EIWvEdr1kQ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/aravind-osuri/',
    github: 'https://github.com/Aravind-011',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Student Placement Prediction Using ML',
    description:
      'Developed a predictive analytics tool using a Random Forest Classifier which processed over 1,000 data points from student profiles; improved the accuracy of role suggestion outcomes by identifying key contributing factors; conducted exploratory data analysis (EDA) and feature engineering using Python libraries like pandas, NumPy, and Matplotlib, resulting in a highly accurate and reliable model.',
    stack: ['Python', 'MSSQL', 'React'],
    sourceCode: 'https://github.com/Aravind-011/Student-Placement-Prediction-Using-Machine-Learning.git',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Ecommerce Full Stack Web App',
    description:
      'Created a feature-rich e-commerce solution using Java for server processes alongside Spring Boot architecture; integrated interactive web elements in ReactJS allowing users to perform essential CRUD actions effortlessly across 50+ products; integrated a database for data storage and utilized RESTful APIs for seamless communication between the frontend and backend.',
    stack: ['Java', 'SpringBoot', 'React'],
    sourceCode: 'https://github.com/Aravind-011/Ecommerce-Web-App.git',
    // livePreview: 'https://github.com',
  },
  {
    name: 'My Restaurant UI',
    description:
      'Designed and implemented the user interface (UI) for an online restaurant application using ReactJS; utilized React Router for efficient navigation and dynamic rendering of components; implemented reusable React components to enhance code maintainability and streamline the development process aslo Integrated React Router to manage application routes and enable seamless navigation.',
    stack: ['React', 'BootStrap', 'CSS'],
    sourceCode: 'https://github.com/aravindosuri/My-Restaurant',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'XML',
  'Git',
  'CI/CD',
  'JQuery',
  'Tailwind',
  'BootStrap',
  'Spark',
  'MSSQL',
  'Mysql',
  "AWS",
  "Azure"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aravindosuri2000@gmail.com',
}

export { header, about, projects, skills, contact }
