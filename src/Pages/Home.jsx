import React from 'react'
import Hero from './Hero/Hero'
import Product from '../Components/Product'
import { UpdateFollower } from 'react-mouse-follower'
import Review from '../Components/Review'
import Faq from '../Components/Faq'

const Home = () => {
  return (
    <>
        <Hero/>  
        <UpdateFollower
          mouseOptions={
            {
              backgroundColor:'white',
              zIndex:9999,
              followSpeed:2.5,
              scale:1.5,

              mixBlendMode:"color-dodge",
            } } 
        >
          <Product/>  
        </UpdateFollower>
                <UpdateFollower
          mouseOptions={
            {
              backgroundColor:'white',
              zIndex:9999,
              followSpeed:2.5,
              scale:1.5,

              mixBlendMode:"difference",
            } } 
        >
          <Review/>
          <Faq/>
        </UpdateFollower>


    </>
  )
}

export default Home