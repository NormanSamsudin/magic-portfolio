import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Norman",
  lastName: "Samsudin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Flutter Developer @AgmoStudio",
  avatar: "/images/profile.jpg",
  email: "normansamsudin49@gmail.com",
  location: "Asia/Kuala_Lumpur",
  languages: ["Flutter", "Node.js", "Dev Ops", "MySQL", "MongoDB", "Digital Ocean", "Php", "Ubuntu", "Basic Web Pentest"],
};

const contact = {
  display: true,
  title: <>Get in Touch</>,
  description: (
    <>
      Have a project in mind or just want to chat? I'd love to hear from you. 
      Send me a message and I'll get back to you as soon as possible.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/NormanSamsudin",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/norman-samsudin-923b31231/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming ideas into digital reality</>,
    subline: (
    <>
      <br />
      I'm Norman, a Flutter developer passionate about mobile and web development.
      Continuously learning new technologies and exploring modern tech stacks.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Norman is a Malaysia-based Flutter developer with a passion for transforming complex ideas
        into elegant mobile and web solutions. His work spans cross-platform applications, backend
        systems, and the seamless integration of modern technology stacks.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Agmo Studio Sdn Bhd",
        timeframe: "2024 - Present",
        role: "Mobile App Developer",
        achievements: [
          <>
            Developed and deployed multiple cross-platform mobile applications using Flutter,
            serving thousands of users across Android and iOS platforms.
          </>,
          <>
            Implemented CI/CD pipelines and automated deployment processes using Firebase, 
            reducing manual deployment time and improving release reliability.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Boostorder Sdn Bhd",
        timeframe: "2023",
        role: "Quality Assurance Engineer",
        achievements: [
          <>
            Developed and implemented automated testing scripts for Flutter and MAUI applications,
            improving testing efficiency and ensuring consistent quality across mobile platforms.
          </>,
          <>
            Created comprehensive web automation testing solutions using Selenium framework,
            streamlining the testing process and reducing manual testing time by significant margins.
          </>,
          <>
            Collaborated with development teams to identify and resolve bugs early in the development cycle,
            contributing to faster release cycles and improved product reliability.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Kawanku Electronics",
        timeframe: "2018 - 2019",
        role: "Promoter",
        achievements: [
          <>
            Developed essential customer interaction and communication skills through direct sales experience,
            learning effective negotiation techniques to build rapport with customers and close deals.
          </>,
          <>
            Mastered the art of finding mutually beneficial solutions during price negotiations,
            consistently achieving sales targets while maintaining customer satisfaction.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University Putra Malaysia",
        description: <>Studied Bachelor of Computer Science (Computer System).</>,
      },
      {
        name: "Pahang Engineering Matriculation College",
        description: <>Studied fundamental engineering principles including electrical, mechanical, civil, and chemical engineering basics.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

export { person, social, contact, home, about, work };
