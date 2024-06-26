'use client'

import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
export function AboutUs() {
  return (
    <section id='about-us'>
      <main
          style=
              {
                  {
                      background: "linear-gradient(143.6deg, rgba(87, 255, 151, 0) 20.79%, rgba(121, 249, 157, 0.26) 40.92%, rgba(189, 238, 171, 0) 94.35%)",
                  }
              }
          className="w-full min-h-screen flex flex-col items-center justify-center relative"
      >
        <div className="relative overflow-hidden">
          <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-24 py-10">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
                Green Energy Power Station (GEPS)
              </h1>
              <h1 className="mt-3 block text-xl font-normal text-gray-800 sm:text-2xl md:text-3xl dark:text-white">
                A Clean Energy Solution with Decentralized Trading
              </h1>
              <p className="mt-0 text-xl text-gray-800 dark:text-neutral-400">
              GEPS, a revolutionary energy system, seamlessly integrates solar and wind power while incorporating decentralized trading. 
              </p>
            </div>
            <div className="mt-10 flex flex-row gap-5 relative max-w-5xl mx-auto">
              <div className="w-96 object-cover h-96 sm:h-[500px] sm:w-[1000px] bg-image rounded-lg" />
                <div className="absolute inset-0 size-full">
                  <div className="flex flex-col justify-end pb-8 items-center size-full">
                    <a
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 text-lg"
                      href="/#features"
                    >
                      Learn More <FiArrowUpRight />
                    </a>
                  </div>
                </div>
                <div className="absolute -bottom-4 start-4 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
                  <div className="bg-white size-48 rounded-lg dark:bg-neutral-900" />
                </div>
                <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                  <div className="bg-white size-48 rounded-full dark:bg-neutral-900" />
                </div>
              </div>
            </div>
        </div>
      </main>
    </section>
  )
}