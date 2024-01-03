export type Showcase = {
  projectName: string,
  projectUrl: string,
  githubUrl: string,
  photo: string,
  description: string
}

export const jaxsShowcase: Showcase[] = [
  {
    projectName: 'jaxsPortfolio',
    projectUrl: 'https://jaxonhoffman.com',
    githubUrl: 'https://github.com/jaxCodesCode/jaxsPortfolio',
    photo: 'jaxsPortfolio.png',
    description: 'This is the site you are looking at as you read! I built this portfolio to serve as a demonstration of my capabilities. This is also my personal playground for Angular development. My portfolio is an Angular application, supported by other frameworks, such as; Angular Material, NgBootstrap, EmailJS, and PrimeNG. Complete with deployment through GitHub Pages.'
  },
  {
    projectName: 'cheffin',
    projectUrl: 'https://cheffin.vercel.app',
    githubUrl: 'https://github.com/jaxCodesCode/cheffin',
    photo: 'cheffin.png',
    description: 'This is my first real application I\'ve built using React. It comes complete with Firebase authentication, storage, and firestore. This is a work in progress at the moment, but functions well enough to serve it\'s purpose; helping me cook! My recipes are scattered all over different sites, all of which are littered with ads, or just not user friendly. Cheffin is where I save all of my recipes, for an intuitive workflow to make meals. Future features include; searching the global recipe database, following fellow chefs, and browsing cheffin anonymously.'
  },
  {
    projectName: 'React Vite Demo',
    projectUrl: 'https://todo-demo-vite.vercel.app',
    githubUrl: 'https://github.com/jaxCodesCode/todo-demo-vite',
    photo: 'reactViteDemo.png',
    description: 'This React + Vite demo application is a quick effort to build a React application built with Vite, and deployed through Vercel. My React demo application is a simple Todo implementation. It includes extremely basic authentication/roles, and provides persistent storage thorugh your browsers localstorage. I\'d like to recognize Ibas Majeed at ibaslogic for the<a target="_blank" href="https://ibaslogic.com/react-tutorial-for-beginners/">tutorial</a> which I followed.'
  }
]