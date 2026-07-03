import React, { useEffect, useState } from 'react'

import { UpdateFollower } from 'react-mouse-follower'
import { Menuproducts } from '../menup'


const Menu = () => {
  const [visibleCards, setVisibleCards] = useState({})

  useEffect(() => {
    const cards = document.querySelectorAll('.menu-card')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => ({ ...prev, [entry.target.dataset.id]: true }))
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.2,
    })

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <>
    <div className="bg-primary-50">
      <div className="mx-auto max-w-5xl text-center px-4 mt-12 py-8 sm:px-6 sm:py-8 lg:max-w-9/12 xl:max-w-11/12 lg:px-8">
        <h2 className="text-7xl font-bold tracking-tight text-gray-900 mt-6">Our Menu</h2>
        <p className="text-lg text-gray-500">Freshly squeezed. Delivered fast.</p>

        <UpdateFollower
        mouseOptions={
            {
            backgroundColor:'#497d00',
            zIndex:9999,
            followSpeed:2.5,
            radius:5,
            mixBlendMode:"color-dodge",
            }
        }
        >
            <div className="mt-15 mx-auto  grid grid-cols-1 justify-center gap-x-10 gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-12 ">
            {Menuproducts.map((product) => (
                <div
                key={product.id}
                data-id={product.id}
                className={`menu-card group bg-lime-700 relative shadow-lg shadow-gray-400 rounded-b-lg transition-all duration-700 ease-out will-change-transform ${visibleCards[product.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-500/20 cursor-pointer`}
                >
                <img
                    alt={product.name}
                    src={product.image}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-96"
                />
                <div className="p-8 pb-0 rounded-b-lg flex justify-between bg-lime-700">
                <div className="p-6">
                    <div className="flex justify-evenly items-start mb-3 gap-2.5">
                    <h3 className="font-semibold text-xl text-primary-50">{product.name}</h3>
                    <span className="text-2xl font-bold text-primary-50">${product.price}</span>
                    </div>

                    <p className="text-primary-600 text-sm mb-6 line-clamp-2">
                    {product.description}
                    </p>

                    <div className="flex items-center  flex-row-reverse">
                      <span className="inline-block bg-gray-100 text-gray-950 text-xs px-4 py-2 rounded-full text-nowrap">
                          {product.flavor} • {product.size}
                      </span>

                      <button
                          disabled={!product.inStock}
                          className="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-nowrap text-black font-medium px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95"
                      >
                          {/* <ShoppingCart size={20} /> */}
                          Order Now
                      </button>
                    </div>
                </div> 
                                    
                </div>
                </div>
            ))}
            </div>            
        </UpdateFollower>

      </div>
    </div>    
    
    </>
  )
}

export default Menu