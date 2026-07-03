import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-primary-50 backdrop-blur-md shadow-md font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* <!-- Logo --> */}
            <div className="shrink-0 text-gray-700 font-bold text-2xl ">
              Lemon<span className="text-primary-500 border-t-gray-800 border-t-4" >Day</span>
            </div>

            {/* <!-- Desktop Menu --> */}
            <div className="hidden md:flex space-x-8 text-white font-semibold">
              
              <Link to="/" className=" hover:text-lime-400 transition text-gray-900 text-xl">Home</Link>
             
              <Link to="/About#shop" className="hover:text-lime-400 transition text-gray-900 text-xl">Shop</Link>

              <Link to="/About#about" className="hover:text-lime-400 transition text-gray-900 text-xl">About</Link>
              <Link to="/Menu" className="hover:text-lime-400 transition text-gray-900 text-xl">
                Menu
              </Link>
              {/* <Link to="/Contact" className="hover:text-lime-400 transition">Contact</Link> */}
            </div>

            {/* <!-- Call to Action --> */}
            <div className="hidden md:block">
              <Link to="/About#contact" className="px-4 py-2 bg-linear-to-r from-primary-400 to-citrus rounded-md text-gray-900 font-semibold text-xl hover:from-citrus hover:to-primary-400 transition-all">
                Contact Us
              </Link>
            </div>

            {/* <!-- Mobile Menu Button --> */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="text-gray-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden px-4 pb-4 flex flex-col gap-7">
              <Link to="/" className="hover:text-lime-400 transition text-gray-900 text-xl">Home</Link>
              <Link to="/About#shop" className="hover:text-lime-400 transition text-gray-900 text-xl">Shop</Link>
              <Link to="/About#about" className="hover:text-lime-400 transition text-gray-900 text-xl">About</Link>
              <Link to="/Menu" className="hover:text-lime-400 transition text-gray-900 text-xl">Menu</Link>
            <Link to="/About#contact" className="block mt-2 px-4 py-2 bg-linear-to-r from-primary-400 to-citrus text-gray-900 rounded-md text-xl text-center hover:from-citrus hover:to-primary-400 transition-all w-1/2 mx-auto font-semibold">Contact Us</Link>
          </div>
        )}
      </nav>



    
    </>
  )
}

export default Header