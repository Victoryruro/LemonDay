import { useState, lazy, Suspense } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import { UpdateFollower } from 'react-mouse-follower'
import icon from "./assets/LemonHero.png"
import { motion } from 'motion/react'

// Lazy load pages to reduce initial bundle size
const Home = lazy(() => import('./Pages/Home'))
const Menu = lazy(() => import('./Pages/Menu'))
const About = lazy(() => import('./Pages/About'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-white'>
        <BrowserRouter >
          <UpdateFollower 
            mouseOptions={
              {
                backgroundColor:'#497d00',
                zIndex:9999,
                followSpeed:2.5,
                radius:30,
                mixBlendMode:"color-dodge",
                // backgroundElement:
                //   <motion.div 
                      
                //   >
                //       <img src={icon}  />
                //   </motion.div>,
                
                
                
                
              }
            }
          >
            <Header/>
            <Suspense fallback={<div className='flex justify-center items-center min-h-screen'>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Menu" element={<Menu/>} />
                <Route path="/About" element={<About/>} />
              </Routes>
            </Suspense>
            <Footer/>

          </UpdateFollower>

        </BrowserRouter> 
      </div>


    </>
  )
}

export default App
