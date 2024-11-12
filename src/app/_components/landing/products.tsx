import { GiGrowth, GiSpiderWeb } from "react-icons/gi";
import { GiStumpRegrowth } from "react-icons/gi";
import { TbSeo } from "react-icons/tb";
import { GiSwordBrandish } from "react-icons/gi";
import { GiStickFrame } from "react-icons/gi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { services } from "fireup/lib/constants";

export default function Products() {
  return (
    <div className="mb-6 bg-gradient-to-b from-transparent via-black/20 to-transparent text-sm dark:bg-gradient-to-b dark:from-transparent dark:via-black dark:to-transparent">
      <section
        id="features"
        className="relative block border-neutral-900 bg-gradient-to-b from-transparent via-stone-400  to-transparent px-6 py-10 dark:bg-gradient-to-b dark:from-transparent dark:via-black dark:to-transparent md:px-10 md:py-20"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="my-3 flex items-center justify-center font-medium uppercase tracking-wider text-gray-900 dark:text-gray-100">
            My Services
          </span>
          <h2 className="block w-full bg-gradient-to-b from-stone-600 to-black bg-clip-text text-3xl font-bold text-transparent dark:bg-gradient-to-b dark:from-white dark:to-gray-400 sm:text-4xl">
            Below are some of the services I provide
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
            If you are in need of one of the services below, don&apos;t hesitate
            to contact me via my social links or the contact page in this site.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {
          services.map((service, ind) => 
            (
            <div key={ind} className="rounded-md border border-neutral-800 p-8 text-center font-bold shadow dark:border-[rgb(14,12,11)] hover:bg-stone-900/10 dark:hover:bg-stone-900/20   dark:font-normal transition-all duration-100">
              <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-stone-500 text-2xl  text-stone-900 dark:border-stone-900 dark:text-stone-500">
                <service.icon/>
              </div>
              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="my-4 mb-0 font-light text-sm leading-relaxed tracking-wide text-gray-900 dark:text-gray-300">{service.description}</p>
            </div>
          ))}

          {/* Repeat similar conversion for other sections */}
        </div>
      </section>
    </div>
  );
}

function IconCollaboration(props: any) {
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
  );
}

function IconCustomization(props: any) {
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
  );
}

function IconInbox(props: any) {
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
  );
}

function IconIntegration(props: any) {
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
  );
}

function IconSearch(props: any) {
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
  );
}

function IconSecurity(props: any) {
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
  );
}
