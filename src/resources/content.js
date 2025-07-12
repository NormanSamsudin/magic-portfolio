import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Norman",
  lastName: "Samsudin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mobile App Developer",
  avatar: "/images/profile.jpg",
  email: "normansamsudin49@gmail.com",
  location: "Asia/Kuala_Lumpur",
  languages: ["Flutter", "Dart", "JavaScript", "Python", "Node.js", "MySQL", "MongoDB", "Firebase", "Git", "CI/CD"],
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
  headline: <>Building exceptional mobile experiences</>,
    subline: (
    <>
      <br />
      I'm Norman, a passionate Mobile App Developer specializing in cross-platform development with Flutter.
      I create seamless mobile experiences that connect users to innovative digital solutions.
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
        Norman is a Malaysia-based Mobile App Developer with expertise in cross-platform development
        using Flutter. With experience spanning mobile application development, quality assurance,
        and automated testing, he transforms ideas into robust mobile solutions that serve thousands
        of users across Android and iOS platforms.
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
    title: "Education",
    institutions: [
      {
        name: "University Putra Malaysia",
        description: <>Bachelor of Computer Science (Computer System) - Focused on software engineering, system design, and computer architecture.</>,
      },
      {
        name: "Pahang Engineering Matriculation College",
        description: <>Foundation in Engineering - Comprehensive study of engineering principles including electrical, mechanical, civil, and chemical engineering fundamentals.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Flutter Development",
        description: <>Expert in cross-platform mobile app development using Flutter and Dart, creating apps that serve thousands of users across Android and iOS platforms.</>,
        images: [],
      },
      {
        title: "Quality Assurance",
        description: <>Experienced in automated testing with Selenium framework, Flutter testing, and MAUI application testing to ensure high-quality software delivery.</>,
        images: [],
      },
      {
        title: "CI/CD & DevOps",
        description: <>Skilled in implementing CI/CD pipelines, automated deployment processes using Firebase, and reducing manual deployment time for improved reliability.</>,
        images: [],
      },
      {
        title: "Database Management",
        description: <>Proficient in MySQL and MongoDB for backend data management and integration with mobile applications.</>,
        images: [],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Mobile development and software engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

export { person, social, contact, home, about, work };
