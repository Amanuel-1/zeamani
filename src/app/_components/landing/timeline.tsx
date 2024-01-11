import React from 'react'

const Timeline = () => {
  return (
    <div className="my-20 px-14">

    {/* <!-- Item #1 --> */}
    <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-amber-600 mb-1 sm:mb-0">The origin</div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-[rgb(199,103,70)] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[rgba(255,138,35,0.74)] bg-stone-800 rounded-full">May, 2020</time>
            <div className="text-xl font-bold text-stone-600">Acme was founded in Milan, Italy</div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-stone-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
    </div>
    
    {/* <!-- Item #2 --> */}
    <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-amber-600 mb-1 sm:mb-0">The milestone</div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full shadow-xl before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-[#ff825f]  after:rounded-full after:shadow-amber-500 before:px-px sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[rgba(255,138,35,0.74)] bg-stone-800 rounded-full">May, 2021</time>
            <div className="text-xl font-bold text-stone-600">Reached 5K customers</div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-stone-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
    </div>
    
    {/* <!-- Item #3 --> */}
    <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-amber-600 mb-1 sm:mb-0">The acquisitions</div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-[rgba(120,60,10,1)] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[rgba(255,138,35,0.74)] bg-stone-800 rounded-full">May, 2022</time>
            <div className="text-xl font-bold text-stone-600">Acquired various companies, inluding Technology Inc.</div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-stone-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
    </div>
    
    {/* <!-- Item #4 --> */}
    <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-amber-600 mb-1 sm:mb-0">The IPO</div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-[rgba(120,60,10,1)] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[rgba(255,138,35,0.74)] bg-stone-800 rounded-full">May, 2023</time>
            <div className="text-xl font-bold text-stone-600">Acme went public at the New York Stock Exchange</div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-stone-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
    </div>

</div>
  )
}

export default Timeline