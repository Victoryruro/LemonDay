import React from 'react'
import { motion } from 'motion/react'
import "./Hero.css"
import image from "../../assets/LemonHero 2.png"

const Hero = () => {
  return (
    <>
        <div className=" overflow-hidden">
            <section className="relative py-16 sm:py-24 lg:py-32">
                <div className="absolute inset-0 z-0">
                <div className="h-full w-full bg-cover bg-center opacity-20" id='Hero-back' ></div>
                <div className="absolute inset-0 bg-white opacity-50"></div>
                </div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="text-white">
                    <motion.p
                      className="text-base font-semibold tracking-wider text-lime-400 uppercase"
                      initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0 }}
                    >
                        Delivered Fresh

                    </motion.p>
                    <motion.h1
                      className="mt-4 text-4xl font-bold lg:mt-8 sm:text-6xl xl:text-7xl"
                      initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
                    >
                        Premium Lemonade Served

                    </motion.h1>
<motion.p
                  className="mt-4 text-base lg:mt-8 sm:text-xl text-gray-300"
                  initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
                >
                    Ice-cold, hand-squeezed lemonade delivered .
                     Real lemons. Real flavor. Zero compromise.


                </motion.p>

<motion.a
                  href="#discover"
                  title="Discover your next journey"
                  className="inline-flex items-center px-8 py-4 mt-8 font-semibold text-white transition-all duration-300 bg-lime-600 rounded-full hover:bg-lime-700 focus:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  role="button"
                  aria-label="Discover your next journey"
                  initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.9 }}
                >
                    Shop Now 
                    <svg className="w-6 h-6 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </motion.a>

                    <motion.p
                      className="mt-6 text-gray-400"
                      initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.2 }}
                    >
                        
                        <a href="#signup" title="Sign up for an account" className="text-lime-400 transition-all duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Sign up for an account">Explore Menu?</a>
                    </motion.p>
                    </div>

                    <div className="relative hidden lg:block">
                    <motion.img
                      className="w-full h-auto "
                      src={image}
                      alt="Futuristic travel image with a planet and starry sky"
                      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.5 }}
                    />
                    {/* <!-- <div
                        className="absolute inset-0 bg-gradient-to-tl from-purple-800 to-transparent opacity-40 rounded-lg"
                    ></div> --> */}
                    </div>
                </div>
                </div>
            </section>
        </div>


    </>
  )
}

export default Hero