import type {
  NavLink,
  EducationItem,
  ExperienceItem,
  Project,
  SkillCategory,
  ContactInfo,
} from '../types';

// ─── Navigation ────────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'About',      href: '#about' },
  { label: 'Education',  href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

// ─── Personal Info ─────────────────────────────────────────────────────────────
export const personalInfo = {
  name:        'Shailesh Bargal',
  title:       'Aspiring Software Engineer',
  subtitle:    "I'm a Computer Science and Engineering graduate currently pursuing PGCP-AC (CDAC) at SunBeam, Pune. I have hands-on experience with Java, Spring Boot, React.js, and REST API development. I'm actively seeking entry-level opportunities as a Java Developer, Spring Boot Developer, or Full Stack Developer, where I can apply my technical skills, contribute to real-world projects, and grow professionally as a software developer.",
  location:    'Pune, Maharashtra, India',
  github:      'https://github.com/ShaileshBargal',
  linkedin:    'https://www.linkedin.com/in/shailesh-bargal-45b359270',
  email:       'shaileshbargal@gmail.com',
  phone:       '+91 8767166538',
  /**
   * Place your resume PDF in /public/resume.pdf and set this to '/resume.pdf'.
   * Leave as empty string to hide the Download Resume button.
   */
  resumeUrl:   '',          // e.g. '/resume.pdf'
} as const;

// ─── About ─────────────────────────────────────────────────────────────────────
export const aboutParagraphs: string[] = [
  "I am an aspiring software developer with a strong foundation in computer science. My journey in tech is driven by a constant curiosity to learn, solve problems, and build applications that are functional and user-friendly.",
  "Through my academic coursework, internship experience, and ongoing PGCP-AC (CDAC) training, I have developed a strong, practical foundation in full-stack software development. Whether I am implementing robust RESTful APIs with Spring Boot or building responsive user interfaces with React, I am committed to writing clean, maintainable code and continuously advancing my technical expertise."
];

export const aboutHighlights = [
  { label: 'Backend Development', desc: 'Developing APIs and server logic with Java & Spring Boot.' },
  { label: 'Full-Stack Fundamentals', desc: 'Connecting server and client using React, Node, and databases.' },
  { label: 'Clean Code Focus',    desc: 'Practicing maintainable, readable, and well-structured coding.' },
  { label: 'Continuous Learner',   desc: 'Eager to adapt to new tools, frameworks, and industry best practices.' },
];

// ─── Education ─────────────────────────────────────────────────────────────────
export const education: EducationItem[] = [
  {
    degree:       'Post Graduate Certificate in Advanced Computing (PGCP-AC)',
    institution:  "SunBeam Institute of Information Technology",
    location:     'Pune, Maharashtra',
    period:       'August 2026 – Present',
    score:        'Currently Pursuing',
    scoreLabel:   'Status',
    badge:        'pursuing',
  },
  {
    degree:       'Bachelor of Technology in Computer Science and Engineering',
    institution:  "MGM's College of Engineering",
    location:     'Nanded, Maharashtra',
    period:       'Nov 2022 – June 2026',
    score:        '7.42',
    scoreLabel:   'CGPA',
    badge:        'completed',
  },
  {
    degree:       'Higher Secondary Certificate (12th)',
    institution:  'Jawaharlal Nehru Secondary and Higher Secondary School',
    period:       'March 2021 – March 2022',
    score:        '88.67%',
    scoreLabel:   'Percentage',
    badge:        'completed',
  },
  {
    degree:       'Secondary School Certificate (10th)',
    institution:  'Hu. Bahirji Smarak Vidyalay',
    location:     'Basmath',
    period:       'March 2019 – March 2020',
    score:        '93.40%',
    scoreLabel:   'Percentage',
    badge:        'completed',
  },
];

// ─── Experience ────────────────────────────────────────────────────────────────
export const experience: ExperienceItem[] = [
  {
    role:         'Java Development Intern',
    company:      'Infosys Springboard',
    period:       'February 2026 – March 2026',
    project:      'Digital Café Ordering and Operation Platform',
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Vanilla CSS', 'REST APIs'],
    description: [
      'Developed the Digital Café Ordering and Operation Platform as a full-stack web application during the internship programme.',
      'Designed and implemented structured RESTful APIs using Java and Spring Boot for handling cafe menu items, ordering workflows, and table management.',
      'Configured MySQL relational database models and integrated object-relational mapping for reliable transaction handling and data persistence.',
      'Created responsive, user-friendly frontend views using React.js and Vanilla CSS for customers and café staff.',
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id:           'cafe',
    title:        'Digital Café Ordering and Operation Platform',
    description:  'A full-stack digital café ordering and operations web application developed during the Infosys Springboard internship, featuring RESTful APIs and interactive ordering interfaces.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Vanilla CSS', 'REST APIs'],
    githubUrl:    'https://github.com/ShaileshBargal/Digital-Cafe-Ordering-and-Operation-Platform',
    demoUrl:      undefined,
    internship:   true,
  },
  {
    id:           'banking',
    title:        'Online Banking Management System',
    description:  'A full-stack banking management web application designed to handle account management and core banking operations through a robust Java and Spring Boot backend with a modern React.js interface.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Tailwind CSS'],
    githubUrl:    undefined,   // add your GitHub repo URL here when available
    demoUrl:      undefined,
  },
  {
    id:           'shopsphere',
    title:        'ShopSphere',
    description:  'A full-stack e-commerce web application built with the MERN stack, providing a complete online shopping experience with product listing, user authentication, and cart management.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    githubUrl:    undefined,
    demoUrl:      undefined,
  },
];

// ─── Technical Skills ──────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages for object-oriented, scripting, and typed development.',
    iconName: 'Code2',
    skills:   ['Java', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend Development',
    description: 'Enterprise frameworks, server architectures, and API services.',
    iconName: 'Server',
    skills:   ['Spring Boot', 'Hibernate', 'REST APIs', 'Microservices', 'Node.js', 'Express.js'],
  },
  {
    category: 'Frontend Development',
    description: 'Responsive user interfaces, modern component design, and styling.',
    iconName: 'Layout',
    skills:   ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Databases',
    description: 'Relational and NoSQL databases for data modeling and persistence.',
    iconName: 'Database',
    skills:   ['MySQL', 'MongoDB'],
  },
  {
    category: 'Core Computer Science',
    description: 'Fundamental engineering principles, algorithms, and system concepts.',
    iconName: 'Cpu',
    skills:   ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    category: 'Developer Tools',
    description: 'Version control systems, API testing utilities, and IDE environments.',
    iconName: 'Wrench',
    skills:   ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code'],
  },
];

// ─── Contact ───────────────────────────────────────────────────────────────────
export const contactInfo: ContactInfo = {
  phone:    '+91 8767166538',
  email:    'shaileshbargal@gmail.com',
  github:   'https://github.com/ShaileshBargal',
  linkedin: 'https://www.linkedin.com/in/shailesh-bargal-45b359270',
  location: 'Pune, Maharashtra, India',
};
