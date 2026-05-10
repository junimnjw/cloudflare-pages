export const profile = {
  name: 'Jinwoo Nam',
  initials: 'JN',
  headline: 'Software Engineer · AI Architecture · AX',
  company: 'Samsung Electronics',
  about: [
    "I've been building software at Samsung Electronics for 14 years.",
    'For 10 of those years I worked on UI frameworks — the layer that turns design intent into pixels at scale.',
    'These days my focus is AI: designing AI agent systems and MCP/RAG-powered knowledge bases that make our products genuinely smarter.',
  ],
  skills: [
    'TypeScript',
    'Node.js',
    'C#',
    '.NET Runtime',
    'AI Agents',
    'MCP / RAG',
    'UI Frameworks',
  ],
  projects: [
    {
      title: 'Prism — Design to UI Code',
      description:
        'A tool that turns a design directly into runnable XAML script — closing the gap between designer and engineer. Awarded the company-wide Gold Prize.',
      tags: ['C#', '.NET', 'XAML', 'Design Tooling'],
      highlight: '🏆 Samsung Gold Prize',
    },
    {
      title: 'MapView3D — SmartThings 3D Plugin',
      description:
        'A SmartThings plugin shipped on Samsung Galaxy that turns the home into an interactive 3D space — devices rendered in 3D, manipulated in-scene, and synced to real-world hardware. Globally launched.',
      tags: ['TypeScript', '3D', 'SmartThings', 'IoT'],
      highlight: '🌍 Global launch',
    },
    {
      title: 'VS Code Extension for Tizen',
      description:
        'A VS Code extension that brings Tizen app development into a modern editor — Node-runtime based, lightweight, fast prototyping. Released 2025.',
      tags: ['TypeScript', 'Node.js', 'VS Code API', 'Tizen'],
      highlight: '🚀 Released 2025',
    },
  ],
  contacts: [
    {
      label: 'GitHub',
      href: 'https://github.com/junimnjw',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jinwoonam',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:junimnjw@gmail.com',
      icon: 'mail',
    },
  ],
  github: {
    username: 'junimnjw',
  },
} as const
