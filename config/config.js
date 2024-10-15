
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Eddie",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Work",
      link: "#work",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Eddie",
  description: "A Software Engineer creating apps and websites.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1MpGsmLnwA4HCORCPqrtqG-KAgsI9vmxH/view",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated from the University of Toronto, St. George, in 2020 with a double major in Computer Science and Mathematics. After graduation, I returned to Taiwan to begin my career, initially working in hardware within the premier IC industry. Later, I transitioned to a role at the World Trade Center in Taipei, developing apps to maximize efficiency.",
    "In the ever-evolving tech industry, staying adaptable and continuously learning new technologies is crucial to growth and success. I’m passionate about embracing change and constantly expanding my skills to stay ahead in this dynamic field."
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "App Development",
      description: "I create internal use app solutions utilizing Power Platform",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "NMO",
      description: "A basic introduction to different numerical methods used to optimize problems.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/ieddie217/NMO",
        }
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website to showcase my work, projects and skills as a software developer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/ieddie217/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at, ieddie217@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:ieddie217@gmail.com",
      isPrimary: true,
    }
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Eddie Wang | Software Engineer | Power Platform | Reactjs developer",
  description: "I create internal use app solutions utilizing Power Platform. I graduated from the University of Toronto (UofT) in 2020 with a double major in Computer Science and Mathematics.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@eddiewang",
  description: "Eddie Wang | Software Engineer | Power Platform | Reactjs developer",
  cards: [
    {
      title: "Website",
      link: "https://ieddie217.github.io",
    },
    {
      title: "GitHub",
      link: "https://github.com/ieddie217",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/eddie-yh-wang/",
    },
    {
      title: "Insta",
      link: "https://www.instagram.com/eddiewaaang/",
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/eddiewaaaanggg",
    },
  ]
}