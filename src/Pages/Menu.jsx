import React, { useEffect, useState } from 'react'
import p1 from "../assets/Product/Lemonp1.jpg"
import p2 from "../assets/Product/Lemonp2.jpg"
import p3 from "../assets/Product/Lemonp3.jpg"
import p4 from "../assets/Product/Strawberry.jpg"
import p5 from "../assets/Product/menu9.jpg"
import p6 from "../assets/Product/menu6.jpg"
import p7 from "../assets/Product/menu7.jpg"
import p8 from "../assets/Product/menu8.jpg"
import p9 from "../assets/Product/menu5.jpg"
import p10 from "../assets/Product/menu10.jpg"
import p11 from "../assets/Product/menu11.jpg"
import p12 from "../assets/Product/menu12.jpg"
import { UpdateFollower } from 'react-mouse-follower'

const Menuproducts = [
  {
    id: 1,
    name: "Classic Lemonade",
    price: 4.99,
    flavor: "Classic",
    size: "500ml",
    image: p1,
    description: "Freshly squeezed lemons with perfect sweetness.",
    inStock: true,
  },
  {
    id: 2,
    name: "Strawberry Lemonade",
    price: 5.49,
    flavor: "Strawberry",
    size: "500ml",
    image: p4,
    description: "Sweet strawberries blended with zesty lemon.",
    inStock: true,
  },
  {
    id: 3,
    name: "Mint Basil Lemonade",
    price: 5.29,
    flavor: "Herbal",
    size: "500ml",
    image: p2,
    description: "Cool mint and fresh basil with citrus punch.",
    inStock: true,
  },
  {
    id: 4,
    name: "Spicy Ginger Lemonade",
    price: 5.49,
    flavor: "Spicy",
    size: "500ml",
    image: p3,
    description: "Bold ginger with a refreshing lemon finish.",
    inStock: true,
  },
  {
    id: 5,
    name: "Sugar-Free Lemonade",
    price: 4.79,
    flavor: "Classic",
    size: "500ml",
    image: p5,
    description: "All flavor, zero sugar.",
    inStock: true,
  },
  {
    id: 6,
    name: "Mango Lemonade",
    price: 5.79,
    flavor: "Mango",
    size: "500ml",
    image: p6,
    description: "Tropical mango meets classic lemonade.",
    inStock: true,
  },
  {
    id: 7,
    name: "Blueberry Lemonade",
    price: 5.59,
    flavor: "Blueberry",
    size: "500ml",
    image: p7,
    description: "Bursting with fresh blueberry flavor.",
    inStock: true,
  },
  {
    id: 8,
    name: "Watermelon Lemonade",
    price: 5.69,
    flavor: "Watermelon",
    size: "500ml",
    image: p8,
    description: "Sweet summer watermelon with lemon twist.",
    inStock: true,
  },
  {
    id: 9,
    name: "Peach Iced Tea Lemonade",
    price: 5.39,
    flavor: "Peach",
    size: "500ml",
    image: p9,
    description: "Refreshing peach + black tea lemonade.",
    inStock: true,
  },
  {
    id: 10,
    name: "Lavender Lemonade",
    price: 5.89,
    flavor: "Lavender",
    size: "500ml",
    image: p10,
    description: "Calming lavender with bright lemon.",
    inStock: true,
  },
  {
    id: 11,
    name: "Pineapple Lemonade",
    price: 5.49,
    flavor: "Pineapple",
    size: "500ml",
    image: p11,
    description: "Tropical pineapple lemonade.",
    inStock: false,
  },
  {
    id: 12,
    name: "Blood Orange Lemonade",
    price: 5.79,
    flavor: "Blood Orange",
    size: "500ml",
    image: p12,
    description: "Vibrant blood orange citrus blend.",
    inStock: true,
  },
];

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

                    <div className="flex items-center justify-between flex-row-reverse">
                    <span className="inline-block bg-gray-100 text-gray-950 text-xs px-4 py-2 rounded-full">
                        {product.flavor} • {product.size}
                    </span>

                    <button
                        disabled={!product.inStock}
                        className="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-medium px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95"
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