import React from 'react'
import RadialProgressBar from '../ui/radialProgressBar'

const skills = [
    {
        category: "languages",
        skills: [
            "JavaScript (ES6+)",
            "Python",
            "Java",
            "C#",
            "Ruby",
            "Go",
            "Swift",
            "TypeScript"
        ]
    },
    {
        category: "webDevelopmentFrameworks",
        skills: [
            "React.js",
            "Angular.js",
            "Vue.js",
            "Node.js",
            "Django",
            "Flask",
            "Ruby on Rails",
            "Spring Boot"
        ]
    },
    {
        category: "mobileAppDevelopment",
        skills: [
            "React Native",
            "Flutter",
            "Swift",
            "Kotlin",
            "Xamarin"
        ]
    },
    {
        category: "backendDevelopment",
        skills: [
            "Express.js",
            "Django",
            "Flask",
            "Ruby on Rails",
            "Spring Boot",
            "ASP.NET"
        ]
    },
    {
        category: "databaseSystems",
        skills: [
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "SQLite",
            "Redis"
        ]
    },
    {
        category: "versionControl",
        skills: [
            "Git"
        ]
    },
    {
        category: "cloudServices",
        skills: [
            "Amazon Web Services (AWS)",
            "Microsoft Azure",
            "Google Cloud Platform (GCP)",
            "Heroku"
        ]
    },
    {
        category: "frontendTools",
        skills: [
            "Webpack",
            "Babel",
            "Sass/LESS",
            "ESLint",
            "Jest"
        ]
    },
    {
        category: "uiDesignTools",
        skills: [
            "Figma",
            "Sketch",
            "Adobe XD",
            "InVision",
            "Zeplin"
        ]
    },
    {
        category: "illustrationTools",
        skills: [
            "Adobe Illustrator",
            "Inkscape",
            "Sketch",
            "Affinity Designer",
            "Gravit Designer"
        ]
    },
    {
        category: "devOpsAndDeployment",
        skills: [
            "Docker",
            "Kubernetes",
            "Jenkins",
            "Travis CI",
            "Ansible"
        ]
    },
    {
        category: "testingFrameworks",
        skills: [
            "Jest",
            "JUnit",
            "PyTest",
            "RSpec",
            "Cucumber"
        ]
    },
    {
        category: "otherTools",
        skills: [
            "VSCode",
            "Atom",
            "Sublime Text",
            "Postman",
            "Swagger",
            "GraphQL"
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