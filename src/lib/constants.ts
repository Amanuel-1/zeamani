import { GiGrowth, GiSpiderWeb } from "react-icons/gi";
import { GiStumpRegrowth } from "react-icons/gi";
import { TbSeo } from "react-icons/tb";
import { GiSwordBrandish } from "react-icons/gi";
import { GiStickFrame } from "react-icons/gi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

export const services = [
  {
    icon: GiSpiderWeb,
    title: "Website Development",
    description: `Tailor your landing page's look and feel, from the color scheme to the font size, to the design of your page. I ensure a seamless and visually appealing website that meets your unique needs.`,
  },
  {
    icon: GiGrowth,
    title: "Mentorship",
    description: `Receive personalized mentorship to guide you through the intricacies of your industry. I provide valuable insights, advice, and support to help you navigate challenges and achieve your goals.`,
  },
  {
    icon: TbSeo,
    title: "SEO Optimization",
    description: `Enhance your online visibility and reach your target audience with my SEO optimization services. I'll fine-tune your website to improve its search engine rankings, driving organic traffic and increasing your online presence.`,
  },
  {
    icon: GiSwordBrandish,
    title: "Branding",
    description: `Build a strong and memorable brand identity with my comprehensive branding services. I'll work with you to define your brand, create compelling visuals, and establish a cohesive brand presence across various channels.`,
  },
  {
    icon: GiStickFrame,
    title: "UX/UI",
    description: `Elevate the user experience (UX) and user interface (UI) of your digital products. I focus on creating intuitive interfaces and seamless interactions, ensuring a delightful experience for your users.`,
  },
  {
    icon: HiMiniWrenchScrewdriver,
    title: "Auditing and Maintenance",
    description: `Ensure your digital assets thrive with my auditing and maintenance. I conduct detailed audits, identify improvements, and provide ongoing maintenance for optimal performance.`,
  },
];

// basic personal info
const basicInfo = {
  name: "Amanuel",
  fatherName: "Garomsa",
  GrandFName: "Oluma",
  age: "20",
  nationality: "Ethiopian",
  residence: "Addis Ababa,Ethiopia",
};

const contactInfo = {
  address: "Queen Elizabeth street, Arat-Kilo, Arada Subcity",
  POBox: 1000,
  email: "amanuelgaromsa@gmail.com",
  phone: "+251935046969",
  bio: `
    Hello, I'm AmanuelGaromsa, a dynamic software enthusiast and engineer currently pursuing a BSc in Computer Science at Addis Ababa University. My passion lies in crafting innovative website and application solutions, driven by a motivation to excel. With a proven track record of delivering cutting-edge solutions, I thrive on challenges, consistently aiming to exceed expectations. Eager to contribute my dedication and experience to a dynamic team that values innovation and strives for excellence in creating exceptional software solutions. Let's collaborate and elevate your projects to new heights!`,
};

const documents = {
  resume:
    "https://docs.google.com/uc?export=download&id=1Tzv0qv-mV0rOAyatmL_QYWD3qTToDIO3",
  certifications: [],
};

const educationBackground = [
  {
    school: "Catholic",
    edu_level: "kindergarten 😋",
    location: "Assosa, Ethiopia",
    year_from: "1999",
    year_to: "2001",
    remark:
      "My early years at Catholic kindergarten in Assosa, Ethiopia. Fond memories of playful learning and the joy of discovery. 😋",
  },
  {
    school: "Catholic Primary School",
    edu_level: "First Cycle",
    location: "Assosa, Ethiopia",
    year_from: "2002",
    year_to: "2009",
    remark:
      "Spent a remarkable 11 years at Catholic Primary School in Assosa, Ethiopia. Wondering how much it has changed since then!",
  },
  {
    school: "Assosa Secondary School",
    edu_level: "Second Cycle",
    location: "Assosa, Ethiopia",
    year_from: "2010",
    year_to: "2011",
    remark:
      "Embarked on the journey of the Second Cycle at Assosa Secondary School. A crucial period of academic growth and personal development.",
  },
  {
    school: "Assosa Preparatory School",
    edu_level: "Third Cycle",
    location: "Assosa, Ethiopia",
    year_from: "2012",
    year_to: "2013",
    remark:
      "Transitioned to the Third Cycle at Assosa Preparatory School. Exciting times of preparation for the next academic phase.",
  },
  {
    school: "Addis Ababa University",
    edu_level: "Bsc in Computer Science",
    location: "Addis Ababa, Ethiopia",
    year_from: "2013/14",
    year_to: "present",
    remark:
      "Currently pursuing a BSc in Computer Science at Addis Ababa University. A challenging yet rewarding journey into the world of technology and innovation.",
  },
];

