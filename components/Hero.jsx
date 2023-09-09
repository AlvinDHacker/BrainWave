import { ChevronRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="h-full bg-gradient-to-r from-blue-500 to-blue-100 dark:bg-gray-800 pb-24">
        <div className="mx-auto h-[90vh] max-w-screen-xl px-4 py-16 text-center">
          <h1 className="mb-4 mt-16 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Learning in the most secure environment
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
            Building your Career with Knowledge, Securing your Career with
            Blockchain
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <ChevronRight className="ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
