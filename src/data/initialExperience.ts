import type { Experience } from '../types';

export const initialExperience: Experience[] = [
  {
    id: 'exp-edu-1',
    role: 'B.Tech in Computer Science & Engineering (AI & ML)',
    organization: 'Sanskriti University',
    period: '2023 — 2027 (Expected)',
    location: 'Mathura, Uttar Pradesh, India',
    description: 'Pursuing specialized undergraduate studies focused on Artificial Intelligence, Machine Learning architectures, Computer Vision algorithms, and Data Analytics engineering.',
    highlights: [
      'Core coursework: Artificial Intelligence, Machine Learning, Deep Learning, Data Structures & Algorithms, Database Management Systems, Computer Vision, Probability & Statistics.',
      'Active participant in technical lab research, AI solution hackathons, and software development projects.',
      'Hands-on implementation of computer vision pipelines, predictive statistical modeling, and full-stack web applications.'
    ],
    isCurrent: true,
    type: 'Education'
  },
  {
    id: 'exp-proj-1',
    role: 'AI & Machine Learning Project Lead (Academic & Self-Directed)',
    organization: 'Independent & Academic Research',
    period: '2023 — Present',
    location: 'Sanskriti University / Remote',
    description: 'Currently building professional experience through academic projects, personal projects and continuous learning.',
    highlights: [
      'Designed and deployed an end-to-end AI Driver Awareness System using OpenCV and facial landmark analysis.',
      'Engineered supervised ML predictive pipelines for student performance analysis and cardiovascular health risk classification.',
      'Constructed modern developer web platforms and SaaS dashboard interfaces utilizing React, TypeScript, and Tailwind CSS.',
      'Continuously mastering state-of-the-art developments in Computer Vision, LLMs, and Deep Learning algorithms.'
    ],
    isCurrent: true,
    type: 'Continuous Learning'
  }
];
