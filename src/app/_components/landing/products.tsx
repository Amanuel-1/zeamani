import { GiGrowth, GiSpiderWeb } from "react-icons/gi";
import { GiStumpRegrowth } from "react-icons/gi";
import { TbSeo } from "react-icons/tb";
import { GiSwordBrandish } from "react-icons/gi";
import { GiStickFrame } from "react-icons/gi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

export default function Products() {
    return (
      <div className="bg-gradient-to-b from-transparent via-stone-700 to-transparent dark:bg-gradient-to-b dark:from-transparent dark:via-black dark:to-transparent text-sm font-serif mb-6">

            <section id="features" className="relative block px-6 py-10 md:py-20 md:px-10  border-neutral-900 bg-gradient-to-b from-transparent via-stone-400 to-transparent dark:bg-gradient-to-b dark:from-transparent dark:via-black dark:to-transparent">

                <div className="relative mx-auto max-w-5xl text-center">
                    <span className="text-gray-900 dark:text-gray-100 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                        My Services
                    </span>
                    <h2 className="block w-full bg-gradient-to-b from-stone-600 to-black dark:bg-gradient-to-b dark:from-white dark:to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        Below are some of the services I provide
                    </h2>
                    <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                        Our templates allow for maximum customization. No technical skills required – our intuitive design tools let you get the job done easily.
                    </p>
                </div>

                <div className="relative mx-auto max-w-7xl grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                   
                    <div className="rounded-md border border-neutral-800 dark:border-[rgb(14,12,11)] p-8 text-center font-bold dark:font-normal  shadow">
                        <div className="button-text text-stone-900 dark:text-stone-500 text-2xl mx-auto flex h-12 w-12 items-center justify-center rounded-md  border border-stone-500 dark:border-stone-900"
                            >
                              <GiSpiderWeb/>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">Website Developement</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                        Tailor your landing page&apos;s look and feel, from the color scheme to the font size, to the design of your page. I ensure a seamless and visually appealing website that meets your unique needs.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:border-[rgb(14,12,11)] p-8 text-center font-bold dark:font-normal  shadow">
                        <div className="button-text text-stone-900 dark:text-stone-500 text-2xl mx-auto flex h-12 w-12 items-center justify-center rounded-md  border border-stone-500 dark:border-stone-900"
                            >
                           <GiGrowth/>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">Mentourship</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                            Receive personalized mentorship to guide you through the intricacies of your industry. I provide valuable insights, advice, and support to help you navigate challenges and achieve your goals.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:border-[rgb(14,12,11)] p-8 text-center font-bold dark:font-normal  shadow">
                        <div className="button-text text-stone-900 dark:text-stone-500 text-2xl mx-auto flex h-12 w-12 items-center justify-center rounded-md  border border-stone-500 dark:border-stone-900"
                            >
                              <TbSeo/>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">SEO Optimization</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                            Enhance your online visibility and reach your target audience with my SEO optimization services. I&apos;ll fine-tune your website to improve its search engine rankings, driving organic traffic and increasing your online presence.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:border-[rgb(14,12,11)] p-8 text-center font-bold dark:font-normal  shadow">
                        <div className="button-text text-stone-900 dark:text-stone-500 text-2xl mx-auto flex h-12 w-12 items-center justify-center rounded-md  border border-stone-500 dark:border-stone-900">
                           <GiSwordBrandish/>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">Branding</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                            Build a strong and memorable brand identity with my comprehensive branding services. I&apos;ll work with you to define your brand, create compelling visuals, and establish a cohesive brand presence across various channels.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:border-[rgb(14,12,11)] p-8 text-center font-bold dark:font-normal  shadow">
                        <div className="button-text text-stone-900 dark:text-stone-500 text-2xl  mx-auto flex h-12 w-12 items-center justify-center rounded-md  border border-stone-500 dark:border-stone-900">
                            <GiStickFrame/>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">UX/UI</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                            Elevate the user experience (UX) and user interface (UI) of your digital products. I focus on creating intuitive interfaces and seamless interactions, ensuring a delightful experience for your users.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:border-[rgb(14,12,11)] p-8 text-center font-bold dark:font-normal  shadow">
                        <div className="button-text text-stone-900 dark:text-stone-500 text-2xl mx-auto flex h-12 w-12 items-center justify-center rounded-md  border border-stone-500 dark:border-stone-900"
                            >
                            <HiMiniWrenchScrewdriver/>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">Auditing and Maintainance</h3>
                        <p className="my-4 text-sm mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                           
Ensure your digital assets thrive with my auditing and maintenance. I conduct detailed audits, identify improvements, and provide ongoing maintenance for optimal performance.
                        </p>
                    </div>




                    {/* Repeat similar conversion for other sections */}
                </div>



            </section>
      </div>
    )
  }
  
  function IconCollaboration(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m8 6 4-4 4 4" />
        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
        <path d="m20 22-5-5" />
      </svg>
    )
  }
  
  
  function IconCustomization(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  
  function IconInbox(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    )
  }
  
  
  function IconIntegration(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m8 6 4-4 4 4" />
        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
        <path d="m20 22-5-5" />
      </svg>
    )
  }
  
  
  function IconSearch(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function IconSecurity(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
  