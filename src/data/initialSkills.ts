import type { Skill } from '../types';

export const initialSkills: Skill[] = [
  // 1. Frontend
  {
    id: 'skill-fe-1',
    name: 'HTML',
    category: 'Frontend',
    level: 'Advanced',
    iconKey: 'Code',
    description: 'Semantic markup, accessibility standards (WCAG), SEO metadata, and clean DOM hierarchy.'
  },
  {
    id: 'skill-fe-2',
    name: 'CSS',
    category: 'Frontend',
    level: 'Advanced',
    iconKey: 'Palette',
    description: 'Modern CSS3, responsive Flexbox/Grid layouts, custom properties, and smooth UI transitions.'
  },
  {
    id: 'skill-fe-3',
    name: 'JavaScript',
    category: 'Frontend',
    level: 'Proficient',
    iconKey: 'FileCode',
    description: 'Modern ES6+ syntax, asynchronous programming, DOM APIs, event handling, and clean code principles.'
  },
  {
    id: 'skill-fe-4',
    name: 'React',
    category: 'Frontend',
    level: 'Proficient',
    iconKey: 'Atom',
    description: 'Component architecture, custom hooks, state management, SPA routing, and performance optimization.'
  },
  {
    id: 'skill-fe-5',
    name: 'Next.js',
    category: 'Frontend',
    level: 'Intermediate',
    iconKey: 'Layers',
    description: 'Server and client components, file-based routing, SEO best practices, and fast static generation.'
  },
  {
    id: 'skill-fe-6',
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Advanced',
    iconKey: 'Wind',
    description: 'Utility-first responsive layouts, design token customization, clean styling, and dark mode handling.'
  },

  // 2. Development
  {
    id: 'skill-dev-1',
    name: 'Git',
    category: 'Development',
    level: 'Proficient',
    iconKey: 'GitBranch',
    description: 'Version control workflows, atomic commits, branching strategies, and merge resolution.'
  },
  {
    id: 'skill-dev-2',
    name: 'GitHub',
    category: 'Development',
    level: 'Proficient',
    iconKey: 'Github',
    description: 'Repository management, open-source collaboration, pull request reviews, and CI/CD basics.'
  },
  {
    id: 'skill-dev-3',
    name: 'REST APIs',
    category: 'Development',
    level: 'Proficient',
    iconKey: 'Network',
    description: 'Seamless frontend client integration, async data fetching, error handling, and payload parsing.'
  },
  {
    id: 'skill-dev-4',
    name: 'Responsive Design',
    category: 'Development',
    level: 'Advanced',
    iconKey: 'Smartphone',
    description: 'Mobile-first design principles, cross-browser compatibility, touch friendliness, and fluid breakpoints.'
  },

  // 3. AI/ML
  {
    id: 'skill-aiml-1',
    name: 'Python',
    category: 'AI/ML',
    level: 'Advanced',
    iconKey: 'Code2',
    description: 'Core programming language for machine learning algorithms, data processing, and scripting.'
  },
  {
    id: 'skill-aiml-2',
    name: 'Machine Learning',
    category: 'AI/ML',
    level: 'Proficient',
    iconKey: 'Cpu',
    description: 'Supervised and unsupervised algorithms, classification, regression, and model evaluation metrics.'
  },
  {
    id: 'skill-aiml-3',
    name: 'Artificial Intelligence',
    category: 'AI/ML',
    level: 'Proficient',
    iconKey: 'BrainCircuit',
    description: 'Intelligent systems architecture, heuristic search, algorithmic logic, and automated workflows.'
  },
  {
    id: 'skill-aiml-4',
    name: 'Computer Vision',
    category: 'AI/ML',
    level: 'Advanced',
    iconKey: 'Eye',
    description: 'Image processing with OpenCV, facial landmark tracking (EAR/MAR), and real-time video stream analysis.'
  },
  {
    id: 'skill-aiml-5',
    name: 'Data Analysis',
    category: 'AI/ML',
    level: 'Proficient',
    iconKey: 'BarChart2',
    description: 'Exploratory data analysis (EDA), data cleaning with Pandas & NumPy, and data visualization.'
  }
];
