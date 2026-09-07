import type { Skill } from '../types';

export const initialSkills: Skill[] = [
  // Programming
  {
    id: 'skill-prog-1',
    name: 'Python',
    category: 'Programming',
    level: 'Advanced',
    iconKey: 'Code2',
    description: 'Core language for AI/ML pipelines, numerical computation, computer vision algorithms, and backend scripting.'
  },
  {
    id: 'skill-prog-2',
    name: 'JavaScript',
    category: 'Programming',
    level: 'Proficient',
    iconKey: 'FileCode',
    description: 'Modern ES6+ syntax, asynchronous programming, DOM manipulation, and interactive web architecture.'
  },
  {
    id: 'skill-prog-3',
    name: 'TypeScript',
    category: 'Programming',
    level: 'Intermediate',
    iconKey: 'FileCode2',
    description: 'Type-safe frontend development, strict interface modeling, and maintainable application engineering.'
  },
  {
    id: 'skill-prog-4',
    name: 'SQL',
    category: 'Programming',
    level: 'Intermediate',
    iconKey: 'Database',
    description: 'Relational data querying, schema structuring, aggregation pipelines, and database optimization.'
  },

  // Machine Learning
  {
    id: 'skill-ml-1',
    name: 'Scikit-learn',
    category: 'Machine Learning',
    level: 'Advanced',
    iconKey: 'Cpu',
    description: 'Supervised & unsupervised learning, classification, regression, clustering, and model validation.'
  },
  {
    id: 'skill-ml-2',
    name: 'TensorFlow',
    category: 'Machine Learning',
    level: 'Intermediate',
    iconKey: 'Layers',
    description: 'Deep neural network construction, layer architectures, model training, and parameter tuning.'
  },
  {
    id: 'skill-ml-3',
    name: 'Pandas',
    category: 'Machine Learning',
    level: 'Advanced',
    iconKey: 'Table',
    description: 'Data wrangling, dataframe manipulation, series transformations, and dataset preprocessing.'
  },
  {
    id: 'skill-ml-4',
    name: 'NumPy',
    category: 'Machine Learning',
    level: 'Advanced',
    iconKey: 'Binary',
    description: 'Multidimensional array operations, linear algebra, vectorization, and mathematical modeling.'
  },

  // AI & Computer Vision
  {
    id: 'skill-cv-1',
    name: 'OpenCV',
    category: 'AI & Computer Vision',
    level: 'Advanced',
    iconKey: 'Camera',
    description: 'Real-time image processing, facial landmark tracking, object detection, and video stream analysis.'
  },
  {
    id: 'skill-cv-2',
    name: 'Computer Vision',
    category: 'AI & Computer Vision',
    level: 'Advanced',
    iconKey: 'Eye',
    description: 'Spatial feature extraction, edge detection, optical flow, and visual pattern recognition.'
  },
  {
    id: 'skill-cv-3',
    name: 'Neural Networks',
    category: 'AI & Computer Vision',
    level: 'Intermediate',
    iconKey: 'Share2',
    description: 'Feedforward, backpropagation mechanics, activation functions, and gradient descent optimization.'
  },
  {
    id: 'skill-cv-4',
    name: 'Deep Learning',
    category: 'AI & Computer Vision',
    level: 'Intermediate',
    iconKey: 'BrainCircuit',
    description: 'CNN architectures, feature maps, image classification, and latent space representations.'
  },

  // Data
  {
    id: 'skill-data-1',
    name: 'Data Analysis',
    category: 'Data',
    level: 'Advanced',
    iconKey: 'LineChart',
    description: 'Hypothesis testing, statistical distributions, summary metrics, and anomaly detection.'
  },
  {
    id: 'skill-data-2',
    name: 'EDA',
    category: 'Data',
    level: 'Advanced',
    iconKey: 'Sparkles',
    description: 'Exploratory Data Analysis, missing value strategies, outlier identification, and feature correlation.'
  },
  {
    id: 'skill-data-3',
    name: 'Matplotlib',
    category: 'Data',
    level: 'Advanced',
    iconKey: 'BarChart2',
    description: 'Custom scientific plots, ROC curves, loss trajectories, and statistical charting.'
  },
  {
    id: 'skill-data-4',
    name: 'Data Visualization',
    category: 'Data',
    level: 'Proficient',
    iconKey: 'PieChart',
    description: 'Translating complex high-dimensional datasets into intuitive visual representations.'
  },

  // Development
  {
    id: 'skill-dev-1',
    name: 'React',
    category: 'Development',
    level: 'Proficient',
    iconKey: 'Atom',
    description: 'Component architecture, state management hooks, virtual DOM performance, and SPA routing.'
  },
  {
    id: 'skill-dev-2',
    name: 'HTML',
    category: 'Development',
    level: 'Advanced',
    iconKey: 'Code',
    description: 'Semantic markup, accessibility (a11y), SEO optimization, and web standard compliance.'
  },
  {
    id: 'skill-dev-3',
    name: 'CSS',
    category: 'Development',
    level: 'Advanced',
    iconKey: 'Palette',
    description: 'Responsive flexbox & grid layouts, custom animations, variables, and modern visual styling.'
  },
  {
    id: 'skill-dev-4',
    name: 'Tailwind CSS',
    category: 'Development',
    level: 'Advanced',
    iconKey: 'Wind',
    description: 'Utility-first styling, glassmorphism systems, dark-mode orchestration, and responsive tokens.'
  },
  {
    id: 'skill-dev-5',
    name: 'Git',
    category: 'Development',
    level: 'Proficient',
    iconKey: 'GitBranch',
    description: 'Version control, atomic commits, branching workflows, and merge conflict resolution.'
  },
  {
    id: 'skill-dev-6',
    name: 'GitHub',
    category: 'Development',
    level: 'Proficient',
    iconKey: 'Github',
    description: 'Open source collaboration, repository management, releases, and CI/CD actions.'
  }
];
