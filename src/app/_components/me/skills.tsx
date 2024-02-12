import React from 'react'
import RadialProgressBar from '../ui/radialProgressBar'

const skills = [
    {
        category: "Languages",
        skills: [
            "JavaScript (ES6+)",
            "Python",
            "Java",
            "C#",
            "VB",
            "c++",
            "PHP",
            "TypeScript"
        ]
    },
    {
        category: "Frontend Frameworks",
        skills: [
            "React.js",
            "Angular.js",
            "Vue.js",
            "Next.js"
        ]
    },
    {
        category: "Backend Frameworks",
        skills: [
            "Express.js",
            "Django",
            "Node.js",
            "ASP.NET"
        ]
    },
    {
        category: "ORMs and CMSs",
        skills: [
            "Drizzle",
            "Prisma",
            "Sanity",
            "Contentful"
        ]
    },
    {
        category: "DBMS and Baas",
        skills: [
            "MySQL",
            "PostgreSQL",
            "SQLite",
            "NeonDB",
            "Mongodb",
            "Supabase",
            "PlanetScale",
            
        ]
    },
    {
        category: "Version Control",
        skills: [
            "Git"
        ]
    },
    {
        category: "Cloud Services",
        skills: [
            "Vercel",
            "Microsoft Azure",
            "Google Cloud Platform (GCP)",
            "Heroku"
        ]
    },
    {
        category: "Frontend Tools",
        skills: [
            "Webpack",
            "Babel",
            "Sass",
            "tailwindcss",
            "ESLint",
            "Jest"
        ]
    },
    {
        category: "UI Design Tools",
        skills: [
            "Figma",
            "Sketch",
            "Adobe XD",
            "Adobe DreamWeaver"
        ]
    },
    {
        category: "Illustration Tools",
        skills: [
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Inkscape",
            "Sketch",
            "Gravit Designer",
            "Huion Scetch"
        ]
    },
    {
        category: "DevOps and testing",
        skills: [
            "Docker",
            "Jest"
        ]
    },
   
    {
        category: "Other Tools",
        skills: [
            "VSCode",
            "Atom",
            "Sublime Text",
            "Postman",
            "GraphQL",
            "Sanity",
            "Notion",
            "DBdiagram"
        ]
    },
    {
        category: "TensorFlow and Machine Learning Libraries",
        skills: [
            "TensorFlow",
            "Pandas",
            "Scikit-learn",
            "Matplotlib",
            "PyTorch"
        ]
    }
];



const Skills = () => {
  return (
    <div className="">
        <div className="flex gap-2 text-sm md:gap-16 justify-center items-center py-8  text-stone-900 dark:text-stone-200 cursor-pointer transition-all duration-700">
        <RadialProgressBar value={80} label='frontend'/>
        <RadialProgressBar value={85} label='backend'/>
        <RadialProgressBar value={70} label='UX/UI'/>
        </div>
        {/* <div className="grid grid-cols-4 gap-6 w-full">
        <div className="detailed col-span-4 md:col-span-2 flex flex-col gap-4 justify-center items-center relative w-full min-h-[8rem] pt-14 pb-3 px-3 dark:bg-[rgb(14,12,11)] border border-stone-900 rounded-[18px] dark:hover:bg-[rgb(12,11,11)] text-stone-900 dark:text-stone-200 cursor-pointer transition-all duration-700 my-4 ">
            <progress className="progress text-amber-600 w-56" value={0} max="100"></progress>
            <progress className="progress text-amber-600 w-56" value="10" max="100"></progress>
            <progress className="progress text-amber-600 w-56" value="40" max="100"></progress>
            <progress className="progress text-amber-600 w-56" value="70" max="100"></progress>
            <progress className="progress text-amber-600 w-56" value="100" max="100"></progress>
        </div>
        <div className="detailed col-span-4 md:col-span-2 flex gap-16 justify-center items-center relative w-full min-h-[8rem] pt-14 pb-3 px-3 dark:bg-[rgb(14,12,11)] border border-stone-900 rounded-[18px] dark:hover:bg-[rgb(12,11,11)] text-stone-900 dark:text-stone-200 cursor-pointer transition-all duration-700 my-4 "></div>
        <div className="detailed col-span-4 md:col-span-2 flex gap-16 justify-center items-center relative w-full min-h-[8rem] pt-14 pb-3 px-3 dark:bg-[rgb(14,12,11)] border border-stone-900 rounded-[18px] dark:hover:bg-[rgb(12,11,11)] text-stone-900 dark:text-stone-200 cursor-pointer transition-all duration-700 my-4 "></div>
        </div> */}

        {
            skills.map((item:any,ind:number)=>(
                <div key={ind} className="detailed relative col-span-4 md:col-span-2 flex flex-col gap-4 w-full min-h-[8rem] pt-14 pb-3 md:px-3 dark:bg-[rgb(14,12,11)] border border-stone-900 rounded-[18px] dark:hover:bg-[rgb(12,11,11)] text-stone-900 dark:text-stone-200 cursor-pointer transition-all duration-700 my-4 ">
                <h4 className="absolute top-2 left-6">{item.category}</h4>
                <div className="skills-list flex justify-center md:justify-normal flex-wrap md:px-6">
                        {
                            item.skills.map((skill:any,index:number)=>(
                                <div className='flex' key={index}>
                                <span className="px-1">{skill}</span>
                                <span className="px-4">•</span>
                                </div>
                            ))
                        }
                </div>
        </div>
            ))
        }
    </div>
  )
}

export default Skills