import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-primary-50 text-gray-900 py-8 mt-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* <!-- Footer Left: Logo and Description --> */}
                  <div>
                    <div className="shrink-0 text-gray-700 font-bold text-2xl ">
                    Lemon<span className="text-primary-500 border-t-gray-800 border-t-4" >Day</span>
                    </div>
                      <p className="mt-2  text-sm">
                          Your go-to place for fresh, delicious lemon-based products.
                      </p>
                  </div>

                  {/* <!-- Footer Center: Useful Links --> */}
                  <div>
                      <h3 className="text-lg font-semibold text-lime-700">Quick Links</h3>
                      <ul className="mt-4 space-y-2">
                          <li><a href="#" className=" hover:text-gray-300 transition">Home</a></li>
                          <li><a href="#" className=" hover:text-gray-300 transition">About</a></li>
                          <li><a href="#" className=" hover:text-gray-300 transition">Shop</a></li>
                          <li><a href="#" className=" hover:text-gray-300 transition">Menu</a></li>
                          <li><a href="#" className=" hover:text-gray-300 transition">Contact</a></li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="text-lg font-semibold text-lime-700">More Links</h3>
                      <ul className="mt-4 space-y-2">
                          <li><a href="#" className=" hover:text-gray-300 transition">Privacy Policy</a></li>
                          
                          <li><a href="#" className=" hover:text-gray-300 transition">Help Center</a></li>
                          <li><a href="#" className=" hover:text-gray-300 transition">FAQ</a></li>
                          <li><a href="#" className=" hover:text-gray-300 transition">Review</a></li>
                      </ul>
                  </div>
                  {/* <!-- Footer Right: Social Media & Contact --> */}
                  <div>
                      <h3 className="text-lg font-semibold text-lime-700">Follow Us</h3>
                      <div className="mt-4 flex flex-wrap gap-3">
                          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 p-2 hover:text-lime-700 transition">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                              </svg>
                          </a>
                          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 p-2 hover:text-lime-700 transition">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13 22v-8h2.7l.4-3H13V4.3c0-.9.3-1.5 1.5-1.5H16V.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.7v3H10v8h3z"/>
                              </svg>
                          </a>
                          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 p-2 hover:text-lime-700 transition">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22 5.9c-.8.4-1.7.7-2.6.8a4.4 4.4 0 0 0 1.9-2.4 8.9 8.9 0 0 1-2.8 1.1 4.4 4.4 0 0 0-7.5 4 12.5 12.5 0 0 1-9.1-4.6 4.4 4.4 0 0 0 1.4 5.9 4.3 4.3 0 0 1-2-.6v.1a4.4 4.4 0 0 0 3.5 4.3 4.4 4.4 0 0 1-2 .1 4.4 4.4 0 0 0 4.1 3.1A8.8 8.8 0 0 1 2 18.7a12.4 12.4 0 0 0 6.7 2 12.4 12.4 0 0 0 12.4-12.4v-.6A8.8 8.8 0 0 0 22 5.9z"/>
                              </svg>
                          </a>
                          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 p-2 hover:text-lime-700 transition">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.5 2h2.8a5.3 5.3 0 0 0 5.3 5.3v2.8a8.1 8.1 0 0 1-5.3-1.8v7.7a5.2 5.2 0 1 1-5.2-5.2c.3 0 .5 0 .8.1v2.8a2.4 2.4 0 1 0 1.6 2.3V2z"/>
                              </svg>
                          </a>
                          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 p-2 hover:text-lime-700 transition">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.4a1.56 1.56 0 0 0 0 3.1zM5.5 9.6h2.9V19H5.5zM10.1 9.6h2.8v1.3h.04c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19h-2.9v-8.4c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V19H10.1z"/>
                              </svg>
                          </a>
                      </div>
                      <p className="mt-4 text-sm">Email: support@LemonDay.com</p>
                  </div>

                
              </div>

              {/* <!-- Footer Bottom: Copyright --> */}
              <div className="mt-8 border-t border-gray-700 pt-4 text-center  text-sm">
                  <p>© 2026 VicRuro React Project.</p>
              </div>
          </div>
      </footer>

    </>
  )
}

export default Footer