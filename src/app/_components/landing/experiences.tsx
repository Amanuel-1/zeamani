import { Me } from 'fireup/lib/constants'
import React from 'react'

const Experiences = () => {
  return (
   <div className="my-20 md:px-24">
        <h1 className="md:text-4xl px-2 dark:text-stone-300">Experiences</h1>
        <div className="md:px-10">

                {/* <!-- Item #1 --> */}
                {
                    Me.experiences.map((experience,index)=>(
                        <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                            {/* <!-- Purple label --> */}
                            <div className="font-caveat font-medium text-xl md:text-2xl px-1 text-amber-600 mb-1 sm:mb-0">{experience.organization}</div>
                            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-stone-400 dark:before:bg-[rgb(20,17,16)] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-stone-400 dark:after:bg-[rgb(14,12,11)] after:border-4 after:box-content after:border-[#ff4d003f] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-stone-700 dark:text-[rgba(255,138,35,0.74)] dark:bg-[rgb(14,12,11)] border border-stone-900 rounded-full">{experience.startYear}</time>
                                <div className="text-[24px] font-bold text-stone-600 dark:text-stone-400 px-1">{experience.position}</div>
                            </div>
                            {/* <!-- Content --> */}
                            <div className="text-stone-600 dark:text-stone-400 px-2">{experience.description}</div>
                        </div>
                    ))
                }

        </div>
   </div>
  )
}

export default Experiences