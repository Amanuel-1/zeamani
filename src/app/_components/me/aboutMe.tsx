import { Me } from 'fireup/lib/constants'
import React from 'react'

const AboutMe = () => {
  return (
    <div>
        <div className="bio relative">

            <h1 className="Bio">Bio</h1>
            <p className="font-light dark:text-stone-300">{Me.bio}</p>
        </div>

        <div className="background">
          <h1 className="">Education</h1>
          {/* <!-- Item #1 --> */}
                <div className="-my-6">


                {
                   // <!-- Item #1 -->
                  Me.education.map((edu,ind)=>(
                    
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                    {/* <!-- Purple label --> */}
                    <div className="font-caveat font-medium text-2xl text-amber-700 mb-1 sm:mb-0">{edu.school}</div>
                    {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#4f342daf] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-amber-700 after:border-4 after:box-content after:border-[#3c272242] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-zinc-500 bg-[#4f342d31] rounded-full">{edu.year_from} - {edu.year_to}</time>
                    <div className="text-xl font-bold text-stone-500">{edu.edu_level}</div>
                    </div>
                    {/* <!-- Content --> */}
                    <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                  ))
                }



                </div>
          
        </div>
        <div className="education"></div>
    </div>
  )
}

export default AboutMe