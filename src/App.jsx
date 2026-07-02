import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { UpdateFollower } from 'react-mouse-follower'
import icon from "./assets/LemonHero.png"
import { motion } from 'motion/react'

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
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
            <Footer/>

          </UpdateFollower>

        </BrowserRouter> 
      </div>


    </>
  )
}

export default App
