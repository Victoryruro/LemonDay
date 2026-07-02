import React from 'react'
import p1 from "../assets/Product/Lemonp1.jpg"
import p2 from "../assets/Product/Lemonp2.jpg"
import p3 from "../assets/Product/Lemonp3.jpg"
import p4 from "../assets/Product/Strawberry.jpg"

const productsList = [
  {
    id: 1,
    name: "Classic Lemonade",
    href: "#",
    imageSrc: p1,
    imageAlt: "Classic fresh lemonade in glass with lemon slices",
    price: "$4.99",
    flavor: "Original",
  },
  {
    id: 2,
    name: "Strawberry Lemonade",
    href: "#",
    imageSrc: p4,
    imageAlt: "Strawberry lemonade with fresh berries",
    price: "$5.49",
    flavor: "Strawberry",
  },
  {
    id: 3,
    name: "Mint Basil Lemonade",
    href: "#",
    imageSrc: p3,
    imageAlt: "Mint and basil infused lemonade",
    price: "$5.29",
    flavor: "Herbal",
  },
  {
    id: 4,
    name: "Spicy Ginger Lemonade",
    href: "#",
    imageSrc: p2,
    imageAlt: "Ginger lemonade with fresh ginger",
    price: "$5.49",
    flavor: "Spicy",
  },
];
const Product = () => {
  return (
    <div className="bg-primary-50">
      <div className="mx-auto max-w-2xl text-center px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-7xl font-bold tracking-tight text-gray-900">Our Best Sellers</h2>
        <p className="text-lg text-gray-500">Handcrafted with real lemons and love</p>

        <div className="mt-15 grid grid-cols-1 gap-x-20 gap-y-20 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-12 ">
          {productsList.map((product) => (
            <div key={product.id} className="group relative shadow-lg shadow-gray-400 rounded-b-lg ">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-96"
              />
              <div className="p-8 rounded-b-lg flex justify-between bg-lime-700">
                <div>
                  <h3 className="text-xl text-primary-50 font-semibold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-primary-50">{product.imageAlt}</p>
                </div>
                <p className="text-sm font-medium text-primary-50">{product.price} <br /> {product.flavor}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Product