const experiences = [
  {
    startYear: 2023,
    endYear: 2023,
    organization: "Ethiopian Space Science Society",
    position: "Intern",
    description:
      "Gained practical experience as an intern, working on various projects and supporting research initiatives at the Ethiopian Space Science Society.",
  },
  {
    startYear: 2023,
    endYear: 2024,
    organization: "Google Developer Students Club (GDSC) at AAU",
    position: "Core Team Member",
    description:
      "Served as a core team member of the Google Developer Students Club at AAU, contributing to tech initiatives, organizing events, and collaborating with other student developers.",
  },
  {
    startYear: 2024,
    endYear: 2024,
    organization: "Icog Labs",
    position: "Machine Learning Intern",
    description:
      "Developed hands-on skills in machine learning through an internship at Icog Labs, working alongside experienced professionals on real-world projects.",
  },
  {
    startYear: 2024,
    endYear: "Present",
    organization: "Icog Labs",
    position: "Machine Learning Engineer",
    description:
      "Currently employed as a Machine Learning Engineer at Icog Labs, responsible for designing and implementing machine learning solutions to solve complex problems.",
  },
];

const socials = {
  linkedIn: "https://www.linkedin.com/in/amanuel-garomsa-36ba79213/",
  facebook: "https://www.facebook.com/amanuel.garomsa.1/",
  youtube: "https://www.youtube.com/@watership01",
  discord: "https://discord.com/users/1039978183811932310",
  twitter: "https://twitter.com/Amanuel94738528",
  github: "https://github.com/Amanuel-1",
  telegram: "https://t.me/AmanApps",
  yebuna: "https://ye-buna.com/zeamani",
  buyMeCoffe: "https://buymeacoffee.com/amanuelgarj",
};

const InterpriseInfo = {
  academicStatus: "Bachelors Student",
  university: "Addis Ababa University",
  college: "College Of Natural And Computational Sciences",
  studyField: "Computer Science",
  expertice: [
    "Competitive Programming",
    "Java",
    "Javascript",
    "Typescript",
    "Python",
    "PHP",
    "C++",
    "c#",
    "Graphic Design",
    "UI/UX",
  ],
  toolsAndFrameworks: [
    "React.js",
    "Next.js",
    "Express.js",
    "Laravel",
    "Supabase",
    "Docker",
    "MongoDb",
    "Prisma",
    "Drizzle-orm",
    ".NET",
    "NeonDb",
    "Postgress",
    "Mysqlite",
  ],

  resumeLink: "blablablalablaba",
};

export const Me = {
  ...basicInfo,
  ...contactInfo,
  ...InterpriseInfo,
  documents,
  education: educationBackground,
  socials,
  experiences,
};

export const imgurl =
  "data:image/jpeg;base64,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";

export const keywordList = [
  "nextjs",
  "webdev",
  "fullstackdev",
  "frontenddev",
  "backenddev",
  "devops",
  "cloud",
  "cybersecurity",
  "blockchain",
  "fintech",
  "AI",
  "ML",
  "bigdata",
  "techjobs",
  "remotejobs",
  "jobsearch",
  "careerdevelopment",
  "techcareers",
  "startupjobs",
  "interviewtips",
  "salarynegotiation",
  "techpodcast",
  "startupstories",
  "technews",
  "innovation",
  "disruption",
  "futureofwork",
  "techtrends",
  "softwareupdates",
  "techconferences",
  "productowner",
  "projectmanager",
  "website",
  "blog",
  "technology",
  "globaltech",
  "artdesign",
  "musictech",
  "web3",
  "metaverse",
  "quantumcomputing",
];
