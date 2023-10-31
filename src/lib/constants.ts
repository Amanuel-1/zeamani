// basic personal info
const basicInfo  = {
    name:"Amanuel",
    fatherName:"Garomsa",
    GrandFName:"Oluma",
    age:"20",
    nationality:"Ethiopian",
    residence:"Addis Ababa,Ethiopia",
    

}
const contactInfo = {
    address:"Queen Elizabeth street, Arat-Kilo, Arada Subcity",
    POBox:1000,
    email:"amanuelgaromsa@gmail.com",
    phone:"+251935046969",
    bio:`hellow . this is ${basicInfo.name + basicInfo.fatherName}, i am an aspiring software developer and engineer`,


}

 const InterpriseInfo= {
    
    academicStatus:"Bachelors Student",
    university:"Addis Ababa University",
    college:"College Of Natural And Computational Sciences",
    studyField:"Computer Science",
    expertice:[
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
    toolsAndFrameworks:[
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
        "Mysqlite"
    ],


    resumeLink:"blablablalablaba",

   




}




export const Me =  {...basicInfo , ...contactInfo,...InterpriseInfo}
