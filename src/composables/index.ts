const getAboutBullets = () => {
  return [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 dark:text-white text-pastel-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
      content: "I've built multiple large and small scale applications using different technologies, ranging from enterprise-level projects to small and simple static sites.",
      delay: '1s'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 dark:text-white text-pastel-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
      content: "I love working with Javascript frameworks, specifically Vue & React, and do my best to keep up to date with new and exciting movements in the Javascript ecosystem.",
      delay: '2s'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 dark:text-white text-pastel-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
      content: "I can work well in both large and small teams, and also enjoy working solo when required.",
      delay: '3s'
    }
  ]
}

const getTechStack = () => {
  return [
    {
      content: 'HTML',
      category: 0 // front end
    },
    {
      content: 'CSS',
      category: 0 // front end
    },
    {
      content: 'Javascript',
      category: 0 // front end
    },
    {
      content: 'Vue',
      category: 0 // front end
    },
    {
      content: 'React',
      category: 0 // front end
    },
    {
      content: 'Astro',
      category: 0 // front end
    },
    {
      content: 'Nuxt',
      category: 0 // front end
    },
    {
      content: 'Tailwind',
      category: 0 // front end
    },
    {
      content: 'UnoCSS',
      category: 0 // front end
    },
    {
      content: 'C#',
      category: 1
    },
    {
      content: 'ASP.NET',
      category: 1 // back end
    },
    {
      content: 'Blazor',
      category: 1
    },
    {
      content: 'ServiceStack',
      category: 1
    },
    {
      content: 'SQL Server',
      category: 1
    },
    {
      content: 'PostgreSQL',
      category: 1
    },
    {
      content: 'MySQL',
      category: 1
    },
    {
      content: 'Azure DevOps',
      category: 2 // CI/CD
    },
    {
      content: 'GitHub',
      category: 2 // CI/CD
    },
    {
      content: 'Netlify',
      category: 2 // CI/CD
    },
  ]
}

export { getAboutBullets, getTechStack } 